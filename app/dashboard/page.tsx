"use client";
import React, { useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../config";
import { useRouter } from "next/navigation";
import { Button } from "@chakra-ui/react";

export default function Dashboard() {
  const router = useRouter();
  const auth = getAuth(app);
  const [userId, setUserId] = useState("");

  // Redirects user to the landing page
  function toHome() {
    router.push("/");
  }

  // Signs out the current user
  function signUserOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserId(user.uid);
    } else {
      toHome();
    }
  });
  return (
    <>
      <h1>Welcome Back, {userId}</h1>
      <Button
        colorScheme="brand"
        onClick={() => {
          signUserOut();
        }}
      >
        Sign Out
      </Button>
    </>
  );
}
