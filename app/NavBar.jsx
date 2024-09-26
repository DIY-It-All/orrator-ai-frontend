'use client'
import { useState } from "react";
import Image from "next/image";
import ConnectWalletButtonProvider from "./components/ConnectWalletButtonProvider";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"; // Importing hamburger and close icons

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage open/close of mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggles menu state
  };

  return (
    <nav className="p-5 bg-slate-900 rounded-3xl shadow-[0_35px_60px_10px_rgba(255,255,255,0.017)]">
      <div className="flex justify-between items-center">
        {/* Logo and Branding */}
        <a className="flex title-font font-medium items-center">
          <Image src="/logo.png" width={40} height={40} alt="logo" />
          <span className="px-3 text-gradient font-bold text-2xl tracking-wider  sm:inline">
            Orator-AI
          </span>
        </a>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <HiOutlineX className="w-8 h-8" />
            ) : (
              <HiOutlineMenuAlt3 className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Centered Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex md:items-center text-white space-x-6">
          <a
            href="#"
            className="hover:text-gray-300 transition duration-200 ease-in-out font-semibold uppercase tracking-widest"
          >
            How It Works
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition duration-200 ease-in-out font-semibold uppercase tracking-widest"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition duration-200 ease-in-out font-semibold uppercase tracking-widest"
          >
            Resources
          </a>
        </div>

        {/* Connect Wallet Button */}
        <div className="hidden md:flex gap-4 px-6">
          <ConnectWalletButtonProvider />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4 text-white">
          <a
            href="#"
            className="hover:text-gray-300 transition duration-200 ease-in-out font-semibold uppercase tracking-widest"
          >
            How It Works
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition duration-200 ease-in-out font-semibold uppercase tracking-widest"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition duration-200 ease-in-out font-semibold uppercase tracking-widest"
          >
            Resources
          </a>
          {/* Connect Wallet Button in Mobile Menu */}
          <div className="flex justify-center">
            <ConnectWalletButtonProvider />
          </div>
        </div>
      )}
    </nav>
  );
}
