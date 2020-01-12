import {
    FETCHING_VEHICLES_REQUEST,
    FETCHING_VEHICLES_SUCCESS,
    FETCHING_VEHICLES_FAILURE,
    FETCHING_MORE_VEHICLES_REQUEST,
    FETCHING_MORE_VEHICLES_SUCCESS,
    SELECT_VEHICLE,
    ADD_VEHICLE
} from "./types";

export const fetchingVehiclesRequest = () => ({ type: FETCHING_VEHICLES_REQUEST })

export const fetchingMoreVehiclesRequest = () => ({ type: FETCHING_MORE_VEHICLES_REQUEST })

export const fetchingVehiclesSuccess = (data) => ({
    type: FETCHING_VEHICLES_SUCCESS,
    payload: data
})

export const fetchingMoreVehiclesSuccess = (data) => ({
    type: FETCHING_MORE_VEHICLES_SUCCESS,
    payload: data
})

export const fetchingVehiclesFailure = (error) => ({
    type: FETCHING_VEHICLES_FAILURE,
    payload: error
})

export const fetchVehicles = () => {
    return async dispatch => {
        dispatch(fetchingVehiclesRequest())
        try {
            let response = await fetch('https://swapi.co/api/vehicles')
            let json = await response.json()
            dispatch(fetchingVehiclesSuccess(json))
        } catch (e) {
            dispatch(fetchingVehiclesFailure(e.message))
        }
    }
}

export const fetchMoreVehicles = (url) => {
    return async dispatch => {
        dispatch(fetchingMoreVehiclesRequest())
        try {
            let response = await fetch(url)
            let json = await response.json()
            dispatch(fetchingMoreVehiclesSuccess(json))
        } catch (e) {
            dispatch(fetchingVehiclesFailure())
        }
    }
}

export const selectVehicle = (vehicle) => ({
    type: SELECT_VEHICLE,
    payload: vehicle
})

export const addVehicle = vehicle => ({
    type: ADD_VEHICLE,
    payload: {
        ...vehicle,
        cargo_capacity: "50000",
        consumables: "2 months",
        cost_in_credits: "150000",
        created: "2014-12-10T15:36:25.724000Z",
        crew: "46",
        edited: "2014-12-22T18:21:15.523587Z",
        films: [
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/1/",
        ],
        length: "36.8",
        manufacturer: "Corellia Mining Corporation",
        max_atmosphering_speed: "30",
        // "model": "Digger Crawler",
        // "name": "Sand Crawler",
        passengers: "30",
        pilots: [],
        url: "https://swapi.co/api/vehicles/4/",
        vehicle_class: "wheeled"
    }
})