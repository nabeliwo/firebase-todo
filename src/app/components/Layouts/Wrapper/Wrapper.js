import React from 'react'

import baseStyle from './baseStyle'
import Header from '../Header/'
import Footer from '../Footer/'

// inject global styles
baseStyle()

const Wrapper = ({ children }) => (
  <React.Fragment>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </React.Fragment>
)

export default Wrapper
