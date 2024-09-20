'use client';
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="w-screen h-screen flex items-center align-center justify-center">
      <div className="w-[90%] h-[90%] m-auto flex">
        <Image src="/image.jpg" slt="img" width={1920} height={1080} className="w-[40%] h-[100%]"/>
        <div className="bg-gray-800 grow items-center flex flex-col capitalize">
          <h1 className="text-xl font-bold text-center py-2">Let's get you ready to shine</h1>
          <br />
          <h1 className="text-center">Create your account to start practicing for interviews, presentations, and more</h1>
          <br />
          <h1 className="text-xl font-bold text-center py-2">Coonect Your MetaMask Account</h1>
          <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex ">
            Connect MetaMask <Image src="/mets.svg" alt="metaMask" width={40} height={40} className=" pl-4"/>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
