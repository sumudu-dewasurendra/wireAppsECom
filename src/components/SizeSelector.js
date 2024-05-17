import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const SizeSelector = ({
    selectedSize,
    sizes,
    onPressSize,
}) => {

  return (
    <View className={"flex-row mb-2"}>
        {sizes.map((item, key) => {
            return (
                <TouchableOpacity
                    className={`w-[35px] h-[35px] bg-white rounded-lg flex justify-center items-center mr-2 ${selectedSize === item ? 'bg-secondary' : 'bg-primaryLight'}`}
                    key={key}
                    onPress={() => onPressSize(item)}
                >
                    <Text>{item}</Text>
                </TouchableOpacity>
            )
        })}
    </View>
  );
}

export default SizeSelector;