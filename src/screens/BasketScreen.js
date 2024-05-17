import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import CheckoutBottomBar from '../components/CheckoutBottomBar';
import { useGetBasketItems, useDeleteFromBasket, useClearbasket } from '../hooks/useBucket';
import BasketItemView from '../components/BasketItemView';

const BasketScreen = () => {

  const { basketItems } = useGetBasketItems();
  const { deleteProductsFromBasket } = useDeleteFromBasket(() => {});
  const { clearProductsBasket } = useClearbasket(() => {});

  return (
    <View className={"bg-primary flex h-full items-center pt-[80px] pl-4 pr-4"}>
      <View className={"w-full flex-row justify-between items-center"}>
        <Text 
          className="mt-6 mb-10 text-4xl text-white self-start font-bold">
          Your Basket
        </Text>
        <TouchableOpacity onPress={()=> clearProductsBasket()}>
          <Text className={"text-secondary text-1xl rounded-lg font-bold "}>Clear Basket</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          className={"flex w-full h-full mb-[200px]"}
          data={basketItems}
          extraData={basketItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <BasketItemView
              product={item.product}
              quantity={item.quantity}
              size={item.size}
              onPressDelete={() => deleteProductsFromBasket(item.product, item.size)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <CheckoutBottomBar
        basketItems={basketItems}
      />
    </View>
  );
}

export default BasketScreen;