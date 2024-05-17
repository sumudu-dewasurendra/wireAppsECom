import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const QuantitySelector = ({
    decreaseOnPress,
    quantity,
    increaseOnPress,
}) => {

  return (
    <View className={"flex-row mt-4"}>
        <TouchableOpacity
            className={"w-[35px] h-[35px] bg-primaryLight rounded-tl-lg rounded-bl-lg items-center justify-center"}
            onPress={() => decreaseOnPress()}
        >
          <Text className={"text-2xl text-black font-bold"}>
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className={"w-[35px] h-[35px] bg-white items-center justify-center"}>
            <Text className={"text-1xl text-black"}>
                {quantity}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            className={"w-[35px] h-[35px] bg-primaryLight rounded-tr-lg rounded-br-lg items-center justify-center"}
            onPress={() => increaseOnPress()}>
            <Text className={"text-2xl text-black font-bold"}>
                +
            </Text>
        </TouchableOpacity>
    </View>
  );
}

export default QuantitySelector;