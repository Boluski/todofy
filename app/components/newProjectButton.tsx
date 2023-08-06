"use client";

import { Button, IconButton, Box } from "@chakra-ui/react";
import { VscAdd } from "react-icons/vsc";

export default function NewProjectButton() {
  return (
    <>
      <IconButton
        w={"100%"}
        h={"100%"}
        aria-label="Add"
        colorScheme="brand"
        variant={"outline"}
      >
        <VscAdd size={"45%"} />
      </IconButton>
    </>
  );
}
