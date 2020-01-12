import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Icon from '../../components/icon/icon'
import styles from "./styles";

const DETAILS_ICON_SIZE = 15;

function VehicleDetails(props) {
    // {
    //     "cargo_capacity": "50000",
    //     "consumables": "2 months",
    //     "cost_in_credits": "150000",
    //     "created": "2014-12-10T15:36:25.724000Z",
    //     "crew": "46",
    //     "edited": "2014-12-22T18:21:15.523587Z",
    //     "films": Array [
    //       "https://swapi.co/api/films/5/",
    //       "https://swapi.co/api/films/1/",
    //     ],
    //     "length": "36.8",
    //     "manufacturer": "Corellia Mining Corporation",
    //     "max_atmosphering_speed": "30",
    //     "model": "Digger Crawler",
    //     "name": "Sand Crawler",
    //     "passengers": "30",
    //     "pilots": Array [],
    //     "url": "https://swapi.co/api/vehicles/4/",
    //     "vehicle_class": "wheeled",
    //   }
    return (<View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>{props.vehicle.name}</Text>
        </View>
        <View style={styles.modelContainer}>
            <Text numberOfLines={1}>{props.vehicle.model}</Text>
        </View>
        <View style={styles.dateContainer}>
            <Text style={styles.details} numberOfLines={1}>Added: {new Date(props.vehicle.created).toLocaleDateString() || 'N/A'}</Text>
        </View>
        <View style={styles.detailsContainer}>
            <View>
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
        </View>
    </View>)
}

const mapStateToProps = state => {
    return {
        vehicle: state.selectedVehicle
    }
}

export default connect(mapStateToProps)(VehicleDetails)