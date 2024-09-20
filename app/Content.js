import { CardsList } from "./CardsList";

export function Content() {
  return (
    <>
      <div className="w-[90%] m-auto">
        <h1 className="text-2xl font-black pt-4">How It Works</h1>
        <p className="">
          1. Record your performance using our in-app video recorder
          <br></br>
          2. Get instant feedback from our AI coach
          <br></br>
          3. Improve your speaking skills over time
        </p>
      </div>
      <div className="">
        <CardsList />
      </div>
      <div className="grid gap-24 align-center pb-24">
        <h1 className="text-4xl font-bold text-center p-6">
          Master your next presentation
        </h1>
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-left mx-auto">
          Get Started
        </button>
      </div>
    </>
  );
}
