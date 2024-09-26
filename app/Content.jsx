import Image from "next/image";
export function Content() {
  return (
    <>
      <div className="bg-gray-50 800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg 400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                About Orator-AI
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Log into the exiting world of AI enabled speech coaching.
                Orator-AI is a platform that helps you improve your speaking
                skills by providing instant feedback on your performance.
              </p>

              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-200 my-7 700"
              >
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    Completely dencentralised to ensure user privacy
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    Accurate and blasing fast models
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    Free to use for all everyone
                  </span>
                </li>
              </ul>
              <p className="mb-8 font-light lg:text-xl">
                Deliver great services fast - so you can be the best you can be.
              </p>
            </div>
            <Image
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="/image.jpg"
              alt="dashboard feature image"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>

      <section className="bg-gray-50 800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-xl font-medium text-gray-900 md:text-2xl ">
                "Orator-AI is just awesome. It contains tons of feature that can
                overturn your fear of speaking. Perfect choice to ace you
                upcoming interview."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <Image
                className="w-6 h-6 rounded-full"
                src="/image.jpg"
                alt="profile picture"
                width={1920}
                height={1080}
              />
              <div className="flex items-center divide-x-2 divide-gray-500 700">
                <div className="pr-3 font-medium text-gray-900 "></div>
                <div className="pl-3 text-sm font-light text-gray-500 400"></div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-gray-50 800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div className="max-w-screen-sm mx-auto text-center">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 ">
              Level Up Your Presentaion Skills Today.
            </h2>
            <p className="mb-6 font-light text-gray-500 400 md:text-lg">
              Orator-AI is here to help you conquer you next Interveiw.
            </p>
            <a
              href="#"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 600 purple-700 focus:outline-none purple-800"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );

  function GetStarted() {
    return (
      // <div className="grid gap-24 align-center pb-24">
      //   <h1 className="text-4xl font-bold text-center p-6">
      //     Master your next presentation
      //   </h1>
      //   <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-left mx-auto">
      //     Get Started
      //   </button>
      // </div>
      <div className="mx-auto w-[75%] max-sm:[90%] mockup-browser bg-base-300 border">
        <div className="mockup-browser-toolbar p-4 justify-center">
          <div className="input">https://daisyui.com</div>
        </div>
        <div className="flex flex-col p-[8rem] text-center">
          <h1 className="mb-5 text-5xl font-bold m-4 pb-4">
            Level Up Your Presentation Skills Today With -{" "}
            <a href="#" className="hover:underline">
              Orator-AI
            </a>
          </h1>

          <button className="btn btn-primary ">Get Started Now!</button>
        </div>
      </div>
    );
  }
}
function TextWorkingBody() {
  return (
    // <div className="w-[90%] m-auto">
    //   <h1 className="text-2xl font-black pt-4">How It Works</h1>
    //   <p className="">
    //     1. Record your performance using our in-app video recorder
    //     <br></br>
    //     2. Get instant feedback from our AI coach
    //     <br></br>
    //     3. Improve your speaking skills over time
    //   </p>
    // </div>
    <div className="p-4 mx-auto text-xl mockup-window border-base-300 border">
      <h1 className="text-5xl font-black pt-4">How It Works</h1>
      <ul className="steps steps-vertical">
        <li className="step step-primary">
          Record your performance using our in-app video recorder
        </li>
        <li className="step step-primary">
          {" "}
          Get instant feedback from our AI coach
        </li>
        <li className="step step-primary">
          {" "}
          Improve your speaking skills over time
        </li>
      </ul>
    </div>
  );
}
