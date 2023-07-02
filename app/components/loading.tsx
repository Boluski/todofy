"use client";

import React from "react";
import { Stack, Heading, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <Stack
        width={"100%"}
        height={"100%"}
        align={"center"}
        justify={"center"}
        spacing={4}
      >
        <Spinner
          size={"xl"}
          color="brand.600"
          emptyColor="gray.400"
          thickness="0.2rem"
        />
        <Heading fontSize={"2xl"}>Loading...</Heading>
      </Stack>
    </>
  );
}
