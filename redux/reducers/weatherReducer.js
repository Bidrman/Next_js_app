import * as types from '../types'

const initialState = {
    cityName: '',
    weatherInfo: null,
    cities: [],
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CITY:
            return {
                ...state,
                cities: [...state.cities, action.payload],
            }
        case types.REMOVE_CITY:
            return {
                ...state,
                cities: action.payload,
            }
        default:
            return state
    }
}

export default weatherReducer
