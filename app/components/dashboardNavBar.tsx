"use Client";

import React from "react";
import { Stack, StackDivider, Heading, IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function DashboardNavBar(props: any) {
  return (
    <>
      <Stack direction={"row"} p={2} justify={"space-between"} align={"center"}>
        <Stack
          direction={"row"}
          divider={<StackDivider borderColor={"#000"} />}
          spacing={4}
        >
          <Heading size={"xl"} color={"brand.500"}>
            Todofy
          </Heading>
          <Heading size={"xl"}>{props.display}</Heading>
        </Stack>
        <IconButton aria-label="Menu" size={"lg"} icon={<GiHamburgerMenu />} />
      </Stack>
    </>
  );
}
