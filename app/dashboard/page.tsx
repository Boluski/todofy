"use client";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../config";
import { useRouter } from "next/navigation";
import Loading from "../components/loading";
import DashboardNavBar from "../components/dashboardNavBar";
import { Button, Box } from "@chakra-ui/react";

export default function Dashboard() {
  const router = useRouter();
  const auth = getAuth(app);
  const [loadedData, setLoadedData] = useState(false);
  const [userData, setUserData]: any = useState({});

  // runs after component as mount
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

        setUserData(user);
        setLoadedData(true);
      } else {
        toHome();
      }
    });
  }

  return (
    <>
      {loadedData ? (
        // if true
        <Box bgColor={"#F8F8F8"} h={"100vh"}>
          <DashboardNavBar display={userData.displayName} />
          <Button
            colorScheme="brand"
            onClick={() => {
              signUserOut();
            }}
          >
            Sign Out
          </Button>
        </Box>
      ) : (
        // if false
        <Box w={"100vw"} h={"100vh"}>
          <Loading />
        </Box>
      )}
    </>
  );
}
