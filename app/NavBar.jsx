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

    // <div className="navbar bg-base-100">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    //       >
    //         <li>
    //         <a>How It Works</a>
    //       </li>
    //       <li>
    //         <a>Pricing</a>
    //       </li>
    //       <li>
    //         <a>Resources</a>
    //       </li>
    //       </ul>
    //     </div>
    //     <Image src="/v1.svg" width={40} height={40} alt="/logo.png" />
    //     <a className="btn btn-ghost text-xl">Orator-AI</a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       <li className="">
    //         <a>How It Works</a>
    //       </li>
    //       <li>
    //         <a>Pricing</a>
    //       </li>
    //       <li>
    //         <a>Resources</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     <ConnectWalletButtonProvider />
    //   </div>
    // </div>

    <nav className="bg-white border-gray-200 py-2.5 text-black">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="#" className="flex items-center">
                    <img src="/v1.svg" className="h-6 mr-3 sm:h-9" alt="Orator-AI Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap ">Orator-AI</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <div className="hidden mt-2 mr-4 sm:inline-block">
                    </div>
                    <ConnectWalletButtonProvider />
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 400 gray-700 gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 " aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 400 lg:white gray-700 white lg:transparent 700">Company</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 400 lg:white gray-700 white lg:transparent 700">Marketplace</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 400 lg:white gray-700 white lg:transparent 700">Features</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 400 lg:white gray-700 white lg:transparent 700">Team</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 400 lg:white gray-700 white lg:transparent 700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  );
}
