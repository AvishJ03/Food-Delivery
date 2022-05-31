import {
  Button,
  Heading,
  HStack,
  VStack,
  Text,
  Box,
  Image,
  Input,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useAuth } from "../../contexts/AuthContext";
import { db, auth } from "../../utils/init-firebase";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Checkout = () => {
  const [item1, setItem1] = useState(0);
  const [item2, setItem2] = useState(0);
  const [item3, setItem3] = useState(0);
  const [item4, setItem4] = useState(0);
  const [total, setTotal] = useState(0);
  const items = ["Veg Burger", "Cheese Burger", "Veg Pizza", "American Pizza"];
  const price = [150, 200, 250, 300];
  const { currentUser } = useAuth();
  const uid = 1;

  useEffect(() => {
    const getItems = async () => {
      console.log(uid);
      const orders = collection(db, "orders");
      const q = query(orders, where("user_id", "==", uid));
      const querySnapshot = await getDocs(q);
      const userID = querySnapshot.docs[0].id;
      console.log(userID);
      const userDoc = doc(db, "orders", userID);
      console.log(userDoc);
      const docSnap = await getDoc(userDoc);
      console.log(docSnap.data());
      setItem1(docSnap.data().item1);
      setItem2(docSnap.data().item2);
      setItem3(docSnap.data().item3);
      setItem4(docSnap.data().item4);
      setTotal(docSnap.data().total);
    };
    getItems();
  }, []);

  function handleItem1(e) {
    e.preventDefault();
    setItem1(item1 + 1);
    setTotal(150 * item1 + 200 * item2 + 250 * item3 + 300 * item4);
  }
  function handleItem2(e) {
    e.preventDefault();
    setItem2(item2 + 1);
    setTotal(150 * item1 + 200 * item2 + 250 * item3 + 300 * item4);
  }
  function handleItem3(e) {
    e.preventDefault();
    setItem3(item3 + 1);
    setTotal(150 * item1 + 200 * item2 + 250 * item3 + 300 * item4);
  }
  function handleItem4(e) {
    e.preventDefault();
    setItem4(item4 + 1);
    setTotal(150 * item1 + 200 * item2 + 250 * item3 + 300 * item4);
  }

  return (
    <>
      <Navbar />
      <HStack my="5" align="center" justify="space-evenly">
        <VStack>
          <Heading>Checkout</Heading>
          {item1 && (
            <HStack
              p="3"
              borderRadius="20"
              border="2px solid #7b8ef4"
              spacing="9"
            >
              <Image w="20" src="/images/menu1.gif" />
              <Box>
                <Text fontWeight="bold" textAlign="left">
                  Veg Burger
                </Text>
                <Text fontWeight="bold" textAlign="left">
                  Rs. {price[0] * item1}
                </Text>
              </Box>
              <HStack>
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    setItem1(item1 - 1);
                    setTotal(
                      150 * item1 + 200 * item2 + 250 * item3 + 300 * item4
                    );
                  }}
                >
                  -
                </Button>
                <Text>{item1}</Text>
                <Button size="sm" onClick={handleItem1}>
                  +
                </Button>
              </HStack>
            </HStack>
          )}
          {item2 && (
            <HStack
              p="3"
              borderRadius="20"
              border="2px solid #7b8ef4"
              spacing="6"
            >
              <Image w="20" src="/images/menu1.gif" />
              <Box>
                <Text fontWeight="bold" textAlign="left">
                  Cheese Burger
                </Text>
                <Text fontWeight="bold" textAlign="left">
                  Rs. {price[1] * item2}
                </Text>
              </Box>
              <HStack>
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    setItem2(item2 - 1);
                    setTotal(
                      150 * item1 + 200 * item2 + 250 * item3 + 300 * item4
                    );
                  }}
                >
                  -
                </Button>
                <Text>{item2}</Text>
                <Button size="sm" onClick={handleItem2}>
                  +
                </Button>
              </HStack>
            </HStack>
          )}
          {item3 && (
            <HStack
              p="3"
              borderRadius="20"
              border="2px solid #7b8ef4"
              spacing="10"
            >
              <Image w="20" src="/images/menu2.gif" />
              <Box>
                <Text fontWeight="bold" textAlign="left">
                  Veg Pizza
                </Text>
                <Text fontWeight="bold" textAlign="left">
                  Rs. {price[2] * item3}
                </Text>
              </Box>
              <HStack>
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    setItem3(item3 - 1);
                    setTotal(
                      150 * item1 + 200 * item2 + 250 * item3 + 300 * item4
                    );
                  }}
                >
                  -
                </Button>
                <Text>{item3}</Text>
                <Button size="sm" onClick={handleItem3}>
                  +
                </Button>
              </HStack>
            </HStack>
          )}
          {item4 && (
            <HStack
              p="3"
              borderRadius="20"
              border="2px solid #7b8ef4"
              spacing="7"
            >
              <Image w="20" src="/images/menu2.gif" />
              <Box>
                <Text fontWeight="bold" textAlign="left">
                  Cheese Pizza
                </Text>
                <Text fontWeight="bold" textAlign="left">
                  Rs. {price[3] * item4}
                </Text>
              </Box>
              <HStack>
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    setItem4(item4 - 1);
                    setTotal(
                      150 * item1 + 200 * item2 + 250 * item3 + 300 * item4
                    );
                  }}
                >
                  -
                </Button>
                <Text>{item4}</Text>
                <Button size="sm" onClick={handleItem4}>
                  +
                </Button>
              </HStack>
            </HStack>
          )}
        </VStack>
        <VStack border="2px solid #4E60FF" borderRadius="20" spacing="3" align="flex-start" p="8" bgColor="#F3F4FF">
          <Heading textAlign="center">Payment Details</Heading>
          <Text>Complete your purchase by providing your payment details.</Text>
          <Text>Card Number</Text>
          <Input type="text" placeholder="1234 1234 1234 1234" />
          <HStack spacing="5">
            <Text>CVV</Text>
            <Input type="password" placeholder="xxx" />
            <Text>Expiry</Text>
            <Input type="text" placeholder="MM/YY" />
          </HStack>
          <Text>CardHolder Name</Text>
          <Input type="text" placeholder="Enter your name" />
          <HStack spacing="80">
              <VStack align="flex-start">
                  <Text>Subtotal</Text>
                  <Text>Tax (8%)</Text>
                  <Text>Delivery (Free Delivery)</Text>
                  <Text fontWeight="bold">Total</Text>
              </VStack>
              <VStack align="flex-end">
                  <Text>Rs. {total}</Text>
                  <Text>Rs. {total*8/100}</Text>
                  <Text>Rs. 0</Text>
                  <Text fontWeight="bold">Rs. {total + total*8/100}</Text>
              </VStack>
          </HStack>
          <Button px="8" py="6" alignSelf="center" bgColor="#7b8ef4" color="white">Pay Rs. {total + total*8/100}</Button>
        </VStack>
      </HStack>
      <Footer />
    </>
  );
};

export default Checkout;
