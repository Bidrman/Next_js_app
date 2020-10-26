const initialState = {
    cityName: '',
    weatherInfo: null,
    cities: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CITY':
            return {
                ...state,
                cities: action.payload,
            }
        default:
            return state
    }
}

export default reducer
