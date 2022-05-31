import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Find = () => {
  const navigate = useNavigate();

  function handleResto(e) {
    e.preventDefault();
    navigate("/resto");
  }

  return (
    <HStack
      overflow="hidden"
      w="100vw"
      my="5"
      h="60vh"
      align="center"
      justify="center"
    >
      <Box>
        <Heading my="5" textAlign="left">
          Hungry?
        </Heading>
        <Text my="5" fontSize="xl">
          Order food from favorite restaurants near you.
        </Text>
        <HStack>
          <Input type="text" placeholder="Enter your delivery location" />
          <Button
            onClick={handleResto}
            px="10"
            py="5"
            color="white"
            backgroundColor="#7b8ef4"
          >
            Find Food
          </Button>
        </HStack>
      </Box>
      <Image h="60vh" src="/images/delivery.gif" alt="delivery" />
    </HStack>
  );
};

export default Find;
