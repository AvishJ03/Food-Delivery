import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = ({ image, text }) => {
  return (
    <VStack
      py="5"
      px="15"
      w="160px"
      align="center"
      justify="center"
      border="1px solid #EDEEF2"
      borderRadius="10"
      _hover={{
        backgroundColor: "#F8F9FF",
        border: "1px solid #697BFF",
        cursor: "pointer",
      }}
    >
      <Image src={image} alt="pizza" />
      <Text fontWeight="bold">{text}</Text>
    </VStack>
  );
};

export default Card;
