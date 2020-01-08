import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const ICON_SIZE = 25

export default function Icon(props) {
    return <Ionicons name={props.name} size={props.size || ICON_SIZE} />;
}