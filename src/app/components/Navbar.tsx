"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <NextUINavbar
      maxWidth="2xl"
      position="sticky"
      className="w-full rounded-xl mt-2 bg-transparent"
    >
      <NavbarContent className="w-full sm:w-auto basis-1/3">
        <NavbarItem className="w-full flex justify-center sm:justify-start cursor-pointer">
          <p className="text-gray-400 cursor-pointer font-semibold ">
            <span className="text-xl text-blue-500 font-bold">&lt;</span>
            FRONT
            <span className="text-xl text-red-500 font-bold">/</span>END
            DEVELOPER
            <span className="text-xl text-blue-500 font-bold">&gt;</span>
          </p>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/3 justify-end"
        justify="end"
      >
        <NavbarItem>
          <Button
            as={Link}
            href="https://www.linkedin.com/in/dogusyaman/"
            target="_blank"
            className="bg-white hover:bg-blue-400 text-gray-600 hover:text-gray-900 font-medium"
          >
            LinkedIn
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="https://github.com/yamandogus"
            target="_blank"
            className="bg-white hover:bg-black text-gray-600 hover:text-white font-medium duration-300 transition ease-in-out"
          >
            Github
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="/CV.pdf"
            className="bg-white hover:bg-green-400 text-gray-600 hover:text-black font-medium duration-300 transition ease-in-out"
            download
          >
            CV <span className="hover:rotate-12 duration-300">↓</span>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
