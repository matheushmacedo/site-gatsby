import * as React from "react"
import PropTypes from "prop-types"
import Menu from '../Menu'
import Footer from '../Footer'

import "./layout.scss"
import GlobalStyles from '../../styles/globalStyled'
import { Link } from "gatsby"



const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  const ScrollToLink = () => (
    <Link to="/#depoimentos">Scroll To DEPOIMENTOS</Link>
  )

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
