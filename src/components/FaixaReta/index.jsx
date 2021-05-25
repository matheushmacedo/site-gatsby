import "./layout.scss"
import React from 'react'
import PropTypes from "prop-types"


const FaixaReta = ({ children, corfundo }) => {
    return (
        <div className={`row py-5 bg-${corfundo}`}>
            {children}
        </div>
    )
}

FaixaReta.propTypes = {
    children: PropTypes.node.isRequired,
  }

export default FaixaReta


  
  