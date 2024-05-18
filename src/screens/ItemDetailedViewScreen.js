import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import SizeSelector from '../components/compositeComponents/SizeSelector';
import QuantitySelector from '../components/compositeComponents/QuantitySelector';
import ProductMainDetailView from '../components/compositeComponents/ProductMainDetailView';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useAddToBasket } from '../hooks/useBucket';
import { BUTTON_TYPES } from '../utils/types';

const ItemDetailedViewScreen = ({ route }) => {

  const navigation = useNavigation();

  const { product } = route.params;
  const { addProductsToBasket } = useAddToBasket(() => {});

  const [selectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(0)

  const MemorizedSizeSelector = React.memo(SizeSelector)
  const MemorizedQuantitySelector = React.memo(QuantitySelector)
  const MemorizedProductMainDetailView = React.memo(ProductMainDetailView)
  const MemorizedButton = React.memo(Button)

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
        <View className={"self-start mb-3"}>
          <MemorizedButton
            textColor={"secondary"}
            label={"BACK"}
            type={BUTTON_TYPES.LABEL}
            onPress={navigation.goBack}
          />
        </View>
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
        <MemorizedButton
          color={"secondary"}
          textColor={"white"}
          disabled={!selectedSize || quantity === 0}
          onPress={addToBasket}
          label={"Add to Basket"}
          type={BUTTON_TYPES.SOLID}
        />
      </View>
      <View className={"h-[100px]"}></View>
    </ScrollView>
  );
}

export default ItemDetailedViewScreen;