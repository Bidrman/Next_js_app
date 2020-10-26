import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSession, signin, signout } from 'next-auth/client'
import { useRouter } from 'next/router'

import Login from '../components/Login'

const LoginContainer = () => {
    const [{ auth }, setAuthorization] = useState({ auth: null })

    const dispatch = useDispatch()
    const isLogged = useSelector((state) => state.user.isLogged)
    const userId = useSelector((state) => state.user.userId)

    console.log('userId a logged', userId, isLogged)

    useEffect(() => {
        const params = {
            clientId: '747252271626-0et7d2prte44td1p714j9v809smbe6hc.apps.googleusercontent.com',
            scope: 'email',
        }

        window.gapi.load('client:auth2', () => {
            window.gapi.client.init(params).then(() => {
                setAuthorization(window.gapi.auth2.getAuthInstance())

                console.log('authorization', auth)
            })
        })
    }, [])

    return <Login />

    // const [session, loading] = useSession()

    // console.log('funguje to?', session, loading)

    // return (
    //     <div>
    //         <button onClick={signin}>Login</button>
    //     </div>
    // )
}

export default LoginContainer
