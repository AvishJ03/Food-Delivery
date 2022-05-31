import {
  HStack,
  Image,
  VStack,
  Text,
  Box,
  Button,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../utils/init-firebase";
import RestCard from "../../Components/RestCard";

const Menu = () => {
  const [item1, setItem1] = useState(0);
  const [item2, setItem2] = useState(0);
  const [item3, setItem3] = useState(0);
  const [item4, setItem4] = useState(0);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const orderCollectionRef = collection(db, "orders");
  const checkout = async (e) => {
    e.preventDefault();
    await addDoc(orderCollectionRef, {
      user_id: parseInt(1),
      item1: parseInt(item1),
      item2: parseInt(item2),
      item3: parseInt(item3),
      item4: parseInt(item4),
      total: parseInt(
        price[0] * item1 +
          price[1] * item2 +
          price[2] * item3 +
          price[3] * item4
      ),
    });
    navigate("/check");
  };

  const items = ["Veg Burger", "Cheese Burger", "Veg Pizza", "American Pizza"];
  const price = [150, 200, 250, 300];

  function handleItem1(e) {
    e.preventDefault();
    setItem1(item1 + 1);
    setTotal(item1 + item2 + item3 + item4 + 1);
  }
  function handleItem2(e) {
    e.preventDefault();
    setItem2(item2 + 1);
    setTotal(item1 + item2 + item3 + item4 + 1);
  }
  function handleItem3(e) {
    e.preventDefault();
    setItem3(item3 + 1);
    setTotal(item1 + item2 + item3 + item4 + 1);
  }
  function handleItem4(e) {
    e.preventDefault();
    setItem4(item4 + 1);
    setTotal(item1 + item2 + item3 + item4 + 1);
  }

  return (
    <>
      <Navbar />
      <RestCard />
      <HStack my="5">
        <VStack>
          <Box mx="100" my="3">
            <Text mx="300" fontSize="xl" fontWeight="bold" textAlign="left">
              Burgers
            </Text>
            <br />
            <VStack>
              <HStack
                p="5"
                borderRadius="20"
                border="2px solid #7b8ef4"
                spacing="10"
              >
                <Image w="40" src="/images/menu1.gif" />
                <Box>
                  <Text fontSize="xl" fontWeight="bold" textAlign="left">
                    Veg Burger
                  </Text>
                  <Text textAlign="left">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                  <Text fontSize="xl" fontWeight="bold" textAlign="left">
                    Rs. 150
                  </Text>
                </Box>
                {item1 ? (
                  <HStack>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        setItem1(item1 - 1);
                        setTotal(total - 1);
                      }}
                    >
                      -
                    </Button>
                    <Text>{item1}</Text>
                    <Button onClick={handleItem1}>+</Button>
                  </HStack>
                ) : (
                  <Button onClick={handleItem1}>Add</Button>
                )}
              </HStack>
              <HStack
                p="5"
                borderRadius="20"
                border="2px solid #7b8ef4"
                spacing="10"
              >
                <Image w="40" src="/images/menu1.gif" />
                <Box>
                  <Text fontSize="xl" fontWeight="bold" textAlign="left">
                    Cheese Burger
                  </Text>
                  <Text textAlign="left">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                  <Text fontSize="xl" fontWeight="bold" textAlign="left">
                    Rs. 200
                  </Text>
                </Box>
                {item2 ? (
                  <HStack>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        setItem2(item2 - 1);
                        setTotal(total - 1);
                      }}
                    >
                      -
                    </Button>
                    <Text>{item2}</Text>
                    <Button onClick={handleItem2}>+</Button>
                  </HStack>
                ) : (
                  <Button onClick={handleItem2}>Add</Button>
                )}
              </HStack>
            </VStack>
          </Box>
          <Box mx="100" my="3">
            <Text mx="300" fontSize="xl" fontWeight="bold" textAlign="left">
              Pizzas
            </Text>
            <br />
            <VStack>
              <HStack
                p="5"
                borderRadius="20"
                border="2px solid #7b8ef4"
                spacing="10"
              >
                <Image w="40" src="/images/menu2.gif" />
                <Box>
                  <Text fontSize="xl" fontWeight="bold" textAlign="left">
                    Veg Pizza
                  </Text>
                  <Text textAlign="left">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                  <Text fontSize="xl" fontWeight="bold" textAlign="left">
                    Rs. 250
                  </Text>
                </Box>
                {item3 ? (
                  <HStack>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        setItem3(item3 - 1);
                        setTotal(total - 1);
                      }}
                    >
                      -
                    </Button>
                    <Text>{item3}</Text>
                    <Button onClick={handleItem3}>+</Button>
                  </HStack>
                ) : (
                  <Button onClick={handleItem3}>Add</Button>
                )}
              </HStack>
              <HStack
                p="5"
                borderRadius="20"
                border="2px solid #7b8ef4"
                spacing="10"
              >
                <Image w="40" src="/images/menu2.gif" />
                <Box>
                  <Text fontSize="xl" fontWeight="bold" textAlign="left">
                    Mexican Pizza
                  </Text>
                  <Text textAlign="left">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                  <Text fontSize="xl" fontWeight="bold" textAlign="left">
                    Rs. 300
                  </Text>
                </Box>
                {item4 ? (
                  <HStack>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        setItem4(item4 - 1);
                        setTotal(total - 1);
                      }}
                    >
                      -
                    </Button>
                    <Text>{item4}</Text>
                    <Button onClick={handleItem4}>+</Button>
                  </HStack>
                ) : (
                  <Button onClick={handleItem4}>Add</Button>
                )}
              </HStack>
            </VStack>
          </Box>
        </VStack>
        <VStack p="100" bgColor="#F3F4FF" borderRadius="20">
          <Heading>Cart</Heading>
          <Text>{total} items</Text>
          {item1 && (
            <Text>
              {items[0]} - x{item1} - Rs. {price[0] * item1}
            </Text>
          )}
          {item2 && (
            <Text>
              {items[1]} - x{item2} - Rs. {price[1] * item2}
            </Text>
          )}
          {item3 && (
            <Text>
              {items[2]} - x{item3} - Rs. {price[2] * item3}
            </Text>
          )}
          {item4 && (
            <Text>
              {items[3]} - x{item4} - Rs. {price[3] * item4}
            </Text>
          )}
          <HStack>
            <Text>Subtotal</Text>
            <Text>
              Rs.{" "}
              {price[0] * item1 +
                price[1] * item2 +
                price[2] * item3 +
                price[3] * item4}
            </Text>
          </HStack>
          {(item1 || item2 || item3 || item4) && (
            <Button onClick={checkout} bgColor="#7b8ef4" color="white">
              Checkout
            </Button>
          )}
        </VStack>
      </HStack>
      <Footer />
    </>
  );
};

export default Menu;
