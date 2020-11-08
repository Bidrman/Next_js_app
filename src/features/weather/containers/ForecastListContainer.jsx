import React from 'react'
import { useSelector } from 'react-redux'

import ForecastList from '../components/ForecastList'
import ForecastItemContainer from './ForecastItemContainer'

const ForecastListContainer = () => {
    const storedCities = useSelector((state) => state.weather.cities)
    const displayedItems = storedCities.map((city) => {
        return (
            <ForecastItemContainer
                className={'mesto'}
                key={city.name}
                city={city.name}
                date={city.date}
                forecast={city.forecast}
            />
        )
    })

    return <ForecastList forecastItems={displayedItems} />
}

export default ForecastListContainer
