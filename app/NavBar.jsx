import Image from "next/image";
import ConnectWalletButtonProvider from "./components/ConnectWalletButtonProvider";
export function NavBar() {
  return (
    // <div className="p-5 flex flex-wrap flex-col md:flex-row items-center shadow-[0_35px_60px_10px_rgba(255,255,255,0.017)]">
    //   <a className="flex title-font font-medium items-center mb-4 md:mb-0">
    //     <Image src="/favicon.ico" width={40} height={40} alt="/logo.png" />
    //     <span className="px-3 max-sm:hidden">Orator-AI</span>
    //   </a>
    //   <div className="md:ml-auto md:mr-4 flex flex-row items-center text-base justify-center max-sm:flex-col">
    //     <a className="mx-2 my-1">How It Works</a>
    //     <a className="mx-2 my-1">Pricing</a>
    //     <a className="mx-2 my-1">Resources</a>
    //   </div>
    //   <div className="flex">

    //   <div className="flex gap-4 px-6">
    //   </div>
    //     <ConnectWalletButtonProvider/>
    //   </div>
    // </div>

    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
            <a>How It Works</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Resources</a>
          </li>
          </ul>
        </div>
        <Image src="/v1.svg" width={40} height={40} alt="/logo.png" />
        <a className="btn btn-ghost text-xl">Orator-AI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="">
            <a>How It Works</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Resources</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ConnectWalletButtonProvider />
      </div>
    </div>
  );
}
