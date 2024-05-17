import React from 'react';
import { Text, View } from 'react-native';

const NotificationDot = ({
  count,
}) => {

  return (
    <>
        <View className={"w-6 h-6 bg-white rounded-full bg-red-500 justify-center items-center font-bold"}>
            <Text className={"text-white text-1xl text-center"}>{count > 9 ? '9+' : count}</Text>
        </View>
    </>
  );
}

export default NotificationDot;