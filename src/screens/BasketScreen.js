import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import CheckoutBottomBar from '../components/compositeComponents/CheckoutBottomBar';
import BasketItemView from '../components/compositeComponents/BasketItemView';
import { useGetBasketItems, useDeleteFromBasket, useClearbasket } from '../hooks/useBucket';
import { totalWithCurrency } from '../common/commonFunctions';
import Button from '../components/Button';
import { BUTTON_TYPES } from '../utils/types';

const BasketScreen = () => {

  const { basketItems } = useGetBasketItems();
  const { deleteProductsFromBasket } = useDeleteFromBasket(() => {});
  const { clearProductsBasket } = useClearbasket(() => {});

  const MemorizedBasketItemView = React.memo(BasketItemView)
  const MemorizedCheckoutBottomBar = React.memo(CheckoutBottomBar)
  const MemorizedButton = React.memo(Button)

  return (
    <View className={"bg-primary flex h-full items-center pt-[80px] pl-4 pr-4"}>
      <View className={"w-full flex-row justify-between items-center"}>
        <Text 
          className="mt-6 mb-10 text-4xl text-white self-start font-bold">
          Your Basket
        </Text>
        {basketItems.length > 0 && <MemorizedButton
          textColor={"secondary"}
          label={"Clear Basket"}
          type={BUTTON_TYPES.LABEL}
          onPress={() => clearProductsBasket()}
        />}
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
        total={totalWithCurrency(basketItems)}
      />}
    </View>
  );
}

export default BasketScreen;