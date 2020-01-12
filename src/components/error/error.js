import React from 'react';
import { View, Text } from 'react-native'
import Icon from '../icon/icon'
import styles from './styles';

const ICON_SIZE = 50;

export default function Error(props) {
    return <View style={styles.container}>
        <Icon name={"md-refresh-circle"} size={ICON_SIZE} />
        <Text>{props.error || 'Error Occured'}</Text>
    </View>
}