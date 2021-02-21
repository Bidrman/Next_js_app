import React from 'react'
import { useDispatch } from 'react-redux'
import firebase from 'firebase'

import firebaseConfig from './config/firebaseConfig'

export default function firebaseClient() {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)
    console.log('firebase', firebase)
}
