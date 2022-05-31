import { Heading, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Nearby = () => {
  const navigate = useNavigate();

  function handleMenu(e) {
    e.preventDefault();
    navigate("/menu");
  }
  return (
    <VStack my="10" spacing="10">
      <Heading>Nearby Restaurants</Heading>
      <HStack spacing="10">
        <Image
          onClick={handleMenu}
          _hover={{ cursor: "pointer" }}
          src="/images/r1.svg"
        />
        <Image
          onClick={handleMenu}
          _hover={{ cursor: "pointer" }}
          src="/images/r2.svg"
        />
        <Image
          onClick={handleMenu}
          _hover={{ cursor: "pointer" }}
          src="/images/r3.svg"
        />
      </HStack>
      <HStack spacing="10">
        <Image
          onClick={handleMenu}
          _hover={{ cursor: "pointer" }}
          src="/images/r4.svg"
        />
        <Image
          onClick={handleMenu}
          _hover={{ cursor: "pointer" }}
          src="/images/r5.svg"
        />
        <Image
          onClick={handleMenu}
          _hover={{ cursor: "pointer" }}
          src="/images/r6.svg"
        />
      </HStack>
    </VStack>
  );
};

export default Nearby;
