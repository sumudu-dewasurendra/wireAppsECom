import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { totalWithCurrency } from '../common/commonFunctions';

const CheckoutBottomBar = ({
  basketItems,
}) => {

  return (
    <View className={"h-[70px] absolute bottom-0 w-screen p-4 flex-row justify-between"}>
        <Text className={"text-2xl text-white font-bold"}>{`Total: ${totalWithCurrency(basketItems)}`}</Text>
        <TouchableOpacity className={"bg-secondary justify-center items-center p-2 rounded-lg"}>
            <Text className={"text-white text-1xl rounded-lg font-bold "}>Checkout</Text>
        </TouchableOpacity>
    </View>
  );
}

export default CheckoutBottomBar;