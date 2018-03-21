import React from 'react'
import firebase from 'firebase'
import 'firebase/firestore'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'

import config from '../../config/client'
import { initialize } from '../store/auth/actions'
import initStore from '../store/configureStore'
import Signup from '../components/pages/Signup/'

const mapStateToProps = store => ({ auth: store.auth })
const mapDispatchToProps = (dispatch) => {
  return {
    initialize: bindActionCreators(initialize, dispatch)
  }
}

@withRedux(initStore, mapStateToProps, mapDispatchToProps)
export default class SignupPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      authenticated: false
    }
  }

  componentDidMount() {
    const { auth, initialize } = this.props

    if (!auth.initialized) {
      firebase.initializeApp(config.firebase.credential)
      this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (user) Router.replace('/')
        this.setState({ authenticated: true })
      })
      this.props.initialize()
    }
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe()
  }

  onSubmit(e) {
    e.preventDefault()

    const email = e.target.signup_email.value
    const password = e.target.signup_password.value
    const name = e.target.signup_name.value

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(data => {
      console.log(name)
      firebase.firestore().collection('users').doc(data.uid).set({ name })
      .then(docRef => {
        console.log(docRef);
      })
      .catch(err => {
        if (err) console.log(`${err.code} : ${err.message}`)
      })
    })
    .catch(err => {
      if (err) console.log(`${err.code} : ${err.message}`)
    })
  }

  render() {
    return this.state.authenticated ? <Signup onSubmit={this.onSubmit} /> : <p>Loading...</p>
  }
}
