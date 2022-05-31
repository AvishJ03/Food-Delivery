import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Checkbox,
  Button,
  HStack,
  chakra,
  Image,
} from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, currentUser } = useAuth();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const navigate = useNavigate();

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const log = async (e) => {
    e.preventDefault();
    // your login logic here
    if (!email || !password) {
      console.log("Please enter email and password");
    }
    setIsSubmiting(true);
    login(email, password);
    {
      currentUser && navigate("/home");
    }
    console.log(currentUser);
  };

  return (
    <HStack align="center" spacing="400">
      <Box
        left="210"
        top="0"
        position="relative"
        height="100vh"
        color="black"
        width="md"
        textAlign="center"
        backgroundColor="white"
        //   display={loginin ? "block" : "none"}
      >
        <chakra.form onSubmit={log}>
          <Flex
            justifyContent="flex-start"
            p="4"
            _hover={{ cursor: "pointer" }}
          >
            <Image src="/images/logo.svg" alt="Logo" />
          </Flex>
          <Text
            as="h3"
            fontWeight="semibold"
            fontSize="2xl"
            padding={"80px 0 0 0"}
          >
            Welcome back!
          </Text>
          <Text as="h5" fontWeight="semibold" my="3">
            Log in using
          </Text>
          <Flex justifyContent="space-around" mx="10" my="4" mb="10"></Flex>
          <Box>
            <Text onChange={handleEmail} textAlign="left" mx="16" my="3">
              Email
            </Text>
            <Input
              placeholder="Enter your email"
              type="email"
              color="black"
              borderColor="grey"
              _hover={{}}
              w="70%"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Text onChange={handlePassword} textAlign="left" mx="16" my="3">
              Password
            </Text>
            <Input
              type="password"
              color="black"
              borderColor="grey"
              _hover={{}}
              w="70%"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Checkbox mr="125px" my="3" colorScheme="#4E60FF">
            Remember Me
          </Checkbox>
          <br />
          <Button
            type="submit"
            w="70%"
            my="3"
            colorScheme="teal"
            variant="solid"
            bgColor="#4E60FF"
            _hover={{ backgroundColor: "#7b8ef4" }}
          >
            Login
          </Button>
          <Text color="#4E60FF" textAlign="center">
            Forgot password?
          </Text>
          <Flex mt="20" align="center" justifyContent="center">
            <Text>Don't have an account? &nbsp;</Text>
            <Text color="#4E60FF">Sign Up!</Text>
          </Flex>
        </chakra.form>
      </Box>
      <Image h="100vh" src="/images/media.svg" alt="..." />
    </HStack>
  );
};

export default Login;
