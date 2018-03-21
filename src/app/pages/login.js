import React from 'react'
import firebase from 'firebase'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import config from '../../config/client'
import { initialize } from '../store/auth/actions'
import initStore from '../store/configureStore'
import Login from '../components/pages/Login/'

const mapStateToProps = store => ({ auth: store.auth })
const mapDispatchToProps = (dispatch) => {
  return {
    initialize: bindActionCreators(initialize, dispatch)
  }
}

@withRedux(initStore, mapStateToProps, mapDispatchToProps)
export default class LoginPage extends React.Component {
  componentDidMount() {
    const { auth, initialize } = this.props

    if (!auth.initialized) {
      firebase.initializeApp(config.firebase.credential)
      this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log('ログイン済みです')
          console.log(user)
          user.getIdToken()
          .then((token) => {
            console.log(token)
          })
        } else {
          console.log('ログインしてないです')
        }
      })
      this.props.initialize()
    }
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe()
  }

  onSubmit(e) {
    e.preventDefault()

    firebase.auth().signInWithEmailAndPassword(e.target.login_email.value, e.target.login_password.value)
    .catch(e => {
      if (e) console.log(`${e.code} : ${e.message}`)
    })
  }

  render() {
    return <Login user={this.props.auth.user} onSubmit={this.onSubmit} />
  }
}
