import React, { useState, useCallback, useEffect, useRef } from 'react'

import { useForm } from '../hooks/useForm'
import News from '../components/News'

const NewsContainer = () => {
    const [phrase, setPhrase] = useState('')
    const [gifs, setGifs] = useState([])
    const [isSending, setSending] = useState(false)
    const isMounted = useRef(true)

    const findGifs = useCallback(async () => {
        if (isSending) return

        setSending(true)

        try {
            console.log('query', phrase)
            const url = `https://api.giphy.com/v1/gifs/search?api_key=bgfNW52aHgpd6yoJVG5HIqbIiRRlplZX&q=${phrase}&limit=26&offset=0&rating=g&lang=en`

            const response = await fetch(url)

            const json = await response.json()
            console.log('URL', url, 'RES', response, json)
            const images = json.data.map((item) => {
                return item.images.preview.mp4
            })
            setGifs(images)
            setSending(false)
        } catch (error) {
            alert(error)
        }
    }, [phrase])

    const results = gifs.map((url) => {
        return <video autoPlay loop key={url} src={url} />
    })

    const deleteGifs = () => {
        setGifs([])
        setPhrase('')
    }

    return (
        <News
            phrase={phrase}
            setPhrase={(e) => {
                setPhrase(e.target.value)
            }}
            findGifs={findGifs}
            deleteGifs={deleteGifs}
            results={results}
        />
    )
}

export default NewsContainer

//  Asi k nicemu?? lepsi je pouzit useCallback v tomto pripade ne??

// useEffect(() => {
//     async function fetchData(phrase) {
//         try {
//             const response = fetch(
//                 `https://api.giphy.com/v1/gifs/search?api_key=bgfNW52aHgpd6yoJVG5HIqbIiRRlplZX&q=${phrase}&limit=12&offset=0&rating=g&lang=en`
//             )
//                 .then((json) => {
//                     return json.json()
//                 })
//                 .then((incomingData) => {
//                     const images = incomingData.data.map((item) => {
//                         return item.images.preview.mp4
//                     })
//                     setGifs(images)
//                 })

//             console.log('GIFY', gifs)

//             return response
//         } catch (error) {
//             alert(error)
//         }
//     }

//     fetchData(phrase)
// }, [isSending])
