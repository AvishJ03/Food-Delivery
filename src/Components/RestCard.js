import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const RestCard = () => {
  return (
    <HStack mt="5" justify="space-evenly" bgColor="#7b8ef4" p="10" spacing="10">
      <Image src="/images/resto.svg" />
      <Box color="white">
        <Heading>Burgers & Pizzas</Heading>
        <Text mt="5">Burgers, Pizzas</Text>
        <Text mb="5">Vile Parle, Mumbai</Text>
        <HStack spacing="5">
          <Text>4.9★</Text>
          <Text>|</Text>
          <Text>30 mins</Text>
        </HStack>
      </Box>
      <Image src="/images/deal (1).svg" alt="deal1" />
    </HStack>
  );
};

export default RestCard;
