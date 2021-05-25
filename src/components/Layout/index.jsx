import * as React from "react"
import PropTypes from "prop-types"
import Menu from '../Menu'
import Footer from '../Footer'

import "./layout.scss"
import GlobalStyles from '../../styles/globalStyled'



const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <GlobalStyles/>
      <Menu/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
