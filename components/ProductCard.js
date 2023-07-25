import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

const ProductCard = ({ image, category, title, price, description }) => {
  const [count, setCount] = useState(1);
  const { colorScheme } = useColorScheme();
  return (
    <View className="w-full bg-white dark:bg-gray-50/20 rounded-3xl p-5 my-5">
      <View className="bg-white rounded-xl">
        <Image
          source={{ uri: image }}
          className="w-full h-72"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70">
          {category}
        </Text>
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>
        <View className="flex-row justify-between my-3">
          <View className="flex-row items-center gap-3">
            <AntDesign
              name="minuscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count - 1)}
            />
            <Text className="text-xl dark:text-white">{count}</Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count + 1)}
            />
          </View>
        </View>
        <Text className="text-2xl font-extrabold dark:text-white">
          ETB {price * count}
        </Text>
        <Text
          numberOfLines={3}
          className="text-sm text-black/60 dark: dark:text-white/70"
        >
          {description}
        </Text>
        <TouchableOpacity className="flex-row justify-center w-10/20 self-center mt-5 bg-blue-600 p-3 rounded-full">
          <Text className="text-white font-bold">Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
