import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as types from '../../../../redux/types'
import { runHello } from '../../../../redux/actions/cryptoActions'

const CryptoMonitorContainer = () => {
    const dispatch = useDispatch()
    const reduxMessage = useSelector((state) => state.crypto.message)
    const [magicLevel, setMagicLevel] = useState(0)

    useEffect(() => {
        dispatch(runHello(magicLevel))
    }, [magicLevel])

    const increaseMagic = (currentLevel) => {
        setMagicLevel((currentLevel) => currentLevel + 1)
    }
    const decreaseMagic = (currentLevel) => {
        setMagicLevel((currentLevel) => currentLevel - 1)
    }

    return (
        <div>
            <h3>Level of magic is currently: {reduxMessage}</h3>
            <br />
            <br />
            <div>
                <button onClick={() => increaseMagic(magicLevel)}>klik to increase magic</button>
            </div>
            <br />
            <div>
                <button onClick={() => decreaseMagic(magicLevel)}>klik to decrease magic</button>
            </div>
        </div>
    )
}

export default CryptoMonitorContainer
