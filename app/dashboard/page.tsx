"use client";

import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../config";
import { useRouter } from "next/navigation";
import Loading from "../components/loading";
import DashboardNavBar from "../components/dashboardNavBar";
import NewProjectButton from "../components/newProjectButton";

import { Button, Box, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { render } from "react-dom";

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
          <Stack align={"center"} pt={10}>
            <Wrap w={"100%"} maxW={"79rem"} spacing={4}>
              <WrapItem>
                <Box w={"15rem"} h={"15rem"}>
                  <NewProjectButton />
                </Box>
              </WrapItem>
            </Wrap>
          </Stack>

          {/* <Button
            colorScheme="brand"
            onClick={() => {
              signUserOut();
            }}
          >
            Sign Out
          </Button> */}
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
