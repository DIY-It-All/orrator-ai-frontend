import Image from "next/image";

export function Hero() {
  return (
    <div className="relative text-center mt-6">
      {/* Hero Image */}
      <Image
        src="/Hero-Image-BGR.jpg"
        alt="hero_img"
        width={1920}
        height={1080}
        className="w-[90%] m-auto rounded-2xl"
      />

      {/* Hero Text and Button */}
      <div className="w-full lg:absolute lg:bottom-0 left-0 text-center p-4 pb-10">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold w-[90%] m-auto text-left leading-tight">
          Master your next interview or presentation with Orator-AI
        </h2>
        <h2 className="w-[90%] m-auto text-left py-4 text-lg md:text-2xl lg:text-3xl leading-relaxed hidden md:block">
          Get AI-powered feedback on your speaking skills. Whether you're preparing for a job interview, a pitch, or a public speaking event, Speak AI offers expert insights to help you improve.
        </h2>

        {/* Button */}
        <button className="w-32 md:w-44 h-10 md:h-14 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl ml-[5vw] float-left text-sm md:text-base">
          Get Started
        </button>
      </div>
    </div>
  );
}
