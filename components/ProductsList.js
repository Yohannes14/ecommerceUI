import { FlatList, Text } from "react-native";
import React from "react";
import { products } from "../products";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => <ProductCard {...item} />}
      contentContainerStyle={{ paddingHorizontal: 15 }}
    />
  );
};

export default ProductsList;
