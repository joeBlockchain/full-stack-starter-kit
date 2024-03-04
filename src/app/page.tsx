"use client";

//import next stuff
import Image from "next/image";
import heroImageDark from "../../public/hero-dark.png";
import heroImageLight from "../../public/hero-light.png";

//import clerk stuff
import { UserButton, SignIn, SignUp, SignedIn, SignedOut } from "@clerk/nextjs";

//import shadcnui stuff
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

//import custom stuff
import { NavBar } from "@/components/pages/nav-bar";
import { Hero } from "@/components/pages/hero";
import { Partners } from "@/components/pages/partners";

export default function Home() {
  return (
    <div>
      <NavBar currentTheme="light" />
      <Hero />
      <div className="m-4 p-4 border border-border rounded-3xl">
        <Image
          src={heroImageLight}
          alt="Hero"
          priority
          className="rounded-xl dark:hidden"
        />
        <Image
          src={heroImageDark}
          alt="Hero"
          priority
          className="rounded-xl dark:block hidden"
        />
      </div>
      <Partners />
    </div>
  );
}
