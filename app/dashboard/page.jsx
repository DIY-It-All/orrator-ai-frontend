"use client";
import React, { useEffect } from "react";
import {
  FileInput,
  Label,
  Progress,
  Modal,
  Button,
  FloatingLabel,
} from "flowbite-react";
import ProcessVideo from "../actions/processVideo";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function Dashboard() {
  const [vid_uploaded, setVidUploaded] = React.useState(false);
  const [video, setVideo] = React.useState(null);
  const [progress, setProgress] = React.useState(0);
  const [ai_output, setAIOutput] = React.useState("");
  const [got_ai_output, setGotAIOutput] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }
  useEffect(() => {
    if (got_ai_output) {
      console.log("got ai output");
      // set the ai output in local storage
      localStorage.setItem("ai_output", JSON.stringify(ai_output));

      window.location.href = "/result";
    }

    if (loading && progress != 100 && !ai_output && ai_output.length == 0) {
      setProgress(lerp(progress, 101, 0.0000025));
      if (progress > 100) {
        setProgress(100);
        // setTimeout(() => {
        //   window.location.href = "/result";
        // })
      }
    }
  }, [loading, progress, ai_output]);

  useEffect(() => {
    if (
      window.localStorage.getItem("subscribed") == "false" ||
      !window.localStorage.getItem("subscribed")
    ) {
      setOpenModal(true);
    }
  }, []);

  let html = <>Error -&gt help</>;
  if (!vid_uploaded) {
    html = (
      <>
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(true)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                You do not have a vaild subscription. Please subscribe to use
                Orator-AI
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="failure"
                  onClick={() => (window.location.href = "/pricing")}
                >
                  {"Subscribe Now"}
                </Button>
                <Button
                  color="gray"
                  onClick={() => (window.location.href = "/")}
                >
                  Go to Home
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <div className="">
          <section className="bg-gray-50 800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
              <div className="max-w-screen-sm mx-auto text-center">
                <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 ">
                  Upload your video and get personalised feedback
                </h2>
                <p className="mb-10 font-light text-gray-500 400 md:text-lg">
                  Upload your video(prefferably .mp4) and watch the AI do it's
                  magic
                </p>

                <div className="flex w-full items-center justify-center">
                  <Label
                    htmlFor="dropzone-file"
                    className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <svg
                        className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        MP4 format only
                      </p>
                    </div>
                    <FileInput
                      id="dropzone-file"
                      className="hidden"
                      accept=".mp4"
                      onChange={(ev) => {
                        document.querySelector("video").src =
                          URL.createObjectURL(ev.target.files[0]);
                        setVideo(ev.target.files[0]);
                        document
                          .querySelector("#continue")
                          .classList.remove("hidden");
                        document
                          .querySelector("video")
                          .classList.remove("hidden");
                        document.querySelector("video").pause();
                      }}
                    />
                  </Label>
                </div>
                <div className="flex w-full py-4 ">
                  <input
                    type="text"
                    id="speech_prompt"
                    placeholder="Give a simple desciption about the topic of your speech"
                    className="input input-ghost input-primary grow"
                  />
                </div>
               
                <video
                  src=""
                  className="p-6 my-4 hidden"
                  controls
                  autoPlay
                ></video>

                <a
                  href="#"
                  className="hidden text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2 600 gray-700 focus:outline-none gray-800"
                  id="continue"
                  onClick={async () => {
                    console.log("loading next page");
                    setVidUploaded(true);
                    setLoading(true);
                    let res = await ProcessVideo(
                      document.querySelector("#speech_prompt").value,
                      video
                    );
                    if (res.error) {
                      console.warn("error in processing video....");
                      setOpenModal(true);
                      // alert("AI servers are currently offline. Please try again");
                      return;
                    }
                    setGotAIOutput(true);
                    setAIOutput(res);
                    setLoading(false);
                  }}
                >
                  Continue
                </a>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  } else {
    html = (
      <>
        <div className="w-[45vw] m-auto">
          <Progress
            progress={parseInt(progress)}
            progressLabelPosition="inside"
            textLabel="Processing the video"
            textLabelPosition="outside"
            size="2xl"
            labelProgress
            labelText
          />
          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  AI servers are currently offline. Please try again
                </h3>
                <div className="flex justify-center gap-4">
                  <Button
                    color="failure"
                    onClick={() => (window.location.href = "/")}
                  >
                    {"Go to Home"}
                  </Button>
                  <Button
                    color="gray"
                    onClick={() => (window.location.href = "/dashboard")}
                  >
                    Retry
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </>
    );
  }

  return html;
}
