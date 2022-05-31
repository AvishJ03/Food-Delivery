import { HStack, Image, Input, Button, Text } from "@chakra-ui/react";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <HStack
      h="10vh"
      mx="100"
      justifyContent="space-between"
      borderBottom="1px solid gray"
    >
      <HStack spacing="20">
        <Image src="/images/logo.svg" alt="logo" />
        <Input variant="filled" placeholder="Search" borderRadius="10" />
      </HStack>
      <HStack spacing="10">
        <Button
          _hover={{ color: "#7b8ef4", textDecoration: "underline" }}
          colorScheme="black"
          variant="link"
        >
          Restaurants
        </Button>
        <Button
          _hover={{ color: "#7b8ef4", textDecoration: "underline" }}
          colorScheme="black"
          variant="link"
        >
          Deals
        </Button>
        <Button
          _hover={{ color: "#7b8ef4", textDecoration: "underline" }}
          colorScheme="black"
          variant="link"
        >
          My Orders
        </Button>
        <Button
          color="#7b8ef4"
          p="3"
          backgroundColor="#F3F4FF"
          border="1px solid #4E60FF"
          variant="link"
          borderRadius="10"
        >
          <FiShoppingBag size="20" />
          (0)
        </Button>
        <Button
          _hover={{ color: "#7b8ef4", textDecoration: "underline" }}
          p="2"
          borderRadius="10"
          colorScheme="black"
          variant="link"
        >
          <CgProfile size="30" />
        </Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
