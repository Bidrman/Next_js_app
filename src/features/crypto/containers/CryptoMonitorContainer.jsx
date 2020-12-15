import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as types from '../../../../redux/types'

import {
    runHello,
    runDecrease,
    runIncrease,
    setUrl,
    fetchRequest,
} from '../../../../redux/actions/cryptoActions'

const CryptoMonitorContainer = () => {
    const dispatch = useDispatch()
    const reduxFetchUrl = useSelector((state) => state.crypto.fetchUrl)
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
        dispatch(fetchRequest(reduxFetchUrl))
    }

    return (
        <div>
            <h3>User's id in query: {numberOfUsers}</h3>
            <br />
            <br />
            <div>
                <button onClick={() => increaseNumber(numberOfUsers)}>+ increase id number</button>
            </div>
            <br />
            <div>
                <button onClick={() => decreaseNumber(numberOfUsers)}>- decrease id number</button>
            </div>
            <div className={'mt-4'}>
                <button onClick={() => fetchData()}>fetch DATA</button>
            </div>
            {fetchedUser && (
                <div className={'mt-4 text-left'}>
                    <pre>{JSON.stringify(fetchedUser, null, 1)}</pre>
                </div>
            )}
        </div>
    )
}

export default CryptoMonitorContainer
