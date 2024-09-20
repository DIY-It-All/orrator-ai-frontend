import Image from "next/image";

export function Hero() {
  return (
    <div className="relative text-center">
      <Image
        src="/images.jpg"
        alt="hero_img"
        width={1920}
        height={1080}
        className="w-[90%] m-auto rounded-lg" />
      <div className="w-full absolute bottom-0 left-0 text-center p-4 pb-10 ">
        <h2 className="text-4xl font-bold w-[90%] m-auto text-left">
          Master your next interview or presentation with Orrator-AI
        </h2>
        <h2 className="w-[90%] m-auto text-left py-4">
          Get AI-powered feedback on your speaking skills. Whether you're
          preparing for a job interview, a pitch, or a public speaking event,
          Speak AI offers expert insights to help you improve.
        </h2>
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-[5vw] float-left">
          Get Started
        </button>
      </div>
    </div>
  );
}
