"use client";
import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../config";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const auth = getAuth(app);
  const [userId, setUserId] = useState("");

  function toHome() {
    router.push("/");
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
    </>
  );
}
