"use client";

import React from "react";
import { Stack, HStack, VStack, Box, Heading, Button } from "@chakra-ui/react";

// sx={{ outline: "1px solid red" }
export default function Page() {
  return (
    <>
      <Stack
        direction={"row"}
        justify={"space-between"}
        align={"center"}
        px={4}
        py={2}
        sx={{ outline: "1px solid red" }}
      >
        <Box>
          <Heading size={"lg"} color={"brand.500"}>
            Todofy
          </Heading>
        </Box>
        <Stack direction={"row"}>
          <Button colorScheme="brand">Sign Up</Button>
          <Button variant={"outline"} colorScheme="brand">
            Login
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
