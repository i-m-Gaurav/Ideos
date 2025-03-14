"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button"

export default function SignIn() {
  const handleButtonClick = async () => {
    // Initiate Google sign-in
    await signIn("google");
  };

  return (
 
      <Button variant="ghost" onClick={handleButtonClick}>
        Log In
      </Button>
   
  );
}