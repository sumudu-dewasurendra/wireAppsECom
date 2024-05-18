import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Button from '../Button';
import { BUTTON_TYPES } from '../../utils/types';

const BasketItemView = ({
  product,
  quantity,
  size,
  onPressDelete,
}) => {
  return (
    <View className={"flex flex-row w-full justify-between h-[100px] items-center mb-4 rounded-lg"}>
        <Image
            className={"w-screen/5 w-[75px] h-[75px] rounded-lg"}
            source={{
            uri: product.mainImage,
        }}></Image>
        <View className={"word-wrap line-clamp-2 w-[175px] ml-[10px] mr-[10px]"}>
            <Text 
                className={"text-1xl text-white font-bold"}>
                {product.name}
            </Text>
            <Text 
                className={"text-1xl text-white"}>
                {`Size: ${size}`}
            </Text>
            <Text 
                className={"text-1xl text-secondary font-bold"}>
                {`${product.price?.currency} ${product.price?.amount} * ${quantity}`}
            </Text>
        </View>
        <Button
            color={"red-500"}
            textColor={"white"}
            label={"Delete"}
            type={BUTTON_TYPES.SOLID}
            onPress={onPressDelete}
        />
    </View>
  );
}

export default BasketItemView;