"use client";

import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {useState } from "react";
import NavItems from "@/components/NavItems";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar flex items-center justify-between px-4 py-2 shadow-md">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>

      {/* Navigation + Auth */}
      <div className="flex items-center gap-4">
        <NavItems />

        {/* Auth Controls */}
        <SignedOut>
          <div className="relative">
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="btn-auth-toggle px-4 py-2 btn-primary text-white rounded-md text-sm md:hidden"
            >
              Account
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded shadow-md z-50">
                <SignInButton >
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Sign In</button>
                </SignInButton>
                <SignUpButton >
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Sign Up</button>
                </SignUpButton>
              </div>
            )}
          </div>

          {/* Show both buttons in wider screens */}
          <div className="hidden md:flex gap-2">
            <SignInButton >
              <button className="btn-signin">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="btn-signup">Sign Up</button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
