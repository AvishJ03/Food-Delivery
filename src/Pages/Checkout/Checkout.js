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
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useAuth } from "../../contexts/AuthContext";
import { db, auth } from "../../utils/init-firebase";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState([]);
  const orderCollectionRef = collection(db, "placed");
  const uid = 1;

  useEffect(() => {
    setTotal(
      order.reduce((acc, curr) => {
        return acc + curr.price * curr.count;
      }, 0)
    );
  }, [order]);

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
      setOrder(docSnap.data().order);
    };
    getItems();
  }, []);

  const navigate = useNavigate();

  const operation = (idx, inc) => {
    if (inc) {
      let curr = order[idx];
      curr.count += 1;
      let temp = [...order];
      temp[idx] = curr;
      console.log(temp);
      setOrder(temp);
    } else {
      let curr = order[idx];
      curr.count -= 1;
      let temp = [...order];
      temp[idx] = curr;
      console.log(temp);
      setOrder(temp);
    }
  };

  async function handlePlaced(e) {
    e.preventDefault();
    await addDoc(orderCollectionRef, {
      user_id: parseInt(1),
      order: order,
    });
    navigate("/placed");
  }

  return (
    <>
      <Navbar />
      <HStack my="5" align="center" justify="space-evenly">
        <VStack>
          <Heading>Checkout</Heading>
          {order.length > 0 &&
            order.map((item, idx) => {
              if (item.count !== 0) {
                return (
                  <HStack
                    p="3"
                    borderRadius="20"
                    border="2px solid #7b8ef4"
                    spacing="9"
                  >
                    <Image w="20" src="/images/menu1.gif" />
                    <Box>
                      <Text fontWeight="bold" textAlign="left">
                        {item.name}
                      </Text>
                      <Text fontWeight="bold" textAlign="left">
                        Rs. {item.price * item.count}
                      </Text>
                    </Box>
                    <HStack>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          operation(idx, false);
                        }}
                      >
                        -
                      </Button>
                      <Text>{item.count}</Text>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          operation(idx, true);
                        }}
                      >
                        +
                      </Button>
                    </HStack>
                  </HStack>
                );
              }
            })}
        </VStack>
        <VStack
          border="2px solid #4E60FF"
          borderRadius="20"
          spacing="3"
          align="flex-start"
          p="8"
          bgColor="#F3F4FF"
        >
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
              <Text>Rs. {(total * 8) / 100}</Text>
              <Text>Rs. 0</Text>
              <Text fontWeight="bold">Rs. {total + (total * 8) / 100}</Text>
            </VStack>
          </HStack>
          <Button
            onClick={handlePlaced}
            px="8"
            py="6"
            alignSelf="center"
            bgColor="#7b8ef4"
            color="white"
          >
            Pay Rs. {total + (total * 8) / 100}
          </Button>
        </VStack>
      </HStack>
      <Footer />
    </>
  );
};

export default Checkout;
