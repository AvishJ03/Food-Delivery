import { Box, HStack, Image, VStack, Text, Button } from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import React from "react";

const Footer = () => {
  return (
    <Box backgroundColor="#F3F4FF">
      <VStack>
        <HStack my="10" w="100vw" justifyContent="space-evenly">
          <VStack>
            <Image src="/images/logo.svg" alt="logo" />
            <Text fontWeight="bold" textAlign="left" color="blackAlpha.500">
              Order from your favorite restaurants.
              <br />
              Track on the go.
              <br />
              Get Lightning Fast Delivery.
            </Text>
          </VStack>
          <VStack>
            <Text fontSize="xl" fontWeight="bold">
              Company
            </Text>
            <Button color="blackAlpha.500" variant="link">
              About Us
            </Button>
            <Button color="blackAlpha.500" variant="link">
              Blog
            </Button>
            <Button color="blackAlpha.500" variant="link">
              All Products
            </Button>
            <Button color="blackAlpha.500" variant="link">
              Work with Us
            </Button>
          </VStack>
          <VStack>
            <Text fontSize="xl" fontWeight="bold">
              Services
            </Text>
            <Button color="blackAlpha.500" variant="link">
              Order Tracking
            </Button>
            <Button color="blackAlpha.500" variant="link">
              Wish List
            </Button>
            <Button color="blackAlpha.500" variant="link">
              Terms & Coditions
            </Button>
            <Button color="blackAlpha.500" variant="link">
              Privacy Policy
            </Button>
          </VStack>
          <VStack>
            <Text fontSize="xl" fontWeight="bold">
              Contact
            </Text>
            <Button color="blackAlpha.500" variant="link">
              Newsletter
            </Button>
            <Button color="blackAlpha.500" variant="link">
              9876543210
            </Button>
            <Button color="blackAlpha.500" variant="link">
              Support
            </Button>
            <Button color="blackAlpha.500" variant="link">
              admin@fd.com
            </Button>
          </VStack>
        </HStack>
        <HStack
          borderTop="1px solid gray"
          p="7"
          w="70vw"
          justify="space-between"
        >
          <Text fontSize="sm">Copyright © ACM 2022. All rights reserved.</Text>
          <HStack>
            <Button color="#7b8ef4" variant="link">
              <AiFillFacebook size="30" />
            </Button>
            <Button color="#7b8ef4" variant="link">
              <AiFillTwitterSquare size="30" />
            </Button>
            <Button color="#7b8ef4" variant="link">
              <AiFillInstagram size="30" />
            </Button>
            <Button color="#7b8ef4" variant="link">
              <AiFillLinkedin size="30" />
            </Button>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;
