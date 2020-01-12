import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '../icon/icon'
import styles from './styles';

const DETAILS_ICON_SIZE = 15;

export default function Card(props) {
    return <TouchableOpacity
        onPress={() => { props.navigation.navigate('VehicleDetails') }}
        style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>{props.vehicle.name}</Text>
        </View>
        <View style={styles.modelContainer}>
            <Text numberOfLines={1}>{props.vehicle.model}</Text>
        </View>
        <View style={styles.detailsContainer}>
            <View style={styles.detailsSubContainer}>
                <Icon name={"ios-man"} size={DETAILS_ICON_SIZE} />
                <Text style={styles.details} numberOfLines={1}> {props.vehicle.passengers} Passenger(s)</Text>
            </View>
            <View style={styles.detailsSubContainer}>
                <Icon name={"md-trophy"} size={DETAILS_ICON_SIZE} />
                <Text style={styles.details} numberOfLines={1}> {props.vehicle.vehicle_class}</Text>
            </View>
            <View style={styles.detailsSubContainer}>
                <Icon name={"md-wallet"} size={DETAILS_ICON_SIZE} />
                <Text style={styles.details} numberOfLines={1}> ${props.vehicle.cost_in_credits || 'N/A'}</Text>
            </View>
            <View style={styles.detailsSubContainer}>
                <Icon name={"md-beaker"} size={DETAILS_ICON_SIZE} />
                <Text style={styles.details} numberOfLines={1}> {props.vehicle.max_atmosphering_speed || 'N/A'} mph</Text>
            </View>
        </View>
        <View style={styles.dateContainer}>
            <Text style={styles.details} numberOfLines={1}>Added: {new Date(props.vehicle.created).toLocaleDateString() || 'N/A'}</Text>
        </View>
    </TouchableOpacity>
}


