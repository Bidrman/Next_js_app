import * as types from '../types'

// stejny jako dole, akorat je to delsi

// export const setCity = (cityName) => {
//     return {
//         type: types.SET_CITY,
//         payload: cityName,
//     }
// }

export const addCity = (cityData) => ({
    type: types.ADD_CITY,
    payload: cityData,
})

export const updateCities = (cities) => ({
    type: types.UPDATE_CITIES,
    payload: cities,
})

export const deleteCities = () => ({
    type: types.DELETE_CITIES,
})

export const setUrl = (url) => ({
    type: types.WEATHER_SET_URL,
    payload: url,
})

export const fetchRequest = (url) => ({
    type: types.WEATHER_FETCH_REQUEST,
    payload: url,
})

export const fetchSuccess = () => ({
    type: types.WEATHER_FETCH_SUCCESS,
})

export const fetchFail = () => ({
    type: types.WEATHER_FETCH_FAIL,
})
