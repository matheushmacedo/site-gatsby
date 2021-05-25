import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = () => {
    const { mapa } = useStaticQuery(graphql`
    query {
        mapa: file(relativePath: { eq: "mapa.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
  `)

  return(
    <>
      <Img fluid={mapa.childImageSharp.fluid} alt="Localização da clínica" />
    </>

  )
}

export default Image