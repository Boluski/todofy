"use client";

import React from "react";
import { Spinner } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <h1>Hello, Home page!</h1>
      <Spinner />
      <Button>Hello</Button>
    </>
  );
}