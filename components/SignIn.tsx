"use client";

import { signIn } from "next-auth/react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"

export default function SignIn() {
  const handleButtonClick = async () => {
    // Initiate Google sign-in
    await signIn("google");
  };

  return (
    <Avatar>
      <Button variant="ghost" asChild onClick={handleButtonClick}>
        <SignIn />
      </Button>
    </Avatar>
  );
}