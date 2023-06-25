"use client";

import React from "react";
import { Stack, Box, Heading, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

// sx={{ outline: "1px solid red" }
export default function NavBar() {
  const router = useRouter();
  function signup() {
    router.push("/signup");
  }
  function login() {
    router.push("/login");
  }
  return (
    <>
      <Stack
        direction={"row"}
        justify={"space-between"}
        align={"center"}
        px={4}
        py={2}
        bgColor={"#F8F8F8"}
      >
        <Box>
          <Heading size={"lg"} color={"brand.500"}>
            Todofy
          </Heading>
        </Box>
        <Stack direction={"row"} spacing={4}>
          <Button colorScheme="brand" onClick={() => signup()}>
            Sign Up
          </Button>
          <Button
            variant={"outline"}
            colorScheme="brand"
            onClick={() => login()}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
