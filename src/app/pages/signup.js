import firebase from 'firebase'
import React from 'react'
import config from '../config'


export default class SignUp extends React.Component {
  onSubmit(e) {
    e.preventDefault()

    firebase.initializeApp(config.firebase)
    firebase.auth().createUserWithEmailAndPassword(e.target.email.value, e.target.password.value)
    .then(data => {
      console.log('success')
      console.log(data)
    })
    .catch(e => {
      if (e) console.log(`${e.code} : e.message`)
    })
  }

  render() {
    console.log(firebase)
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign up</h1>
        Email: <input type="email" name="email" />
        Password: <input type="password" name="password" />
        <input type="submit" />
      </form>
    )
  }
}
