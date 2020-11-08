import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'

import { addNews, removeNews } from '../../../../redux/actions/newsActions'
import NewsForm from '../components/NewsForm'

const NewsFormContainer = ({ countries }) => {
    const dispatch = useDispatch()
    const reduxNews = useSelector((state) => state.news.news)
    const [isSending, setSending] = useState(false)
    const [country, setCountry] = useState('')

    useEffect(() => {
        console.log('News Country', country)
    }, [country])

    const findNews = async () => {
        if (isSending) return

        setSending(true)
        console.log('Sending ', isSending)
        try {
            if (!country) {
                alert('nejprve vyberte zemi stát, kliknutím na tlačátko s názvem státu')
                return
            }

            const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=84a36c3765424acdb09e74a81ae2ccec`

            const response = await fetch(url)
            console.log('response', response)
            const json = await response.json()
            console.log('JSON', json)

            dispatch(addNews(json.articles))
            setSending(false)
        } catch (error) {
            alert(error)
        }
    }

    const searchButton = (
        <Button color={'primary'} className={'w-100 py-2'} onClick={findNews}>
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
