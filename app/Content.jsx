import { CardsList } from "./CardsList";

export function Content() {
  return (
    <>
      <div className="flex w-full flex-col">
        <TextWorkingBody />
        <div className="divider"></div>
        <CardsList />
        <div className="divider"></div>
        <GetStarted />
      </div>
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
          <h1 className="mb-5 text-5xl font-bold m-4 pb-4">Level Up Your Presentation Skills Today With - <a href="#" className="hover:underline">Orator-AI</a></h1>
         
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
