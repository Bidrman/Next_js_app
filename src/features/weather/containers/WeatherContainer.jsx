import React from 'react'

import Weather from '../components/Weather'
import WeatherFormContainer from './WeatherFormContainer'
import ForecastListContainer from './ForecastListContainer'

const WeatherContainer = () => {
    const formContainer = <WeatherFormContainer />
    const citiesList = <ForecastListContainer />

    return <Weather addForm={formContainer} addCityList={citiesList} />
}

export default WeatherContainer
