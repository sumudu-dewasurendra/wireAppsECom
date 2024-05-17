import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const ItemView = ({
  product,
  onPress,
}) => {

  return (
    <TouchableOpacity
      className={"flex bg-white w-full h-[370px] justify-between items-center mb-4 p-3 rounded-lg"}
      onPress={() => onPress()}>
      <Image
        className={"w-full h-[250px] rounded-lg"}
        source={{
          uri: product.mainImage,
        }}
      />
      <View className={"justify-center items-center"}>
        <Text 
            className={"text-3xl text-black font-bold"}>
            {product.brandName}
        </Text>
        <Text 
            className={"mt-1 text-1xl text-black"}>
            {product.stockStatus}
        </Text>
        <Text 
            className={"mt-1 text-2xl text-secondary font-bold"}>
            {`${product.price.currency} ${product.price.amount}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ItemView;