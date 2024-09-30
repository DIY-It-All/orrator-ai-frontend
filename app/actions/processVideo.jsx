import React from "react";

export default async function ProcessVideo(video) {
  try {
    const formData = new FormData();
    formData.append("file", video, "file.mp4"); // Append the video file with the name 'file.mp4'

    // Send the video to the server via fetch
    let response = await fetch(
      "https://herring-notable-physically.ngrok-free.app/analyse_complete_video",
      {
        method: "POST",
        body: formData,
      }
    );
    let res_json = await response.json();
    console.log("Success:", res_json);
    return res_json;
  } catch (error) {
    console.error("Error:", error);
    return { error: error };
  }
}
