import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = () => {
    const { banner } = useStaticQuery(graphql`
    query {
        banner: file(relativePath: { eq: "banner.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
  `)

  return(
    <>
      <Img fluid={banner.childImageSharp.fluid} alt="Imagem sobre Hipnoterapia" />
    </>

  )
}

export default Image