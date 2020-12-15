import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//import useForm from '../hooks/useForm'
//import * as types from '../../../../redux/types'
import fetchJsonData from '../../../sideEffects/fetch/fetchData'
import { setUrl, addCity, deleteCities, fetchRequest } from '../../../../redux/actions/weatherActions'

import useManageCities from '../hooks/useManageCities'
import useLocalStorage from '../hooks/useLocalStorage'
import WeatherForm from '../components/WeatherForm'

const WeatherFormContainer = () => {
    const dispatch = useDispatch()
    const reduxCities = useSelector((state) => state.weather.cities)
    const fetchUrl = useSelector((state) => state.weather.fetchUrl)
    const [isSearching, setSearching] = useState(false)
    const [city, setCityName] = useState('')
    const [storedCities, setStoredCities] = useLocalStorage('cities')
    const [cities, setCities] = useManageCities(storedCities)

    useEffect(() => {
        createFetchUrl(city)
        if (cities.length == 0) return
        setStoredCities(cities)
    }, [city, cities])

    const createFetchUrl = (cityName) => {
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=cz&units=metric&appid=64128163cebd1a19281dea72993d1cd6`

        dispatch(setUrl(url))
    }

    const searchForecast = (url) => {
        dispatch(fetchRequest(url))
    }

    const deleteList = () => {
        dispatch(deleteCities())
        window.localStorage.clear()
    }

    return (
        <WeatherForm
            cityName={city}
            setCity={(e) => {
                setCityName(e.target.value)
            }}
            searchForecast={() => {
                searchForecast(fetchUrl)
            }}
            deleteList={deleteList}
        />
    )
}

export default WeatherFormContainer
