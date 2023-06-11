"use client";

import React from "react";
import {
  Stack,
  Heading,
  Text,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { AiOutlineArrowRight } from "react-icons/ai";

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
          sx={{ outline: "1px solid red" }}
          width={"50%"}
          bgColor={"#F5F5F5"}
          justify={"center"}
          align={"center"}
        >
          {/* <Stack width={"lg"} bgColor={"#fff"}> */}

          <FormControl
            width={"lg"}
            bgColor={"#fff"}
            rounded={"2xl"}
            shadow={"2xl"}
          >
            <Stack spacing={4} p={4}>
              <Box>
                <FormLabel>Email Address:</FormLabel>
                <Input type="email" />
              </Box>
              <Box>
                <FormLabel>Password:</FormLabel>
                <Input type="password" />
              </Box>
              <Box>
                <FormLabel>Password again:</FormLabel>
                <Input type="password" />
              </Box>
              <Box>
                <FormLabel>Username</FormLabel>
                <Input type="text" />
              </Box>
              <Box>
                <FormLabel>First Name:</FormLabel>
                <Input type="text" />
              </Box>
              <Box>
                <FormLabel>First Name:</FormLabel>
                <Input type="text" />
              </Box>{" "}
              <Button colorScheme="brand">Sign Up</Button>
            </Stack>
          </FormControl>

          {/* </Stack> */}
        </Stack>
      </Stack>
    </>
  );
}
