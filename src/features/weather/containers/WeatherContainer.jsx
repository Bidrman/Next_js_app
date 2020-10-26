import React from 'react'

import Weather from '../components/Weather'

const WeatherContainer = ({ children }) => {
    return <Weather>{children}</Weather>
}

export default WeatherContainer
