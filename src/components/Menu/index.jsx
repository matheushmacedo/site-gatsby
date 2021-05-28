import React from 'react'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import * as Styled2 from './styled'

import '../../styles/styles.scss'
import * as Styled from '../../styles/pages/contatoStyle'

import { Navbar, Nav } from 'react-bootstrap'
import scrollTo from 'gatsby-plugin-smoothscroll';

/*

  <Nav className="mr-auto menu">
    <Link to="#home" className="nav-link" activeStyle={{ color: "#009888" }} activeClassName="active" onClick={() => scrollTo('#home')}><strong>Home</strong></Link>
    <Link to="#sobre" className="nav-link" activeStyle={{ color: "#009888" }} activeClassName="active" onClick={() => scrollTo('#sobre')}><strong>Sobre</strong></Link>
    <Link to="#depoimentos" className="nav-link" activeStyle={{ color: "#009888" }} activeClassName="active" onClick={() => scrollTo('#depoimentos')}><strong>Depoimentos</strong></Link>
    <Link to="#contato" className="nav-link" activeStyle={{ color: "#009888" }} activeClassName="active" onClick={() => scrollTo('#contato')}><strong>Contato</strong></Link>
  </Nav>



  <Link to="#home" className="nav-link" onClick={() => scrollTo('#home')}><strong>Home</strong></Link>
  <Link to="#sobre" className="nav-link" onClick={() => scrollTo('#sobre')}><strong>Sobre</strong></Link>
  <Link to="#depoimentos" className="nav-link" onClick={() => scrollTo('#depoimentos')}><strong>Depoimentos</strong></Link>
  <Link to="#contato" className="nav-link" onClick={() => scrollTo('#contato')}><strong>Contato</strong></Link>
*/

const Menu = () => {
    const { logo } = useStaticQuery(graphql`
    query {
        logo: file(relativePath: { eq: "logo3.png" }) {
          childImageSharp {
            fixed(width: 200, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
  `)
    return (
      <div className="shadow">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="fixed-top shadow">
        <Navbar.Brand href="/">
          <Link className="navbar-brand" to="/">
              <Img fixed={logo.childImageSharp.fixed} alt="Logo" /> 
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto menu">
            <Styled2.botao type="button" class="btn btn-white text-center" onClick={() => scrollTo('#home')}>Home</Styled2.botao>
            <Styled2.botao type="button" class="btn btn-white" onClick={() => scrollTo('#sobre')}>Sobre</Styled2.botao>
            <Styled2.botao type="button" class="btn btn-white" onClick={() => scrollTo('#depoimentos')}>Depoimentos</Styled2.botao>
            <Styled2.botao type="button" class="btn btn-white" onClick={() => scrollTo('#contato')}>Contato</Styled2.botao>
            
            
          </Nav>

          <Nav>
            <Nav.Link className="btn btn-luiz text-white flex-sm-fill text-center mx-1 my-1" target="_blank" href="https://api.whatsapp.com/send?phone=5516982436477&amp;text=">
              <Styled.WhatsWrapper corwhite />
              Whatsapp
            </Nav.Link>
            <Nav.Link className="btn btn-luiz text-white mx-1 my-1" target="_blank" href="https://api.whatsapp.com/send?phone=5516982436477&amp;text=">
              <Styled.CalendarWrapper corwhite />
              Agende seu horário
            </Nav.Link>
            <Nav.Link className="btn btn-luiz text-white mx-1 my-1" href="tel:016982436477">
              <Styled.Phone2Wrapper corwhite />
              Ligar agora
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
    
}

export default Menu