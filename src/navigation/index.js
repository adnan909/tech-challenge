import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Vehicles from '../screens/vehicles/vehicles';
import VehicleDetails from "../screens/vehicleDetails/vehicleDetails";
import Icon from '../components/icon/icon';
import AddVehicle from '../screens/addVehicle/addVehicle';

const VehiclesTab = createStackNavigator({
    Vehicles: {
        screen: Vehicles,
        navigationOptions: {
            title: 'Vehicles',
            headerStyle: {
                backgroundColor: '#36EB99',
            }
        }

    },
    VehicleDetails: {
        screen: VehicleDetails,
        navigationOptions: {
            title: 'Vehicle Details',
            headerStyle: {
                backgroundColor: '#36EB99',
            }
        }
    }
})

const AddVehicleTab = createStackNavigator({
    AddVehicle: {
        screen: AddVehicle,
        navigationOptions: {
            title: 'Add New Vehicle',
            headerStyle: {
                backgroundColor: '#36EB99',
            }
        }
    }
})

const bottomTabBar = createMaterialBottomTabNavigator({
    Vehicles: {
        screen: VehiclesTab,
        navigationOptions: {
            tabBarIcon: ({ focused }) => <Icon name={focused ? "md-list-box" : "ios-list"} />,
        }
    },
    AddVehicle: {
        screen: AddVehicleTab,
        navigationOptions: {
            tabBarIcon: ({ focused }) => <Icon name={focused ? "ios-add-circle" : "ios-add-circle-outline"} />,

        }
    }
}, {
    labeled: false,
    style: { elevation: 10 },
    barStyle: { backgroundColor: '#36EB99' }
});


export default createAppContainer(bottomTabBar);