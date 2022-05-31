import {
  HStack,
  Text,
  Box,
  Heading,
  VStack,
  Input,
  Textarea,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleHome = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <>
      <Navbar />
      <Heading my="5" textAlign="center">
        Account
      </Heading>
      <Box my="5" p="5" border="1px solid black" w="70vw" mx="auto">
        <VStack my="5" align="flex-start">
          <Text fontWeight="bold">Personal Information</Text>
          <HStack spacing="10">
            <Box>
              <Text color="#4E60FF">First Name</Text>
              <Input w="30vw" type="text" value="Avish" />
            </Box>
            <Box>
              <Text color="#4E60FF">Last Name</Text>
              <Input w="30vw" type="text" value="Jain" />
            </Box>
          </HStack>
          <HStack spacing="10">
            <Box>
              <Text color="#4E60FF">Email</Text>
              <Input w="30vw" type="text" value="avish@gmail.com" />
            </Box>
            <Box>
              <Text color="#4E60FF">Number</Text>
              <Input w="30vw" type="text" value="+91 9022572120" />
            </Box>
          </HStack>
          <Text color="#4E60FF">Default Address</Text>
          <Input
            w="63vw"
            value="2101, Mehta Heights, Sadashiv Lane, Charni Road"
          />
        </VStack>
        <VStack my="10" align="flex-start">
          <Text fontWeight="bold">Email Notifications</Text>
          <HStack w="45vw" justify="space-between">
            <VStack align="flex-start">
              <Checkbox color="#4E60FF">New Deals</Checkbox>
              <Checkbox color="#4E60FF">New Restaurants</Checkbox>
              <Checkbox color="#4E60FF">Order Statuses</Checkbox>
            </VStack>
            <VStack align="flex-start">
              <Checkbox color="#4E60FF">Password Changes</Checkbox>
              <Checkbox color="#4E60FF">Special Offers</Checkbox>
              <Checkbox color="#4E60FF">Newsletter</Checkbox>
            </VStack>
          </HStack>
        </VStack>
        <Button
          border="1px solid #FF5C60"
          color="#FF5C60"
          onClick={handleLogin}
        >
          Log out
        </Button>
        <Button
          float="right"
          color="white"
          bgColor="#4E60FF"
          onClick={handleHome}
        >
          Save Changes
        </Button>
      </Box>
      <Footer />
    </>
  );
};

export default Profile;
