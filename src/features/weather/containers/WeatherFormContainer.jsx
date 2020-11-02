import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//import useForm from '../hooks/useForm'
//import * as types from '../../../../redux/types'
import { addCity, deleteCities } from '../../../../redux/actions/weatherActions'

import useManageCities from '../hooks/useManageCities'
import useLocalStorage from '../hooks/useLocalStorage'
import WeatherForm from '../components/WeatherForm'

const WeatherFormContainer = () => {
    const dispatch = useDispatch()
    const reduxCities = useSelector((state) => state.weather.cities)

    const [isSearching, setSearching] = useState(false)
    const [city, setCityName] = useState('')
    const [storedCities, setStoredCities] = useLocalStorage('cities', reduxCities)
    const [cities, setCities] = useManageCities([])

    console.log('reduxSTORE', reduxCities)

    // useEffect(() => {
    //     const data = localStorage
    // }, [])

    const searchCity = async () => {
        if (isSearching) return
        // zamezeni volani kdyz probiha fetch
        setSearching(true)

        try {
            const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=cz&units=metric&appid=64128163cebd1a19281dea72993d1cd6`
            const response = await fetch(url)
            const cityData = await response.json()
            console.log('json', cityData)
            dispatch(addCity(cityData))
            setCityName('')

            // zbytecne duplicitni, ale pro zkousku zda funguje
            setCities(cityData)
            setStoredCities(cities)

            setSearching(false)
        } catch (error) {
            alert(error)
        }
    }

    console.log('RR', storedCities, city)

    const deleteList = () => {
        dispatch(deleteCities())
    }

    return (
        <WeatherForm
            cityName={city}
            setCity={(e) => {
                setCityName(e.target.value)
            }}
            searchForecast={searchCity}
            deleteList={deleteList}
        />
    )
}

export default WeatherFormContainer
