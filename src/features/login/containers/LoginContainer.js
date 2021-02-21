import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'

import firebaseClient from '../../../firebase/firebaseClient'
import { useAuth } from '../../../firebase/auth'
import { useForm } from '../hooks/useForm'
import { useFetch } from '../hooks/useFetch'
import useLoginToken from '../hooks/useLoginToken'

import Login from '../components/Login'

const LoginContainer = () => {
    const [token, setToken] = useLoginToken('loginToken')
    const [values, handleChange] = useForm({ email: '', password: '' })
    const { user } = useAuth()
    const userId = user ? user.uid : 'Not signed in'

    console.log('formValues', values)
    console.log('useAuth', user)

    return <Login values={values} handleChange={handleChange} setToken={setToken} userId={userId} />
}

export default LoginContainer
