"use client";
import React, { useEffect, useRef, useState } from "react";
import { Accordion, Banner } from "flowbite-react";
import { Tabs } from "flowbite-react";
import Image from "next/image";

export default function aiOutput() {
  let temp_res = {  
    audio_transcription:
      "Alright, so today I'll be giving a demo pitch for the testing of Orator AI. So, Orator AI. The problem is communication is crucial for success in personal as well as professional spaces. Yet, many people face challenges such as ineffective tone modulation, poor body language, inconsistent eye contact and unclear speech. Traditional communication coaching can be costly, inaccessible and lack of personalization and real-time feedback. So, the hypothesis is Orator AI leverages cutting-edge AI models to offer a platform that delivers personalized feedback that too in real-time enabling users to improve communication skills effectively by providing tailored coaching insights users expect to become more confident with their speaking skills. Solution Orator AI offers an AI-powered platform where users can upload short clips of their speeches and presentations. And the system uses advanced AI models such as Wave2vec to access their multiple communication elements including speech clarity, body gestures, eye contact, vocal tone and much more than that. Upon processing, Orator AI generates comprehensive reports highlighting areas for improvement with scores for each aspect, personalized coaching tips and guides the users to enhance their specific skills creating a structured path for better communication. User flow etc etc.",
    average_word_per_minute: 147.86,
    llm_emotion_analysis: {
      common_emotion: "neutral",
      emotional_analysis: {
          description: "The detected emotion of neutrality suggests that the speaker's emotional expression is predominantly even-keel and calm. This composure likely aids in conveying the message effectively.",
          impact: "The neutral tone may help the speaker to appear objective and credible, making the message more palatable to the audience."
      },
      suggestions: [
          "To add emphasis and engage the audience, consider incorporating subtle variations in emotional expression.",
          "Practice using pauses, inflections, and facial expressions to add depth and nuance to the delivery.",
          "If the goal is to elicit a specific emotional response from the audience, consider experimenting with different emotional tones and observing the impact."
      ]
  }, 
    llm_speech_analysis: {
      good: [
          "Clearly defined problem statement and its relevance to daily life",
          "Specifics about the AI models used for analysis (e.g., Wave2vec)",
          "Introduction of a unique solution that attempts to address a pertinent issue",
          "Explanation of how the platform offers real-time, personalized feedback",
          "Overview of the features, benefits, and user experience"
      ],
      bad: [
          "Somewhat technical words like 'Wave2vec' might be unfamiliar to non-tech audience; better explaination could be provided",
          "Lack of concrete examples or anecdotes to demonstrate the effectiveness of Orator AI",
          "Several key aspects are rushed through or glossed over (e.g., 'much more than that' for AI-generated reports)",
          "Assuming a lay audience might struggle to fully grasp technical or AI-related terms",
          "The phrase 'User flow etc etc.' suggests that crucial information about user interaction was rushed or unfinished"
      ],
      improvements: [
          "Use concrete examples or use cases that demonstrate Orator AI's capabilities",
          "Provide clear explanations for AI-related terms and technology to cater to non-technical audience",
          "Vary the pacing and delivery to ensure that key points are fully explored and reinforced",
          "Define what is meant by 'structured path for better communication', offer concrete guidance on skills development",
          "Visual aids or presentation software would help reinforce the message and add visuals"
      ],
      speech_speed: "A little too fast (147.86 wpm); average ideal for this content might be 120-130 wpm to ensure audience fully absorbs all the information and avoids jargon",
      examples_of_improvements: [
          "Instead of 'much more than that' for the description of AI-generated reports, consider explaining it in a more concrete manner.",
          "Consider allocating more time for explanations on each feature and user flow."
      ],
      overall_speech: "The speech effectively delivers the core idea of Orator AI but could greatly benefit from slowing down its delivery and providing more depth and clarity in some of its key areas. Providing concrete examples to solidify these concepts and enhance audience understanding is a must.",
      score: 84
  },
    video_frame_analysis: {
      0: { neutral: 0.94 },
      1: { neutral: 0.98 },
      2: { neutral: 0.98 },
      3: { neutral: 0.51 },
      4: { neutral: 0.98 },
      5: { neutral: 0.99 },
      6: { neutral: 0.97 },
      7: { neutral: 0.98 },
      8: { neutral: 0.99 },
      9: { neutral: 0.75 },
      10: { neutral: 0.99 },
      11: { angry: 0.51 },
      12: { neutral: 1 },
      13: { neutral: 0.56 },
      14: { neutral: 0.91 },
      15: { neutral: 0.73 },
      16: { neutral: 0.98 },
      17: { neutral: 0.99 },
      18: { angry: 0.84 },
      19: { neutral: 0.99 },
      20: { neutral: 0.97 },
      21: { neutral: 0.8 },
      22: { neutral: 0.62 },
      23: { surprise: 0.54 },
      24: { neutral: 0.95 },
      25: { neutral: 0.71 },
      26: { neutral: 0.8 },
      27: { neutral: 0.35 },
      28: { neutral: 0.93 },
      29: { neutral: 0.99 },
      30: { neutral: 0.9 },
      31: { neutral: 0.81 },
      32: { neutral: 0.99 },
      33: { neutral: 0.99 },
      34: { neutral: 0.99 },
      35: { neutral: 0.98 },
      36: { neutral: 0.99 },
      37: { neutral: 0.91 },
      38: { neutral: 0.99 },
      39: { surprise: 0.95 },
      40: { neutral: 0.57 },
      41: { neutral: 0.94 },
      42: { neutral: 0.87 },
      43: { angry: 0.93 },
      44: { neutral: 0.85 },
      45: { neutral: 0.82 },
      46: { angry: 0.53 },
      47: { surprise: 0.63 },
      48: { neutral: 0.96 },
      49: { neutral: 0.95 },
      50: { neutral: 0.96 },
      51: { neutral: 0.8 },
      52: { neutral: 0.98 },
      53: { neutral: 0.98 },
      54: { neutral: 0.98 },
      55: { neutral: 0.84 },
      56: { neutral: 1 },
      57: { neutral: 0.99 },
      58: { neutral: 0.69 },
      59: { neutral: 0.81 },
      60: { neutral: 0.89 },
      61: { neutral: 0.99 },
      62: { neutral: 1 },
      63: { neutral: 0.99 },
      64: { neutral: 0.67 },
      65: { neutral: 0.93 },
      66: { neutral: 0.63 },
      67: { neutral: 0.53 },
      68: { neutral: 0.86 },
      69: { angry: 0.59 },
      70: { angry: 0.92 },
      71: { neutral: 0.99 },
      72: { surprise: 0.86 },
      73: { neutral: 0.95 },
      74: { neutral: 0.95 },
      75: { neutral: 0.99 },
      76: { neutral: 0.99 },
      77: { neutral: 0.94 },
      78: { neutral: 0.51 },
      79: { neutral: 0.96 },
      80: { neutral: 0.99 },
      81: { neutral: 0.99 },
      82: { neutral: 0.65 },
      83: { neutral: 0.55 },
      84: { neutral: 0.98 },
      85: { neutral: 0.81 },
      86: { angry: 0.51 },
      87: { neutral: 0.94 },
      88: { neutral: 0.95 },
    } 
  };
  const [aiOutput, setAIOutput] = useState(temp_res);
  useEffect(() => {
    let ai_output = localStorage.getItem("ai_output");
    if (ai_output) {
      try {
        let temp_ai_output = JSON.parse(ai_output);
        temp_ai_output.llm_emotion_analysis = JSON.parse(
          temp_ai_output.llm_emotion_analysis
        );
        temp_ai_output.llm_speech_analysis = JSON.parse(
          temp_ai_output.llm_speech_analysis
        );
        setAIOutput(temp_ai_output);
      } catch (e) {
        console.log(e);
        window.alert(
          "Some error occured while fetching the data, kindly retry again"
        );
        localStorage.removeItem("ai_output");
      }
    }
  }, []);
  const tabs_theme = {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center items-center justify-center",
      variant: {
        default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
        underline:
          "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
        pills: "flex-wrap space-x-2 text-sm font-medium text-gray-500 ",
        fullWidth:
          "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 ",
      },
      tabitem: {
        base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-purple-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:",
        variant: {
          default: {
            base: "rounded-t-lg",
            active: {
              on: "bg-gray-100 text-purple-600 dark:bg-gray-800 ",
              off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600  dark:hover:bg-gray-800 dark:hover:text-gray-300",
            },
          },
          underline: {
            base: "rounded-t-lg",
            active: {
              on: "active rounded-t-lg border-b-2 border-purple-600 text-purple-600 dark:border-purple-500 ",
              off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600  dark:hover:text-gray-300",
            },
          },
          pills: {
            base: "",
            active: {
              on: "rounded-lg bg-purple-600 text-white",
              off: "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white",
            },
          },
          fullWidth: {
            base: "ml-0 flex w-full rounded-none first:ml-0",
            active: {
              on: "active rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700",
              off: "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
            },
          },
        },
        icon: "mr-2 h-5 w-5",
      },
    },
    tabitemcontainer: {
      base: "",
      variant: {
        default: "",
        underline: "",
        pills: "",
        fullWidth: "",
      },
    },
    tabpanel: "py-3",
  };
  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }
  const [score, setScore] = React.useState(0);
  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() =>
    setScore(lerp(score, aiOutput.llm_speech_analysis.score, 0.01))
  );
  if (aiOutput.failed) {
    return (
      <>
        <p className="text-center font-black text-5xl w-[80vw] m-auto">
          Could not fetch the tests aiOutputs right now.
          <br />
          Please try again later
        </p>
      </>
    );
  } else {
    return (
      <>
        <Tabs
          aria-label="Default tabs"
          variant="default"
          theme={tabs_theme}
          className="w-[90%] m-auto"
          ref={tabsRef}
          onActiveTabChange={(tab) => {
            setActiveTab(tab);
            setScore(0);
          }}
        >
          <Tabs.Item title="Analysis Results  ">
            <div className="w-[100%] flex flex-col items-center">
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                className="-rotate-90"
              >
                <circle
                  r="70"
                  cx="80"
                  cy="80"
                  fill="transparent"
                  stroke="#e0e0e0"
                  strokeWidth="12px"
                ></circle>
                <circle
                  r="70"
                  cx="80"
                  cy="80"
                  fill="transparent"
                  stroke={`hsl(${(score / 100.0) * 120.0}deg,100%,50%)`}
                  strokeWidth="12px"
                  strokeDasharray="439.6px"
                  strokeLinecap="round"
                  strokeDashoffset={`${439.6 * ((100 - score) / 100)}px`}
                ></circle>
                {/* <text x="0" y="0" fill="red" transform="rotate(90,0,0) translate(10,0,0)">
                  {aiOutput.llm_speech_analysis.score}
                </text> */}
              </svg>
              <p className="font-black text-3xl">
                Score: {aiOutput.llm_speech_analysis.score}
              </p>
              <div>
                <Banner>
                  <div className="flex w-[87%] m-auto my-4 justify-between border-b border-gray-200 bg-gray-50 p-4">
                    <div className="mx-auto flex items-center">
                      <p className="flex items-center text-lg font-normal">
                        <span className="[&_p]:inline">
                          <span className="">
                            <span className="font-black">Speech Review:</span>{" "}
                            {aiOutput.llm_speech_analysis.overall_speech}
                          </span>
                        </span>
                      </p>
                    </div>
                    <hr /> 
                  </div> 
                </Banner>
              </div>
            </div>
            <h1 className="font-bold text-3xl text-center m-4">
              Personalised Suggestions to Improve Speech{" "}
            </h1>
            <Accordion className="mt-4" collapseAll>
              <Accordion.Panel>
                <Accordion.Title className="font-black">
                  Facial and Emotional Recommendations
                </Accordion.Title>

                {aiOutput.llm_emotion_analysis &&
                aiOutput.llm_emotion_analysis.suggestions
                  ? aiOutput.llm_emotion_analysis.suggestions.map((x, i) => {
                      return (
                        <Accordion.Content>
                          <span className="font-bold">{i + 1}.&nbsp;</span>{" "}
                          {x.toString()}
                        </Accordion.Content>
                      );
                    })
                  : "No Suggestions Found"}
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="font-black">
                  Verbal Improvements
                </Accordion.Title>

                {aiOutput.llm_speech_analysis &&
                aiOutput.llm_speech_analysis.improvements
                  ? aiOutput.llm_speech_analysis.improvements.map((x, i) => {
                      return (
                        <Accordion.Content>
                          <span className="font-bold">{i + 1}.&nbsp;</span>{" "}
                          {x.toString()}
                        </Accordion.Content>
                      );
                    })
                  : "No Improvements Found"}
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="font-black">
                  Improvement Example Points
                </Accordion.Title>

                {aiOutput.llm_speech_analysis &&
                aiOutput.llm_speech_analysis.improvements
                  ? aiOutput.llm_speech_analysis.improvements.map((x, i) => {
                      return (
                        <>
                          <Accordion.Content>
                            <span className="font-bold">{i + 1}.&nbsp;</span>{" "}
                            {x.toString()}
                          </Accordion.Content>
                        </>
                      );
                    })
                  : "No Improvements Found"}
              </Accordion.Panel>
            </Accordion>

            <hr className="py-4 mt-8 mb-4 " />
            <p className="font-black text-3xl text-center">
              Average Words Per Minute: {aiOutput.average_word_per_minute}
            </p>
            <div>
              <Banner>
                <div className="flex w-[87%] m-auto my-4 justify-between border-b border-gray-200 bg-gray-50 p-4">
                  <div className="mx-auto flex items-center">
                    <p className="flex items-center text-lg font-normal">
                      <span className="[&_p]:inline">
                        <span className="">
                          <span className="font-black">Speed Review:</span>{" "}
                          {aiOutput.llm_speech_analysis.speech_speed}
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </Banner>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Emotion Review  ">
            <div className="w-[90%] m-auto flex flex-col items-center text-justify px-8">
              {/* <p className="text-xl text-left mb-6">
                <span className="font-bold font-mono">Description:</span> {aiOutput.llm_emotion_analysis.emotional_analysis.description}
              </p>
              <hr className="py-4 mt-"/>
              <p className="text-xl text-left">
                <span className="font-bold font-mono">Impact:</span> {aiOutput.llm_emotion_analysis.emotional_analysis.impact}
              </p> */}

              <Banner>
                <div className="flex w-[87%] m-auto my-4 justify-between border-b border-gray-200 bg-gray-50 p-4 ">
                  <div className="mx-auto flex items-center">
                    <p className="flex items-center text-xl font-normal  ">
                      <span className="[&_p]:inline">
                        <span className="">
                          <span className="font-black">Description</span><br></br>
                          {aiOutput.llm_emotion_analysis &&
                          aiOutput.llm_emotion_analysis.emotional_analysis &&
                          aiOutput.llm_emotion_analysis.emotional_analysis
                            .description
                            ? aiOutput.llm_emotion_analysis.emotional_analysis
                                .description
                            : "No Description Found"}
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </Banner>
              <Banner>
                <div className="flex w-[87%] m-auto my-4 justify-between border-b border-gray-200 bg-gray-50 p-4 ">
                  <div className="mx-auto flex items-center">
                    <p className="flex items-center text-xl font-normal">
                      <span className="[&_p]:inline">
                        <span className="">
                          <span className="font-black">Impact</span><br></br>
                          {aiOutput.llm_emotion_analysis &&
                          aiOutput.llm_emotion_analysis.emotional_analysis &&
                          aiOutput.llm_emotion_analysis.emotional_analysis
                            .impact
                            ? aiOutput.llm_emotion_analysis.emotional_analysis
                                .impact
                            : "No Impact Found"}
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </Banner>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Speech Review  ">
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title className="font-black">Noticable Features</Accordion.Title>
                {aiOutput.llm_speech_analysis &&
                aiOutput.llm_speech_analysis.good
                  ? aiOutput.llm_speech_analysis.good.map((x, i) => {
                      return (
                        <Accordion.Content><span className="font-bold">{i + 1}.&nbsp;</span>{" "}{x.toString()}</Accordion.Content>
                      );
                    })
                  : "No Features Found"}
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="font-black">Noticable Mistakes</Accordion.Title>
                {aiOutput.llm_speech_analysis &&
                aiOutput.llm_speech_analysis.bad
                  ? aiOutput.llm_speech_analysis.bad.map((x, i) => {
                      return (
                        <Accordion.Content><span className="font-bold">{i + 1}.&nbsp;</span>{" "}{x.toString()}</Accordion.Content>
                      );
                    })
                  : "No Mistakes Found"}
              </Accordion.Panel>
            </Accordion>
          </Tabs.Item>
        </Tabs>
      </>
    );
  }
}
