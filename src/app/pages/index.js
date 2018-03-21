import React from 'react'
import firebase from 'firebase'
import 'firebase/firestore'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'

import config from '../../config/client'
import { initialize } from '../store/auth/actions'
import initStore from '../store/configureStore'
import Top from '../components/pages/Top/'

const mapStateToProps = store => ({ auth: store.auth })
const mapDispatchToProps = (dispatch) => {
  return {
    initialize: bindActionCreators(initialize, dispatch)
  }
}

@withRedux(initStore, mapStateToProps, mapDispatchToProps)
export default class TopPage extends React.Component {
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
      this.props.initialize()
    }

    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!user) Router.replace('/login')
      this.setState({ authenticated: true })
    })
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe()
  }

  render() {
    return this.state.authenticated ? <Top user={this.props.user} /> : <p>Loading...</p>
  }
}
