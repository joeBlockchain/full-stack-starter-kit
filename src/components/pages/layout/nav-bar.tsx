"use client";

//import react stuff
import { useState, useEffect } from "react";

//import next stuff
import Link from "next/link";
import { useTheme } from "next-themes";

//imoport shadcnui stuff
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

//import clerk stuff
import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn,
  SignedOut,
  ClerkLoading,
} from "@clerk/nextjs";

//import icon stuff
import { UserRound } from "lucide-react";

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
    <nav className="sticky top-0 z-50 border-b border-border/40 backdrop-blur flex items-center justify-between flex-wrap p-8">
      <Link href="/" className="flex items-center mr-6">
        <span className="font-bold text-2xl">Fullstack</span>
      </Link>
      <div className="flex items-center gap-3">
        <Button variant="ghost" className="hidden md:block text-md">
          <Link href="/blog">Blog</Link>
        </Button>
        <Button variant="ghost" className="hidden md:block text-md">
          <Link href="/pricing">Pricing</Link>
        </Button>
        <SignedOut>
          <SignInButton>
            <Button variant="outline" className="text-md">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button variant="default" className="text-md">
              Get Started
            </Button>
          </SignUpButton>
        </SignedOut>
        <ClerkLoading>
          <div className="rounded-full bg-accent text-muted-foreground w-11 h-11 flex items-center justify-center">
            <UserRound className="w-5 h-5" />
          </div>
        </ClerkLoading>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <ModeToggle />
      </div>
    </nav>
  );
};
