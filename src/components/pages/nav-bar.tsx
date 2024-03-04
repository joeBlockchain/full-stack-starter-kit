"use client";

//import react stuff
import { useState, useEffect } from "react";

//import next stuff
import Link from "next/link";
import { useTheme } from "next-themes";

//imoport shadcnui stuff
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

//import icon stuff
import { Menu } from "lucide-react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

interface NavBarProps {
  currentTheme: string;
}

export const NavBar: React.FC<NavBarProps> = ({ currentTheme }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 backdrop-blur flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center mr-6">
        <span className="font-bold text-2xl">Fullstack</span>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" className="hidden md:block text-md">
          Blog
        </Button>
        <Button variant="ghost" className="hidden md:block text-md">
          Pricing
        </Button>
        <Button variant="outline" className="text-md">
          <SignInButton />
        </Button>
        <Button variant="default" className="text-md">
          <SignUpButton />
        </Button>
        {/* <div>{mounted && <ModeToggle />}</div> */}
      </div>
    </nav>
  );
};
