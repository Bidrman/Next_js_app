import { useState, useEffect } from 'react'
import { updateCities } from '../../../../redux/actions/weatherActions'
import { useDispatch, useSelector } from 'react-redux'

const useLocalStorage = (key) => {
    //nepotreba useState-> prepsat na reduxi hooky dispatch a useSelector
    const dispatch = useDispatch()
    const reduxCities = useSelector((state) => state.weather.cities)

    const getValue = () => {
        try {
            const storedItem = window.localStorage.getItem(key)

            if (storedItem === null || storedItem === []) return

            dispatch(updateCities(JSON.parse(storedItem)))
        } catch (error) {
            console.warn('Error pri nacitani localStorage dat: ', error)
        }
    }

    const addValue = (value) => {
        console.log('VALUE do AddValue', value)
        try {
            dispatch(updateCities(value))

            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }

    // vymyslet lepsi zpusob ukladani
    // const addValue = (value) => {
    //     console.log('VALUE do AddValue', value)
    //     try {
    //         const cities = [...reduxCities, value]
    //         dispatch(updateCities(cities))

    //         window.localStorage.setItem(key, JSON.stringify(cities))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        getValue()
    }, [])

    return [reduxCities, addValue]
}

export default useLocalStorage
