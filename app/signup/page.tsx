"use client";

import React from "react";
import { Stack, Heading, Text, Button, Box } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import SignUpForm from "../signUpForm";

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
        <Stack
          sx={{ outline: "2px solid red" }}
          width={"50%"}
          height={"100%"}
          bgColor={"#5DC061"}
          color={"#fff"}
          justify={"center"}
          align={"center"}
        >
          <Stack spacing={6} width={"md"}>
            <Heading size={"3xl"}>Sign Up</Heading>
            <Text fontSize={"3xl"}>
              Get tasks done and level up your productivity with Todofy.
            </Text>

            <Box>
              <Button
                size={"lg"}
                rightIcon={<AiOutlineArrowRight />}
                colorScheme="brand"
                // variant={"outline"}
              >
                Log in
              </Button>
            </Box>
          </Stack>
        </Stack>
        <Stack
          width={"50%"}
          bgColor={"#F5F5F5"}
          justify={"center"}
          align={"center"}
        >
          <SignUpForm />
        </Stack>
      </Stack>
    </>
  );
}
