"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Navlink from "./Navlink";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid"

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Portfolio",
    path: "#portfolio",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 dark:bg-darkblue/90 bg-background/90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href={"/"}
          className="hover:scale-110 duration-100"
        >
          <Image
            src="/images/hero-logo.png"
            alt="Logo"
            height={50}
            width={50}
            className="rounded-full"
          />
        </Link>
        <div className="menu block w-auto" id="navigation">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
