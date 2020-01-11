import {
    FETCHING_VEHICLES_REQUEST,
    FETCHING_VEHICLES_SUCCESS,
    FETCHING_VEHICLES_FAILURE
} from "./types";

export const fetchingVehiclesRequest = () => ({ type: FETCHING_VEHICLES_REQUEST })

export const fetchingVehiclesSuccess = (data) => ({
    type: FETCHING_VEHICLES_SUCCESS,
    payload: data
})

export const fetchingVehiclesFailure = (error) => ({
    type: FETCHING_VEHICLES_FAILURE,
    payload: error
})

export const fetchVehicles = (url) => {
    return async dispatch => {
        dispatch(fetchingVehiclesRequest())
        try {
            let response = await fetch(url || 'https://swapi.co/api/vehicles')
            let json = await response.json()
            dispatch(fetchingVehiclesSuccess(json))
        } catch (e) {
            dispatch(fetchingVehiclesFailure())
        }
    }
}