"use client";
import React from "react";
import {
  Stack,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export default function SignUpForm() {
  return (
    <>
      <FormControl width={"lg"} bgColor={"#fff"} rounded={"2xl"} shadow={"2xl"}>
        <Stack spacing={4} p={4}>
          <Box>
            <FormLabel>Email Address:</FormLabel>
            <Input
              type="email"
              variant={"filled"}
              focusBorderColor="brand.600"
            />
          </Box>
          <Box>
            <FormLabel>Password:</FormLabel>
            <Input
              type="password"
              variant={"filled"}
              focusBorderColor="brand.600"
            />
          </Box>
          <Box>
            <FormLabel>Password again:</FormLabel>
            <Input
              type="password"
              variant={"filled"}
              focusBorderColor="brand.600"
            />
          </Box>
          <Box>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              variant={"filled"}
              focusBorderColor="brand.600"
            />
          </Box>
          <Box>
            <FormLabel>First Name:</FormLabel>
            <Input
              type="text"
              variant={"filled"}
              focusBorderColor="brand.600"
            />
          </Box>
          <Box>
            <FormLabel>First Name:</FormLabel>
            <Input
              type="text"
              variant={"filled"}
              focusBorderColor="brand.600"
            />
          </Box>
          <Button colorScheme="brand">Sign Up</Button>
        </Stack>
      </FormControl>
    </>
  );
}
