import {
  HStack,
  Image,
  VStack,
  Text,
  Box,
  Button,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../utils/init-firebase";
import RestCard from "../../Components/RestCard";
import menu from "../../pc.json";

const Menu = () => {
  const [total, setTotal] = useState(null);
  const [itemname, setItemname] = useState("");

  const [menus, setMenus] = useState({});
  const [counts, setCounts] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    let temp = menus;
    let tempCounts = counts;
    menu.map((item) => {
      if (!(item.menu in temp)) {
        temp = { ...temp, [item.menu]: [item] };
        tempCounts = { ...tempCounts, [item.menu]: [0] };
      } else {
        temp = { ...temp, [item.menu]: [...temp[item.menu], item] };
        tempCounts = {
          ...tempCounts,
          [item.menu]: [...tempCounts[item.menu], 0],
        };
      }
    });
    setMenus(temp);
    setCounts(tempCounts);
  }, [menu]);

  const orderCollectionRef = collection(db, "orders");

  const checkout = async (e) => {
    e.preventDefault();
    await addDoc(orderCollectionRef, {
      user_id: parseInt(1),
      order: total,
    });
    navigate("/check");
  };

  const setCount = async (item, idx, inc) => {
    if (inc) {
      let temp = counts;
      temp[item][idx] += 1;
      setCounts(temp);
    } else {
      let temp = counts;
      temp[item][idx] -= 1;
      setCounts(temp);
    }
    let res = [];
    Object.keys(counts).map((ele) => {
      let t = menus[ele];
      t.map((item, idx) => {
        if (counts[ele][idx] == 0) return;
        let obj = {
          name: item.item,
          price: item.price,
          count: counts[ele][idx],
        };
        res.push(obj);
      });
    });
    console.log(res);
    setTotal(res);
  };

  return (
    <>
      <Navbar />
      <RestCard />
      <Text fontSize="5xl" fontWeight="bold" textAlign="center" my="10">
        Menu
      </Text>
      <HStack my="5" align="flex-start" justify="center" spacing="40">
        <VStack ml="150px">
          {Object.keys(menus).length !== 0 &&
            Object.keys(menus).map((item) => {
              return (
                <Box
                  bgColor={itemname == item ? "gray.500" : "gray.300"}
                  w="100%"
                  textAlign="center"
                  px="200px"
                  py="20px"
                  cursor="pointer"
                  onClick={(e) => setItemname(item)}
                >
                  <Text fontWeight="bold" fontSize="2xl">
                    {item}
                  </Text>
                </Box>
              );
            })}
        </VStack>

        <VStack>
          {itemname !== "" && (
            <VStack>
              {menus[itemname].map((item2, idx) => {
                return (
                  <HStack
                    p="5"
                    borderRadius="20"
                    border="2px solid #7b8ef4"
                    spacing="10"
                  >
                    <Image w="40" src="/images/menu1.gif" />
                    <Box>
                      <Text fontSize="xl" fontWeight="bold" textAlign="left">
                        {item2.item}
                      </Text>
                      <Text textAlign="left">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                      <Text fontSize="xl" fontWeight="bold" textAlign="left">
                        Rs. 150
                      </Text>
                    </Box>
                    {counts[itemname][idx] ? (
                      <HStack>
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            setCount(itemname, idx, false);
                          }}
                        >
                          -
                        </Button>
                        <Text>{counts[itemname][idx]}</Text>
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            setCount(itemname, idx, true);
                          }}
                        >
                          +
                        </Button>
                      </HStack>
                    ) : (
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          setCount(itemname, idx, true);
                        }}
                      >
                        Add
                      </Button>
                    )}
                  </HStack>
                );
              })}
            </VStack>
          )}
        </VStack>
      </HStack>
      {itemname !== "" && (
        <Button
          onClick={(e) => {
            checkout(e);
          }}
          px="20"
          py="7"
          color="white"
          backgroundColor="#7b8ef4"
          display="flex"
          mx="auto"
          my="5"
        >
          Checkout
        </Button>
      )}
      <Footer />
    </>
  );
};

export default Menu;
