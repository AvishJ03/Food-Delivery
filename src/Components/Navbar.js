import { HStack, Image, Input, Button, Text } from "@chakra-ui/react";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function handleResto(e) {
    e.preventDefault();
    navigate("/resto");
  }
  function handleProfile(e) {
    e.preventDefault();
    navigate("/profile");
  }
  function handleHome(e) {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <HStack
      h="10vh"
      mx="100"
      justifyContent="space-between"
      borderBottom="1px solid gray"
    >
      <HStack spacing="20">
        <Image
          cursor="pointer"
          onClick={handleHome}
          src="/images/logo.svg"
          alt="logo"
        />
        <Input variant="filled" placeholder="Search" borderRadius="10" />
      </HStack>
      <HStack spacing="10">
        <Button
          _hover={{ color: "#7b8ef4", textDecoration: "underline" }}
          colorScheme="black"
          variant="link"
          onClick={handleResto}
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
          color="#7b8ef4"
          p="3"
          backgroundColor="#F3F4FF"
          border="1px solid #4E60FF"
          variant="link"
          borderRadius="10"
        >
          <FiShoppingBag size="20" />
        </Button>
        <Button
          _hover={{ color: "#7b8ef4", textDecoration: "underline" }}
          p="2"
          borderRadius="10"
          colorScheme="black"
          variant="link"
          onClick={handleProfile}
        >
          <CgProfile size="30" />
        </Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
