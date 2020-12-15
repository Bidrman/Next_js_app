import * as types from '../types'
import { loadLocalStorage } from '../../src/utils/localStorage'

// SSR to zabiji, musi se pres hooky
// const preloadedCities = loadLocalStorage('cities')

const initialState = {
    isFetching: false,
    fetchUrl: null,
    cities: [],
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CITY:
            return {
                ...state,
                cities: [
                    ...state.cities,
                    {
                        id: action.payload.city.id,
                        name: action.payload.city.name,
                        date: new Date(),
                        forecast: action.payload.list.filter((litItem, index) => index <= 3),
                    },
                ],
            }
        case types.REMOVE_CITY:
            return {
                ...state,
            }
        case types.DELETE_CITIES:
            return {
                ...state,
                cities: [],
            }
        case types.UPDATE_CITIES:
            return {
                ...state,
                cities: action.payload,
            }
        case types.WEATHER_SET_URL:
            return {
                ...state,
                fetchUrl: action.payload,
            }
        case types.FETCH_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case types.FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                error_msg: action.payload,
            }
        default:
            return state
    }
}

export default weatherReducer
