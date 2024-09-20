import Image from "next/image";

// navbar component
function NavBarLM() {
  return (
    <div className="p-5 flex flex-wrap flex-col md:flex-row items-center shadow-[0_35px_60px_10px_rgba(255,255,255,0.017)]">
      <a className="flex title-font font-medium items-center mb-4 md:mb-0">
        <Image src="/favicon.ico" width={40} height={40} alt="/logo.png" />
        <span className="px-3 max-sm:hidden">Orrator-AI</span>
      </a>
      <div className="md:ml-auto md:mr-4 flex flex-row items-center text-base justify-center max-sm:flex-col">
        <a className="mx-2 my-1">How It Works</a>
        <a className="mx-2 my-1">Pricing</a>
        <a className="mx-2 my-1">Resources</a>
      </div>
      <div className="flex">
        <button className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-900 border-0 py-1 px-3 mt-4 md:mt-0 mx-1 rounded-sm">
          Log In
        </button>
        <button className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-900 border-0 py-1 px-3 mt-4 md:mt-0 mx-1 rounded-sm">
          Sign Up
        </button>
      </div>
    </div>
  );
}

function Hero() {
  return (
      <div className="relative text-center">
        <Image
          src="/images.jpg"
          alt="hero_img"
          width={1920}
          height={1080}
          className="w-[90%] m-auto rounded-lg"
        />
        <div className="w-full absolute bottom-0 left-0 text-center p-4 pb-10 ">
          <h2 className="text-4xl font-bold w-[90%] m-auto text-left">
          Master your next interview or presentation with Orrator-AI
          </h2>
          <h2 className="w-[90%] m-auto text-left py-4">
          Get AI-powered feedback on your speaking skills. Whether you're preparing for a job interview, a pitch, or a public speaking event, Speak AI offers expert insights to help you improve.
          </h2>
          <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-[5vw] float-left">
            Get Started
          </button>
        </div>
      </div>
  );
}
export default function Home() {
  return (
    <>
      <NavBarLM />
      <Hero />
    </>
  );
}
