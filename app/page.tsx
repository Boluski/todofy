"use client";

import React from "react";
import { Stack, Heading, Text, Button, Box } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { useRouter } from "next/navigation";

// sx={{ outline: "1px solid red" }}
export default function Page() {
  const router = useRouter();
  function signup() {
    router.push("/signup");
  }
  return (
    <>
      <Box minH={"100vh"} bgColor={"#2F7831"}>
        <NavBar />
        <Stack py={40} spacing={4} align={"center"} h={"2xl"}>
          <Stack align={"center"} spacing={2} color={"#fff"} width={"5xl"}>
            <Heading size={"4xl"} textAlign={"center"}>
              Take back control of your time with Todofy.
            </Heading>
            <Text fontSize={"2xl"} textAlign={"center"} px={24} width={"4xl"}>
              Are you tired of wasting your time? with Todofy you can easily
              organize your life and be more productive.
            </Text>
          </Stack>
          <Stack direction={"row"} justify={"center"} spacing={4}>
            <Button size={"lg"} colorScheme="brand" onClick={() => signup()}>
              Start now
            </Button>
            <Button size={"lg"} variant={"outline"} colorScheme="brand">
              Log in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
