"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

//imoport shadcnui stuff
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

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
    <nav className=" sticky top-0 z-50 border-b border-border/40 backdrop-blur flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-bold text-xl">Fullstack</span>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="link" className="">
          <SignInButton />
        </Button>
        <Button variant="default" className="">
          <SignUpButton />
        </Button>
        <div>{mounted && <ModeToggle />}</div>
      </div>
    </nav>
  );
};
