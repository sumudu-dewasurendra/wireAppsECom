import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BUTTON_TYPES } from '../utils/types';

const Button = ({
    color,
    textColor,
    label,
    type,
    onPress,
    disabled = false
}) => {

    const commonStyle = "justify-center items-center p-2 rounded-lg";

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            className={`${type === BUTTON_TYPES.LABEL ? 
            commonStyle : 
            (`${commonStyle} bg-${color || 'secondary'}`)
            }`}>
            <Text className={`text-${textColor || 'white'} text-1xl rounded-lg font-bold`}>{label}</Text>
        </TouchableOpacity>
    );
}

export default Button;