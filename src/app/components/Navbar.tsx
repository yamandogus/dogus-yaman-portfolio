"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

export default function Navbar() {
  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="bg-transparent">
      <NavbarContent className="basis-1/3">
        <NavbarItem>
          <p className="text-gray-600">&lt; FRONT/END DEVELOPER &gt;</p>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="basis-1/3" justify="end">
        <NavbarItem>
          <Button
            href="https://www.linkedin.com/in/yamandogus251"
            target="_blank"
            className="bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900 font-medium"
          >
            LinkedIn
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            href="https://github.com/yamandogus251"
            target="_blank"
            className="bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900 font-medium"
          >
            Github
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            href="#"
            className="bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900 font-medium"
          >
            CV ↓
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
