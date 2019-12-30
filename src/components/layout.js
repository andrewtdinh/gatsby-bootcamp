import React from 'react'

import Header from './header'
import Footer from './footer'
import layoutStyles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;