//import next stuff
import Image from "next/image";

//import clerk stuff
import { UserButton, SignIn, SignUp, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignIn />
    </div>
  );
}
