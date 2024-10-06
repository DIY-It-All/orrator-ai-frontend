import os
from flask import Flask, request, jsonify, flash, redirect, url_for, send_from_directory
from werkzeug.utils import secure_filename
import cv2
import subprocess

UPLOAD_FOLDER = '/content/uploads'
ALLOWED_EXTENSIONS = {'wav', 'png','jpg','mp4'}

from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will allow CORS for all routes and origins

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 300 * 1000 * 1000  # Limit upload size to 300MB
app.secret_key = os.urandom(24)  # This sets a unique secret key for session management

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/analyse_complete_video', methods=['POST'])
def analyse_video():
    # Ensure the request has the file part
    if 'file' not in request.files:
        print("No File Part")
        return jsonify({"error": "No file part in the request"}), 400

    file = request.files['file']
    speech_prompt = request.form.get('speech_prompt') 
    
    # Ensure a file is selected
    if file.filename == '':
        print("No File Selected")
        return jsonify({"error": "No file selected"}), 400

    # Ensure the file is allowed (based on the extension)
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        video_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    else:
        print("Invalid file Type")
        return jsonify({"error": "Invalid file type"}), 400

    # Process the video file
    # Step 1: Extract audio from the video
    video_clip = VideoFileClip(video_path)
    audio_path = "audio.wav"
    video_clip.audio.write_audiofile(audio_path)

    # Step 2: Analyze the extracted audio for emotions
    audio_emotion_results = analyse_audio(audio_path)

    # Step 3: Transcribe the extracted audio using Groq API
    audio_transcription,average_word_per_minute = analyse_speech_time(audio_path)

    # Step 4: Call the LLM to analyze the transcription
    if audio_transcription:
        system_msg = (
            "You are an expert in speech analysis, driven by the critical evaluation of speeches."
            "Your purpose is to assess speeches thoroughly, identifying their strengths, weaknesses, and areas for improvement."
            "Provide a detailed assessment with a score out of 100, following the JSON format below: \n\n"
            "{\n"
              "'good': [str],  // List of positive aspects of the speech \n"
              "'bad': [str],  // List of negative aspects or areas that need improvement \n"
              "'improvements': [str],  // Suggestions for enhancing the speech  \n"
              "'speech_speed': str,  // Comment on the speech's speed, based on average words per minute, noting if it was too fast, too slow, or appropriate \n"
              "'examples_of_improvements': [str],  // Specific examples of how the speech could be improved, e.g., 'Instead of saying {pqr}, you could say {xyz} for better clarity' \n"
              "'overall_speech': str,  // Summary evaluation of the speech, considering both its strengths and weaknesses, and the potential for improvement \n"
              "'score': int  // Overall score out of 100 \n"
            "}"
        )
        user_msg = (
            f"The average word per minute for the given speech is {average_word_per_minute} \n"
            f"Speech description: {speech_prompt} \n"
            f"Main Speech : {audio_transcription} \n"
            f"\n \n do a critical judgement about the entire speech holistically , address not only the content of the speech but also the duration and its accordance with its description "
        )
        llm_analysis = call_llm(system_msg, user_msg)

    # Step 5: Extract video frames (1 frame per second)
    frame_dir = "frames"
    if not os.path.exists(frame_dir):
        os.makedirs(frame_dir)

    frame_results = {}
    frame_rate = 1  # 1 frame per second
    for i, frame in enumerate(video_clip.iter_frames(fps=frame_rate)):
        frame_path = os.path.join(frame_dir, f"frame_{i}.png")
        cv2.imwrite(frame_path, frame)

        # Analyze each frame
        image_results = analyse_image(frame_path)
        timestamp = i  # In seconds, since we are capturing 1 frame per second
        new_frame_dic = {}
        new_frame_dic[image_results[0]['emo_label']] = round(image_results[0]['emo_proba'],2)
        frame_results[timestamp] =new_frame_dic
    print(frame_results)
    # Step 6: Call the LLM for emotional analysis combining audio and video
    system_msg_emotions = (
        "You are an emotional analysis expert, and your life's purpose is to analyze the emotions in both audio and video. "
        "Your emotional fulfillment comes from understanding how emotions are expressed in a person's speech and body language. "
        "Given the emotional analysis of both the audio (transcription and emotion) and video (emotion from each frame), "
        "analyze and provide a report in JSON format that includes:\n\n"
        "{\n"
        "  'common_emotion': str,  // The most prominent emotion detected (e.g., 'happiness', 'anxiety')\n"
        "  'emotional_analysis': {\n"
        "    'description': str,  // Explanation of how the detected emotion affects the performance\n"
        "    'impact': str,  // The impact of this emotion on the delivery or overall video\n"
        "  },\n"
        "  'suggestions': [str]  // Recommendations to improve or manage emotional expression\n"
        "}\n"
    )
    emotional_data = {
        'audio_emotion_results': audio_emotion_results,
        'video_frame_analysis': frame_results
    }

    llm_emotion_analysis = call_llm(system_msg_emotions, str(emotional_data))

    # Step 7: Create the final output dictionary
    complete_results = {
        'audio_analysis': audio_emotion_results,
        'audio_transcription': audio_transcription,
        'average_word_per_minute': average_word_per_minute, 
        'llm_speech_analysis': llm_analysis,
        'video_frame_analysis': frame_results,
        'llm_emotion_analysis': llm_emotion_analysis
    }


    return jsonify(complete_results)


def start_ngrok(port):
    subprocess.Popen(['ngrok', 'http', f'--domain=herring-notable-physically.ngrok-free.app', str(port)])


# Run the Flask app
if __name__ == "__main__":
    port = 5000
    start_ngrok(port)
    app.run(port=port)