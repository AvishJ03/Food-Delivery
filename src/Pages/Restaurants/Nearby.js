import { Heading, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";

const Nearby = () => {
  return (
    <VStack my="10" spacing="10">
      <Heading>Nearby Restaurants</Heading>
      <HStack spacing="10">
        <Image _hover={{ cursor: "pointer" }} src="/images/r1.svg" />
        <Image _hover={{ cursor: "pointer" }} src="/images/r2.svg" />
        <Image _hover={{ cursor: "pointer" }} src="/images/r3.svg" />
      </HStack>
      <HStack spacing="10">
        <Image _hover={{ cursor: "pointer" }} src="/images/r4.svg" />
        <Image _hover={{ cursor: "pointer" }} src="/images/r5.svg" />
        <Image _hover={{ cursor: "pointer" }} src="/images/r6.svg" />
      </HStack>
    </VStack>
  );
};

export default Nearby;
