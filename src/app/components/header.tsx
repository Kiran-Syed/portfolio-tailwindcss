
"use client";
import { GraduationCap, Menu, Moon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (

    <div className="fixed w-full top-0 left-0 z-50">
      <div className="bg-sky-100 shadow-md">
        <nav className="w-11/12 mx-auto p-4">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-2xl md:text-3xl text-red-600 flex items-center">
              <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-gray-600 mr-2" />
              Kiran<span className="text-gray-600">.</span>
            </h1>

            {/* Desktop Navigation */}

            <ul className="hidden md:flex items-center gap-8">
              <li className="text-gray-600 text-lg hover:text-red-500 transition-colors">
                <Link href="/">Home</Link>
              </li>
              <li className="text-gray-600 text-lg hover:text-red-500 transition-colors">
                <Link href="/about">About</Link>
              </li>
              <li className="text-gray-600 text-lg hover:text-red-500 transition-colors">
                <Link href="/contact">Contact-Us</Link>
              </li>
              <button className="p-2 rounded-lg bg-red-700 text-white hover:bg-red-600 transition-colors">
                <Moon className="w-5 h-5" />
              </button>
            </ul>

            {/* Mobile Navigation Controls */}

            <div className="flex items-center gap-4 md:hidden">
              <button className="p-2 rounded-lg bg-red-700 text-white hover:bg-red-600">
                <Moon className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setNavbar(!navbar)}
                className="text-gray-600">

                {navbar ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          
          {navbar && (
            <div className="md:hidden mt-4 pb-4">
              <ul className="flex flex-col gap-4">
                <li className="text-gray-600 text-lg hover:text-red-500 transition-colors">
                  <Link href="/" onClick={() => setNavbar(false)}>
                    Home
                  </Link>
                </li>
                <li className="text-gray-600 text-lg hover:text-red-500 transition-colors">
                  <Link href="/about" onClick={() => setNavbar(false)}>
                    About
                  </Link>
                </li>
                <li className="text-gray-600 text-lg hover:text-red-500 transition-colors">
                  <Link href="/contact" onClick={() => setNavbar(false)}>
                    Contact-Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
