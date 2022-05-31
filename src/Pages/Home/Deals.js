import { HStack, Image } from "@chakra-ui/react";
import React from "react";

const Deals = () => {
  return (
    <HStack my="5" mx="40" justify="space-evenly">
      <Image src="/images/deal1.svg" />
      <Image src="/images/deal2.svg" />
    </HStack>
  );
};

export default Deals;
