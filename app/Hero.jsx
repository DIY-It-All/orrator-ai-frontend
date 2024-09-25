import Image from "next/image";
import img from "../public/images.jpg";
export function Hero() {
  return (
    // <div className="relative text-center mt-6">
    //   <Image
    //     src="/images.jpg"
    //     alt="hero_img"
    //     width={1920}
    //     height={1080}
    //     className="w-[90%] m-auto rounded-lg" />
    //   <div className="w-full absolute bottom-0 left-0 text-center p-4 pb-10 ">
    //     <h2 className="text-4xl font-bold w-[90%] m-auto text-left">
    //       Master your next interview or presentation with Orator-AI
    //     </h2>
    //     <h2 className="w-[90%] m-auto text-left py-4">
    //       Get AI-powered feedback on your speaking skills. Whether you're
    //       preparing for a job interview, a pitch, or a public speaking event,
    //       Speak AI offers expert insights to help you improve.
    //     </h2>
    //     <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-[5vw] float-left">
    //       Get Started
    //     </button>
    //   </div>
    // </div>

    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${img.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Master your next interview or presentation with Orator-AI</h1>
          <p className="mb-5">
          Get AI-powered feedback on your speaking skills. Whether you're
           preparing for a job interview, a pitch, or a public speaking event,
           Speak AI offers expert insights to help you improve.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
