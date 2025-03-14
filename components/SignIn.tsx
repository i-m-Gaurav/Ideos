"use client";

import { useState } from 'react';
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button"
import Spinner from './spinner';

export default function SignIn() {
  const [loading,setLoading] = useState(false);
  const handleButtonClick = async () => {
    // Initiate Google sign-in
    setLoading(true);
    await signIn("google"); setLoading(false);
  };

  return (
 
      <Button variant="ghost" onClick={handleButtonClick} disabled = {loading}>
        {loading ? <Spinner/>: "Log In"}
      </Button>
   
  );
}