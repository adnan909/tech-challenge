import {
    FETCHING_VEHICLES_REQUEST,
    FETCHING_VEHICLES_SUCCESS,
    FETCHING_VEHICLES_FAILURE
} from "../actions/types";

const initialState = {
    isFetching: false,
    errorMessage: "",
    next: null,
    vehicles: []
}

export const vehicleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_VEHICLES_REQUEST:
            return { ...state, isFetching: true }
        case FETCHING_VEHICLES_FAILURE:
            return { ...state, isFetching: false, errorMessage: action.payload }
        case FETCHING_VEHICLES_SUCCESS:
            return { ...state, isFetching: false, vehicles: action.payload.results, pageInfo: action.payload.next }
        default:
            return state
    }
}

export default vehicleReducer