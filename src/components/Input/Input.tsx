import React from 'react'
import { View, TextInput } from 'react-native'
import styles from './InputStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Input = ({
    placeholder = "",
    value = "",
    onType,
    iconName = "",
    isSecure = true }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onType}
                value={value}
                secureTextEntry={isSecure}
            />
            <Icon style={styles.icon} name={iconName} size={25} />
        </View>
    );
};


export default Input;
