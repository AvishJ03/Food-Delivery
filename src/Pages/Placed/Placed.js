import {
  Heading,
  Image,
  HStack,
  Button,
  VStack,
  Box,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const Placed = () => {
  const navigate = useNavigate();

  function handleHome(e) {
    e.preventDefault();
    navigate("/home");
  }
  return (
    <>
      <Navbar />
      <Heading mt="5" textAlign="center">
        Order Placed!🎉{" "}
      </Heading>
      <HStack justify="center">
        <Image src="/images/delivery.gif" />
        <VStack>
          <HStack spacing="10">
            <Box>
              <Text color="#4E60FF">First Name</Text>
              <Input type="text" value="Avish" />
            </Box>
            <Box>
              <Text color="#4E60FF">Last Name</Text>
              <Input type="text" value="Jain" />
            </Box>
          </HStack>
          <HStack spacing="10">
            <Box>
              <Text color="#4E60FF">Email</Text>
              <Input type="text" value="avish@gmail.com" />
            </Box>
            <Box>
              <Text color="#4E60FF">Number</Text>
              <Input type="text" value="+91 9022572120" />
            </Box>
          </HStack>
          <Text color="#4E60FF">Default Address</Text>
          <Input value="2101, Mehta Heights, Sadashiv Lane, Charni Road" />
          <Heading>Your order will be arriving in 30 mins.</Heading>
          <Button
            color="white"
            px="10"
            py="5"
            bgColor="#4E60FF"
            onClick={handleHome}
          >
            Go Home
          </Button>
        </VStack>
      </HStack>
      <Footer />
    </>
  );
};

export default Placed;
