"use client";

//import next stuff
import Image from "next/image";

//import clerk stuff
import { UserButton, SignIn, SignUp, SignedIn, SignedOut } from "@clerk/nextjs";

//import shadcnui stuff
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

//import custom stuff
import { NavBar } from "@/components/nav-bar";

export default function Home() {
  return (
    <div>
      <NavBar currentTheme="light" />
    </div>
  );
}
