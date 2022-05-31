import { HStack } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

const Filters = () => {
  return (
    <HStack justify="space-evenly" mx="200" my="5">
      <Card image="/images/food/pizza.svg" text="Pizza" />
      <Card image="/images/food/burger.svg" text="Burger" />
      <Card image="/images/food/meat.svg" text="BBQ" />
      <Card image="/images/food/sushi.svg" text="Sushi" />
      <Card image="/images/food/broccoli.svg" text="Vegan" />
      <Card image="/images/food/cake.svg" text="Desserts" />
    </HStack>
  );
};

export default Filters;
