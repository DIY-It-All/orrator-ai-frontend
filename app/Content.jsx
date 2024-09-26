import { CardsList } from "./CardsList";

export function Content() {
  return (
    <>
      <div className="w-[90%] m-auto grid justify-center ">
        <h1 className="text-4xl md:text-4xl lg:text-6xl  font-black pt-4">How It Works</h1>
        
      </div>
      <div className="">
        <CardsList />
      </div>
      <div className="grid gap-24 align-center pb-24">
        <h1 className="text-4xl md:text-4xl lg:text-6xl  font-bold text-center ">
          Master your next presentation
        </h1>
        <button className=" w-56 h-20 rounded-3xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-left mx-auto">
          Get Started
        </button>
      </div>
    </>
  );
}
