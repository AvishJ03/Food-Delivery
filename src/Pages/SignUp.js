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

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);

  return (
    <HStack align="center" spacing="375">
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
        <chakra.form
        // onSubmit={async (e) => {
        //   e.preventDefault();
        //   // your login logic here
        //   if (!email || !password) {
        //     toast({
        //       description: "Credentials not valid",
        //       status: "error",
        //       duration: 5000,
        //       isClosable: true,
        //     });
        //     console.log("Please enter email and password");
        //   }
        //   setIsSubmiting(true);
        //   login(email, password)
        //     .then((response) => {
        //       console.log(response);
        //       toast({
        //         description: "Login Successful",
        //         status: "success",
        //         duration: 5000,
        //         isClosable: true,
        //       });
        //       navigate("/");
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //       toast({
        //         description: error.message,
        //         status: "error",
        //         duration: 5000,
        //         isClosable: true,
        //       });
        //     })
        //     .finally(() => mounted.current && setIsSubmiting(false));
        // }}
        >
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
          <Text as="h5" fontWeight="semibold" my="2">
            Log in using
          </Text>
          <Flex justifyContent="space-around" mx="10" mb="10"></Flex>
          <Box>
            <Text textAlign="left" mx="16" my="3">
              Name
            </Text>
            <Input
              placeholder="Enter your name"
              type="text"
              color="black"
              borderColor="grey"
              _hover={{}}
              w="70%"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <Text textAlign="left" mx="16" my="3">
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
            <Text textAlign="left" mx="16" my="3">
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
          <Checkbox mr="175px" my="3" colorScheme="#4E60FF">
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
          <Flex mt="10" align="center" justifyContent="center">
            <Text>Already have an account? &nbsp;</Text>
            <Text color="#4E60FF">Log In!</Text>
          </Flex>
        </chakra.form>
      </Box>
      <Image h="100vh" src="/images/media.svg" alt="..." />
    </HStack>
  );
}

export default SignUp;
