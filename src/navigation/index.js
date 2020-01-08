import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Vehicles from '../screens/vehicles/vehicles';
import Starships from '../screens/starships/starships';
import VehicleDetails from "../screens/vehicleDetails/vehicleDetails";
import Icon from '../components/icon/icon';

const bottomTabBar = createMaterialBottomTabNavigator({
    Vehicles: {
        screen: Vehicles,
        navigationOptions: {
            tabBarIcon: ({ focused }) => <Icon name={focused ? "ios-add-circle" : "ios-add-circle-outline"} />,
        }
    },
    Starships: {
        screen: Starships,
        navigationOptions: {
            tabBarIcon: ({ focused }) => <Icon name={focused ? "ios-checkbox" : "ios-checkbox-outline"} />,
        }
    }
}, {
    labeled: false,
    style: { elevation: 10 },
    barStyle: { backgroundColor: '#36EB99' },

});


const vehiclesStack = createStackNavigator({
    VehicleDetails
}, {
    headerMode: 'none',
})

const AppNavigator = createStackNavigator({
    BottomTabBar: bottomTabBar,
    vehiclesStack
}, {
    defaultNavigationOptions: {
        title: 'Zonder Studios',
        headerStyle: {
            backgroundColor: '#36EB99',
        }
    }
});

export default createAppContainer(AppNavigator);