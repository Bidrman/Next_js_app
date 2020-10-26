import * as types from '../types'

// stejny jako dole, akorat je to delsi

// export const setCity = (cityName) => {
//     return {
//         type: types.SET_CITY,
//         payload: cityName,
//     }
// }

export const setCity = (event) => ({
    type: types.SET_CITY,
    payload: event.target.value,
})

export const addCity = (cityName) => ({
    type: types.ADD_CITY,
    payload: cityName,
})
