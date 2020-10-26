import React, { useState, useEffect, useCallback } from 'react'
//import { useDispatch, useSelector } from 'react-redux'

//import useForm from '../hooks/useForm'
//import * as types from '../../../../redux/types'

import useManageCities from '../hooks/useManageCities'
import WeatherForm from '../components/WeatherForm'

const WeatherFormContainer = () => {
    //const dispatch = useDispatch()
    const [isSearching, setSearching] = useState(false)
    const [city, setCityName] = useState('')
    const [cities, setCities] = useManageCities([])

    //const cityName = useSelector((state) => state.weather.cityName)
    //const addCity = dispatch({ type: types.ADD_CITY })

    const searchCity = useCallback(async () => {
        if (isSearching) return
        // zamezeni volani kdyz probiha fetch
        setSearching(true)
        console.log('searching je ', isSearching)

        try {
            // const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=cz&units=metric&appid=64128163cebd1a19281dea72993d1cd6`

            const fakeData = {
                city: 'Oklahoma',
                weather: 'Ma byt krasne',
            }

            setCities(fakeData)
            console.log('RR', typeof cities, cities)

            setSearching(false)
        } catch (error) {
            alert(error)
        }
    }, [city])

    const deleteCities = () => {}

    const display = () => {
        cities.map((city) => {
            console.log('CC', city)
            return (
                <div>
                    <h3>{city.name}</h3>
                    <p>{city.weather}</p>
                </div>
            )
        })
    }

    return (
        <WeatherForm
            cityName={city}
            setCity={(e) => {
                setCityName(e.target.value)
            }}
            searchForecast={searchCity}
            deleteList={deleteCities}
            display={display}
        />
    )
}

export default WeatherFormContainer
