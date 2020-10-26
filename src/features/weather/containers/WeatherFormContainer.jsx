import React, { useState, useEffect, useCallback } from 'react'
//import { useDispatch, useSelector } from 'react-redux'

//import useForm from '../hooks/useForm'
//import * as types from '../../../../redux/types'

import WeatherForm from '../components/WeatherForm'

const WeatherFormContainer = () => {
    //const dispatch = useDispatch()
    const [isSearching, setSearching] = useState(false)
    const [city, setCityName] = useState('')
    const [cities, setCities] = useState(null)

    //const cityName = useSelector((state) => state.weather.cityName)
    //const addCity = dispatch({ type: types.ADD_CITY })

    const searchCity = useCallback(() => {
        if (setSearching) return

        try {
            const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=cz&units=metric&appid=64128163cebd1a19281dea72993d1cd6`
        } catch (error) {
            alert(error)
        }
    }, [city])

    const deleteCities = () => {}

    return (
        <WeatherForm
            cityName={city}
            setCity={(e) => {
                setCityName(e.target.value)
            }}
            searchForecast={searchCity}
            deleteList={deleteCities}
        />
    )
}

export default WeatherFormContainer
