import {
    FETCHING_VEHICLES_REQUEST,
    FETCHING_VEHICLES_SUCCESS,
    FETCHING_VEHICLES_FAILURE,
    FETCHING_MORE_VEHICLES_REQUEST,
    FETCHING_MORE_VEHICLES_SUCCESS
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