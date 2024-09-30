"use client";
import React, { useEffect, useRef, useState } from "react";
import { Accordion, Banner } from "flowbite-react";
import { Tabs } from "flowbite-react";
import Image from "next/image";
export default function Result() {
  let result = {
    llm_emotion_analysis: {
      common_emotion: "Anger",
      emotional_analysis: {
        description:
          "The audio analysis detected a high level of anger, with a score of 99.2%. Although the video frame analysis showed a predominantly neutral tone, there were notable instances of angry expressions detected in frames 11, 18, 43, 46, 69, 70, 86. These instances suggest that the speaker's emotional state is not neutral, but rather, is characterized by suppressed anger that occasionally manifests in their facial expressions.",
        impact:
          "The prominent anger detected in the audio analysis may impact the delivery of the message, as it may come across as confrontational or aggressive to the audience. The neutral tone in the video frame analysis may not effectively convey the intended message, as the inconsistency between the audio and video emotions may create a sense of discomfort or unease.",
      },
      suggestions: [
        "Manage your emotions before speaking to ensure a more neutral tone.",
        "Practice relaxation techniques to reduce anger and promote a more composed demeanor.",
        "Consider taking a moment to collect your thoughts before responding to a question or making a statement.",
        "Work on maintaining a consistent tone in both your audio and video expressions to create a more cohesive message.",
      ],
    },
    llm_speech_analysis: {
      good: [
        "Started with a clear and concise problem statement that establishes the relevance of the solution",
        "Effectively identified the pain points of traditional communication coaching",
        "Clearly explained the hypothesis and how Orator AI addresses the problem",
        "Provided a structured overview of the solution, including its key features and benefits",
        "Demonstrated enthusiasm and passion for the product",
      ],
      bad: [
        "Started with a somewhat generic phrase 'communication is crucial for success', consider starting with a more impactful statement",
        "Used the word 'feedback' twice in a row, try to rephrase for better clarity",
        "Some sentences were a bit long and convoluted, consider breaking them up for better flow",
        "Used technical terms like 'SGII models' without explaining them, may be confusing for non-technical audience",
        "Ended somewhat abruptly, consider summarizing key points or calling to action",
      ],
      improvements: [
        "Use more nuanced language to describe the problem statement, e.g., instead of 'ineffective tone modulation', try ' struggling to convey confidence through tone'",
        "Emphasize the benefits of Orator AI, e.g., 'become more confident in their speaking skills', try 'unleash their full potential as effective communicators'",
        "Use storytelling techniques to make the solution more relatable and memorable",
        "Use visuals or examples to illustrate the features and benefits of Orator AI",
        "Consider a stronger call-to-action at the end",
      ],
      examples_of_improvements: [
        "Instead of 'the hypothesis is Orator AI leverages cutting SGII models', consider 'we believe that Orator AI, powered by cutting-edge AI technology, can revolutionize the way we communicate'",
        "Instead of 'generate comprehensive reports', consider 'provide actionable insights that help users tackle their communication challenges head-on'",
        "Instead of 'creating a structured path for better communication', consider 'guiding users on a journey of self-improvement and growth'",
      ],
      overall_speed:
        "The overall speed was moderate, with some moments where the presenter seemed to slow down to gather thoughts. It would be beneficial to practice the pitch to deliver it at a slightly faster pace while maintaining clarity.",
      score: 82,
    },
    // failed: "teu"
  };

  const tabs_theme = {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center items-center justify-center",
      variant: {
        default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
        underline:
          "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
        pills:
          "flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
        fullWidth:
          "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400",
      },
      tabitem: {
        base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-purple-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        variant: {
          default: {
            base: "rounded-t-lg",
            active: {
              on: "bg-gray-100 text-purple-600 dark:bg-gray-800 dark:text-purple-500",
              off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",
            },
          },
          underline: {
            base: "rounded-t-lg",
            active: {
              on: "active rounded-t-lg border-b-2 border-purple-600 text-purple-600 dark:border-purple-500 dark:text-purple-500",
              off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
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
              on: "active rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
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
    setScore(
      lerp(
        score,
        result.llm_speech_analysis.score,
        0.01 * (activeTab == 3 ? 1 : 0)
      )
    )
  );
  if (result.failed) {
    return (
      <>
        <p className="text-center font-black text-5xl w-[80vw] m-auto">
          Could not fetch the tests results right now.
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
            if(tab != 3) {
              setScore(0);
            }
          }}
        >
          <Tabs.Item title="Emotion Review  " active>
            <div className="w-[90%] m-auto flex flex-col items-center text-center px-8">
              <p className="font-black text-3xl">
                Main Emotion Observerved: &nbsp;
                <span
                  className={`text-${
                    result.llm_emotion_analysis.common_emotion == "Anger"
                      ? "red-500"
                      : result.llm_emotion_analysis.common_emotion == "Joy"
                      ? "green-600"
                      : result.llm_emotion_analysis.common_emotion == "Sadness"
                      ? "blue-500"
                      : "gray-600"
                  }`}
                >
                  {result.llm_emotion_analysis.common_emotion}
                </span>
              </p>
              {/* <p className="text-xl text-left mb-6">
                <span className="font-bold font-mono">Description:</span> {result.llm_emotion_analysis.emotional_analysis.description}
              </p>
              <hr className="py-4 mt-"/>
              <p className="text-xl text-left">
                <span className="font-bold font-mono">Impact:</span> {result.llm_emotion_analysis.emotional_analysis.impact}
              </p> */}

              <Banner>
                <div className="flex w-[87%] m-auto my-4 justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                  <div className="mx-auto flex items-center">
                    <p className="flex items-center text-xl font-normal text-gray-500 dark:text-gray-400">
                      <span className="[&_p]:inline">
                        <span className="">
                          <span className="font-black">Description:</span>
                          {
                            result.llm_emotion_analysis.emotional_analysis
                              .description
                          }
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </Banner>
              <Banner>
                <div className="flex w-[87%] m-auto my-4 justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                  <div className="mx-auto flex items-center">
                    <p className="flex items-center text-xl font-normal text-gray-500 dark:text-gray-400">
                      <span className="[&_p]:inline">
                        <span className="">
                          <span className="font-black">Impact:</span>
                          {
                            result.llm_emotion_analysis.emotional_analysis
                              .impact
                          }
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
                <Accordion.Title>Noticable Features</Accordion.Title>
                {result.llm_speech_analysis.good.map((x, i) => {
                  return <Accordion.Content>{x}</Accordion.Content>;
                })}
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Noticable Mistakes</Accordion.Title>
                {result.llm_speech_analysis.bad.map((x, i) => {
                  return <Accordion.Content>{x}</Accordion.Content>;
                })}
              </Accordion.Panel>
            </Accordion>
          </Tabs.Item>
          <Tabs.Item title="Suggesstions  ">
            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title>
                  Facial and Emotional Recommendations
                </Accordion.Title>

                {result.llm_emotion_analysis.suggestions.map((x, i) => {
                  return <Accordion.Content>{x}</Accordion.Content>;
                })}
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Verbal Improvments</Accordion.Title>

                {result.llm_speech_analysis.improvements.map((x, i) => {
                  return <Accordion.Content>{x}</Accordion.Content>;
                })}
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Improvement Example Points</Accordion.Title>

                {result.llm_speech_analysis.improvements.map((x, i) => {
                  return (
                    <>
                      <Accordion.Content>{x}</Accordion.Content>
                    </>
                  );
                })}
              </Accordion.Panel>
            </Accordion>
          </Tabs.Item>

          <Tabs.Item title="Overall  ">
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
                  stroke={`hsl(${
                    (score / 100.0) * 120.0
                  }deg,100%,50%)`}
                  strokeWidth="12px"
                  strokeDasharray="439.6px"
                  strokeLinecap="round"
                  strokeDashoffset={`${
                    439.6 * ((100 - score) / 100)
                  }px`}
                ></circle>
              </svg>
              <p className="font-black text-3xl">
                Score: {result.llm_speech_analysis.score}
              </p>
              <div>
                <Banner>
                  <div className="flex w-[87%] m-auto my-4 justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                    <div className="mx-auto flex items-center">
                      <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span className="[&_p]:inline">
                          <span className="">
                            <span className="font-black">Speed Review:</span>{" "}
                            {result.llm_speech_analysis.overall_speed}
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                </Banner>
              </div>
            </div>
          </Tabs.Item>
        </Tabs>
      </>
    );
  }
}
