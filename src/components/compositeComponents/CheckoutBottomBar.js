import React from 'react';
import { Text, View } from 'react-native';
import Button from '../Button';
import { BUTTON_TYPES } from '../../utils/types';

const CheckoutBottomBar = ({
  total,
}) => {

  return (
    <View className={"h-[70px] absolute bottom-0 w-screen p-4 flex-row justify-between"}>
        <Text className={"text-2xl text-white font-bold"}>{`Total: ${total}`}</Text>
        <Button
          color={"secondary"}
          textColor={"white"}
          label={"Checkout"}
          type={BUTTON_TYPES.SOLID}
          onPress={() => {}}
        />
    </View>
  );
}

export default CheckoutBottomBar;