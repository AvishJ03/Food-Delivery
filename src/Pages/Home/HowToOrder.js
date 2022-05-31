import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const HowToOrder = () => {
  return (
    <VStack mb="20" w="100vw" overflow="hidden">
      <Heading>How To Order?</Heading>
      <Text my="10" fontSize="lg">Follow the steps</Text>
      <HStack spacing="20">
        <VStack>
          <Image w="20" src="/images/hto/loc.gif" alt="loc" />
          <Text fontSize="2xl">(01)</Text>
          <Text fontSize="2xl">Choose your location</Text>
        </VStack>
        <VStack>
          <Image w="20" src="/images/hto/restaurant.gif" alt="loc" />
          <Text fontSize="2xl">(02)</Text>
          <Text fontSize="2xl">Choose restaurant</Text>
        </VStack>
        <VStack>
          <Image w="20" src="/images/hto/cart.gif" alt="loc" />
          <Text fontSize="2xl">(03)</Text>
          <Text fontSize="2xl">Make your order</Text>
        </VStack>
        <VStack>
          <Image w="20" src="/images/hto/deli.gif" alt="loc" />
          <Text fontSize="2xl">(04)</Text>
          <Text fontSize="2xl">Choose your location</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default HowToOrder;
