import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'

import { addNews, removeNews, fetchRequest } from '../../../../redux/actions/newsActions'
import NewsForm from '../components/NewsForm'

const NewsFormContainer = ({ countries }) => {
    const dispatch = useDispatch()
    const reduxNews = useSelector((state) => state.news.news)
    const [country, setCountry] = useState('')

    const createUrl = (countryName) => {
        const url = `https://newsapi.org/v2/top-headlines?country=${countryName}&apiKey=84a36c3765424acdb09e74a81ae2ccec`

        return url
    }

    const findNews = () => {
        if (country === '') alert('nejprve vyberte zemi, kliknutím na tlačátko s názvem země')

        const mergedUrl = createUrl(country)
        dispatch(fetchRequest(mergedUrl))
    }

    const searchButton = (
        <Button color={'primary'} className={'w-100 py-2'} onClick={() => findNews()}>
            Hledat zprávy
        </Button>
    )

    const countryButtons = countries.map((country) => {
        return (
            <Button
                color={country.color}
                className={'px-4 py-2'}
                key={country.code}
                onClick={() => setCountry(country.code)}
            >
                {country.name}
            </Button>
        )
    })

    return <NewsForm buttons={countryButtons} searchButton={searchButton} />
}

export default NewsFormContainer
