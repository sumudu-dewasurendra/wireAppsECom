import React from 'react';
import { Text, View } from 'react-native';

const ProductMainDetailView = ({
    description,
    brandName,
    name,
    colour,
    amount,
    currency
}) => {

  return (
    <>
        <View className={"self-start"}>
            <Text className={"mb-2 text-white text-1xl"}>
            {description}
            </Text>
            <Text className={"text-3xl text-white font-bold"}>
            {brandName}
            </Text>
            <Text className={"text-1xl text-white"}>
            {name}
            </Text>
            <Text className={"self-start text-white text-1xl"}>
            {`Available Color: ${colour}`}
            </Text>
            <Text className={"text-2xl mb-2 text-secondary font-bold"}>
            {`${amount} ${currency} `}
            </Text>
      </View>
    </>
  );
}

export default ProductMainDetailView;