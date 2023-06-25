"use client";

import React from "react";
import { Heading, Stack, Text, Button, Box } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function LeftInfo(props: any) {
  return (
    <>
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
          <Heading size={"3xl"}> {props.heading}</Heading>
          <Text fontSize={"3xl"}>{props.text}</Text>

          <Box>
            <Button
              size={"lg"}
              rightIcon={<AiOutlineArrowRight />}
              colorScheme="brand"
              // variant={"outline"}
            >
              {props.linkName}
            </Button>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
