import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import SizeSelector from '../components/SizeSelector';
import QuantitySelector from '../components/QuantitySelector';
import { useNavigation } from '@react-navigation/native';
import { useAddToBasket } from '../hooks/useBucket';

const ItemDetailedViewScreen = ({ route }) => {

  const navigation = useNavigation();

  const { product } = route.params;
  const { addProductsToBasket } = useAddToBasket(() => {});

  const [selectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(0)

  function increaseQuantity() {
    setQuantity(quantity + 1)
  }

  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  function addToBasket() {
    addProductsToBasket(product, selectedSize, quantity)
    navigation.goBack()
  }

  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center'}}
      className={"bg-primary flex h-full pt-[50px] pl-4 pr-4"}>
        <TouchableOpacity
          className={"self-start mb-3"}
          onPress={() => navigation.goBack()}>
          <Text className={"text-secondary text-2xl font-bold"}>Back</Text>
        </TouchableOpacity>
      <Image
        className={"w-full h-[300px] rounded-lg mb-4"}
        source={{
          uri: product.mainImage,
        }}/>
      <View className={"self-start"}>
        <Text className={"mb-2 text-white text-1xl"}>
          {product.description}
        </Text>
        <Text className={"text-3xl text-white font-bold"}>
          {product.brandName}
        </Text>
        <Text className={"text-1xl text-white"}>
          {product.name}
        </Text>
        <Text className={"self-start text-white text-1xl"}>
          {`Available Color: ${product.colour}`}
        </Text>
        <Text className={"text-2xl mb-2 text-secondary font-bold"}>
          {`${product.price.amount} ${product.price.currency} `}
        </Text>
      </View>
      <View className={"flex w-full flex-row items-center justify-between"}>
        <View>
          <Text className={"text-white text-1xl mb-2"}>
            Select Size:
          </Text>
          <SizeSelector
            selectedSize={selectedSize}
            product={product}
            onPressSize={(size) => setSelectedSize(size)}
          />
        </View>
      <QuantitySelector
        quantity={quantity}
        decreaseOnPress={() => decreaseQuantity()}
        increaseOnPress={() => increaseQuantity()}
      />
      </View>
      <View className={"flex-row items-center"}>
      <TouchableOpacity
        disabled={!selectedSize || quantity === 0}
        onPress={() => addToBasket()}
        className={"bg-secondary rounded-lg mt-4 p-3 ml-3"}>
        <Text className={"text-white text-1xl font-bold"}>
          Add to Basket
        </Text>
      </TouchableOpacity>
      </View>
      <View className={"h-[100px]"}></View>
    </ScrollView>
  );
}

export default ItemDetailedViewScreen;