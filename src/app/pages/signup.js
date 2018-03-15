import React from 'react'
import Link from 'next/link'
import { firebaseAuth } from '../../lib/firebase/'

export default class SignUp extends React.Component {
  onSubmit(e) {
    e.preventDefault()

    firebase.initializeApp(config.firebase)
    firebaseAuth().createUserWithEmailAndPassword(e.target.email.value, e.target.password.value)
    .then(data => {
      console.log('success')
      console.log(data)
    })
    .catch(e => {
      if (e) console.log(`${e.code} : ${e.message}`)
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign up</h1>
        Email: <input type="email" name="email" />
        Password: <input type="password" name="password" />
        <input type="submit" />
        <Link href="/login">to login</Link>
      </form>
    )
  }
}
