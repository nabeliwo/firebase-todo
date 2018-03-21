import React from 'react'

import baseStyle from './baseStyle'
import Header from '../Header/'
import Footer from '../Footer/'
import { Main } from './style'

// inject global styles
baseStyle()

const Wrapper = ({ user, children }) => (
  <React.Fragment>
    <Header user={user} />
    <Main>
      {children}
    </Main>
    <Footer />
  </React.Fragment>
)

export default Wrapper
