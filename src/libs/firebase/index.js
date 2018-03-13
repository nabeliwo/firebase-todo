import config from 'config'

const { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } = config.get('firebase')
const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
}

firebase.initializeApp(config)
