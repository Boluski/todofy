"use client";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../config";
import { useRouter } from "next/navigation";
import Loading from "../components/loading";
import { Stack } from "@chakra-ui/react";

export default function Dashboard() {
  const router = useRouter();
  const auth = getAuth(app);
  // const [userData, setUserData] = useState();

  // Displays the welcome message
  // function welcome() {
  //   if (userData == null) {
  //     return <></>
  //   } else {
  //     return <h1>Welcome Back, {userData.displayName}</h1>
  //   }
  // }

  useEffect(() => {
    userStatus();
  }, []);

  // Redirects user to the landing page
  function toHome() {
    router.push("/");
  }

  // Signs out the current user
  function signUserOut() {
    signOut(auth)
      .then(() => {
        // success
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // does something based on the user status
  function userStatus() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // setUserData(user);
        console.log(user.email);
        console.log(user.displayName);
      } else {
        toHome();
      }
    });
  }

  return (
    <>
      <Stack w={"100vw"} h={"100vh"}>
        <Loading />
      </Stack>

      {/* <h1>Welcome Back, </h1>
      <Button
        colorScheme="brand"
        onClick={() => {
          signUserOut();
        }}
      >
        Sign Out
      </Button> */}
    </>
  );
}
