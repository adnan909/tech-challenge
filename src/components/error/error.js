import React from 'react';
import { View, Text } from 'react-native'
import Icon from '../icon/icon'

const ICON_SIZE = 50;

export default function Error(props) {
    return <View>
        <Text>{props.error ? JSON.stringify(props.error) : ''}</Text>
        <Icon name={"md-refresh-circle"} size={ICON_SIZE} />
    </View>
}