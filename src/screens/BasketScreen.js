import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import CheckoutBottomBar from '../components/CheckoutBottomBar';
import BasketItemView from '../components/BasketItemView';
import { useGetBasketItems, useDeleteFromBasket, useClearbasket } from '../hooks/useBucket';

const BasketScreen = () => {

  const { basketItems } = useGetBasketItems();
  const { deleteProductsFromBasket } = useDeleteFromBasket(() => {});
  const { clearProductsBasket } = useClearbasket(() => {});

  const MemorizedBasketItemView = React.memo(BasketItemView)
  const MemorizedCheckoutBottomBar = React.memo(CheckoutBottomBar)

  return (
    <View className={"bg-primary flex h-full items-center pt-[80px] pl-4 pr-4"}>
      <View className={"w-full flex-row justify-between items-center"}>
        <Text 
          className="mt-6 mb-10 text-4xl text-white self-start font-bold">
          Your Basket
        </Text>
        {basketItems.length > 0 && <TouchableOpacity onPress={()=> clearProductsBasket()}>
          <Text className={"text-secondary text-1xl rounded-lg font-bold "}>Clear Basket</Text>
        </TouchableOpacity>}
      </View>
      <View>
        <FlatList
          className={"flex w-full h-full mb-[200px]"}
          data={basketItems}
          extraData={basketItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <MemorizedBasketItemView
              product={item.product}
              quantity={item.quantity}
              size={item.size}
              onPressDelete={() => deleteProductsFromBasket(item.product, item.size)}
            />
          )}
          ListEmptyComponent={
            <Text className={"text-white text-1xl text-center mt-20"}>
              Your basket is empty
            </Text>
          }
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {basketItems.length > 0 && <MemorizedCheckoutBottomBar
        basketItems={basketItems}
      />}
    </View>
  );
}

export default BasketScreen;