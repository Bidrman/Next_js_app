import admin from 'firebase-admin'

import serviceAccount from '../keys/secret.json'

export const verifyIDToken = (token) => {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: 'https://crypto-monitor-72abc-default-rtdb.europe-west1.firebasedatabase.app',
        })
    }
    try {
        admin.auth().verifyIdToken(token)
    } catch (error) {
        console.log('firebase login error', error)
        alert(error)
    }
}
