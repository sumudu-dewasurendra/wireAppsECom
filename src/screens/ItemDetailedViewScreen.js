import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import SizeSelector from '../components/compositeComponents/SizeSelector';
import QuantitySelector from '../components/compositeComponents/QuantitySelector';
import ProductMainDetailView from '../components/compositeComponents/ProductMainDetailView';
import { useNavigation } from '@react-navigation/native';
import { useAddToBasket } from '../hooks/useBucket';

const ItemDetailedViewScreen = ({ route }) => {

  const navigation = useNavigation();

  const { product } = route.params;
  const { addProductsToBasket } = useAddToBasket(() => {});

  const [selectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(0)

  const MemorizedSizeSelector = React.memo(SizeSelector)
  const MemorizedQuantitySelector = React.memo(QuantitySelector)
  const MemorizedProductMainDetailView = React.memo(ProductMainDetailView)

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
      <MemorizedProductMainDetailView
        description={product.description}
        brandName={product.brandName}
        name={product.name}
        colour={product.colour}
        amount={product.price.amount}
        currency={product.price.currency}
      />
      <View className={"flex w-full flex-row items-center justify-between"}>
        <View>
          <Text className={"text-white text-1xl mb-2"}>
            Select Size:
          </Text>
          <MemorizedSizeSelector
            selectedSize={selectedSize}
            sizes={product.sizes}
            onPressSize={(size) => setSelectedSize(size)}
          />
        </View>
      <MemorizedQuantitySelector
        quantity={quantity}
        decreaseOnPress={() => decreaseQuantity()}
        increaseOnPress={() => increaseQuantity()}
      />
      </View>
      <View className={"items-center"}>
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