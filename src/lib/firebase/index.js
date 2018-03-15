import firebase from 'firebase'
import config from './config'

export const firebaseApp = firebase.initializeApp(config.firebase)
export const firebaseAuth = firebase.auth
