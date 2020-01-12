import {
    FETCHING_VEHICLES_REQUEST,
    FETCHING_VEHICLES_SUCCESS,
    FETCHING_VEHICLES_FAILURE,
    FETCHING_MORE_VEHICLES_REQUEST,
    FETCHING_MORE_VEHICLES_SUCCESS,
    SELECT_VEHICLE
} from "../actions/types";

const initialState = {
    isFetching: false,
    isFetchingMore: false,
    errorMessage: "",
    next: null,
    vehicles: [],
    selectedVehicle: null
}

export const vehicleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_VEHICLES_REQUEST:
            return { ...state, isFetching: true }
        case FETCHING_VEHICLES_FAILURE:
            return { ...state, isFetching: false, errorMessage: action.payload }
        case FETCHING_VEHICLES_SUCCESS:
            return { ...state, isFetching: false, vehicles: action.payload.results, next: action.payload.next }
        case FETCHING_MORE_VEHICLES_REQUEST:
            return { ...state, isFetchingMore: true }
        case FETCHING_MORE_VEHICLES_SUCCESS:
            return { ...state, isFetchingMore: false, vehicles: state.vehicles.concat(action.payload.results), next: action.payload.next }
        case SELECT_VEHICLE:
            return { ...state, selectedVehicle: action.payload }
        default:
            return state
    }
}

export default vehicleReducer