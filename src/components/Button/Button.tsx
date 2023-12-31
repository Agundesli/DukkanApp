import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import styles from './ButtonStyle';

const Button = ({ text, onPress, load }: any) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            disabled={load}
        >
            {load ? (
                <ActivityIndicator color="white" />
            ) : (
                <Text style={styles.title}>{text}</Text>
            )}

        </TouchableOpacity>
    );
};


export default Button;
