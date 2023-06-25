"use client";

import React from "react";
import { Stack } from "@chakra-ui/react";
import LeftInfo from "../components/leftInfo";
import SignUpForm from "../components/signUpForm";

// sx={{ outline: "1px solid red" }}
export default function page() {
  return (
    <>
      <Stack
        direction={"row"}
        h={"100vh"}
        sx={{ outline: "1px solid red" }}
        spacing={0}
      >
        <LeftInfo
          heading="Login"
          text="Todofy will skyrocket your productivity to a new level."
          linkName="Sign Up"
          link="/signup"
        />
        <SignUpForm />
      </Stack>
    </>
  );
}
