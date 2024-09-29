"use client";
import React from "react";

export default function Dashboard() {
  return (
    <div className="">
      <section className="bg-gray-50 800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div className="max-w-screen-sm mx-auto text-center">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 ">
              Upload your video and get personalised feedback
            </h2>
            <p className="mb-10 font-light text-gray-500 400 md:text-lg">
              Upload your video(prefferably .mp4) and watch the AI do it's magic
            </p>
            <video
              src="https://2050today.org/wp-content/uploads/2020/07/Video-Placeholder.mp4?_=6"
              className="p-6 my-4"
              controls
              autoPlay
            ></video>
            <a
              href="#"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2 600 purple-700 focus:outline-none purple-800"
              onClick={() => {
                document.querySelector("#videoUpload").click();
              }}
            >
              Upload Video
            </a>
            <input
              type="file"
              name="video_upload"
              id="videoUpload"
              accept=".mp4"
              className="hidden"
              onChange={(ev) => {
                console.log(ev.target.files[0]);
                document.querySelector("video").src = URL.createObjectURL(ev.target.files[0]);
                document.querySelector("#continue").classList.remove("hidden");
                document.querySelector("video").pause();
              }}
            />


                        <a
              href="#"
              className="hidden text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2 600 gray-700 focus:outline-none gray-800"
              id="continue"
              onClick={() => {
                console.log("loading next page");
              }}
            >
              Continue
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
