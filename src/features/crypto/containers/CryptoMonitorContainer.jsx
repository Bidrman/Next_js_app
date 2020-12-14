import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as types from '../../../../redux/types'
import fetchJsonData from '../../../sideEffects/fetch/fetchData'
import {
    runHello,
    runDecrease,
    runIncrease,
    setUrl,
    fetchRequest,
} from '../../../../redux/actions/cryptoActions'

const CryptoMonitorContainer = () => {
    const dispatch = useDispatch()
    // const reduxFetchUrl = useSelector((state) => state.crypto.fetchUrl)
    const fetchedUser = useSelector((state) => state.crypto.fetchedData)
    const [numberOfUsers, setNumbefOfUsers] = useState(0)

    useEffect(() => {
        createFetchUrl(numberOfUsers)
    }, [numberOfUsers])

    const increaseNumber = (currentLevel) => {
        setNumbefOfUsers((currentLevel) => currentLevel + 1)
        dispatch(runIncrease())
    }
    const decreaseNumber = (currentLevel) => {
        setNumbefOfUsers((currentLevel) => currentLevel - 1)
        dispatch(runDecrease())
    }

    const createFetchUrl = (usersNumber) => {
        const mergedUrl = `https://jsonplaceholder.typicode.com/users/${usersNumber}`

        dispatch(setUrl(mergedUrl))
    }

    const fetchData = () => {
        dispatch(fetchRequest())
    }

    // const getData = async (userNum) => {
    //     const url = `https://jsonplaceholder.typicode.com/users/${userNum}`

    //     const response = await fetch(url)
    //     const data = await response.json()

    //     return data
    // }

    return (
        <div>
            <h3>Number of users in query: {numberOfUsers}</h3>
            <br />
            <br />
            <div>
                <button onClick={() => increaseNumber(numberOfUsers)}>+ increase number of users</button>
            </div>
            <br />
            <div>
                <button onClick={() => decreaseNumber(numberOfUsers)}>- decrease number of users</button>
            </div>
            <div className={'mt-4'}>
                <button onClick={() => fetchData()}>fetch DATA</button>
            </div>
            {fetchedUser && (
                <div className={'mt-4'}>
                    <pre>fetchedUser</pre>
                </div>
            )}
        </div>
    )
}

export default CryptoMonitorContainer
