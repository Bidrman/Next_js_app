import React from 'react'

import WeatherFormContainer from '../containers/WeatherFormContainer'
import ForecastListContainer from '../containers/ForecastListContainer'

const Weather = ({ addWeatherForm, addForecastList }) => {
    return (
        <>
            <h2>Jak bude zitra?</h2>
            <WeatherFormContainer />
            <ForecastListContainer />
        </>
    )
}

export default Weather
