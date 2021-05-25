import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as Styled from './styled'

const Footer = () => {
    const {
        site: {
            siteMetadata: {
              socialMedia: {
                facebook,
                instagram,
                youtube
              },
              copyright
            }
          }

    } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialMedia {
            facebook
            instagram
            youtube
          }
          copyright
        }
      }
    }
  `)

    return (
      <>
        <div className="bg-rodape">
            <div className="container">
                <div className="row text-white py-3">
                    <div className="col-lg-4 col-md-4 mb-3">
                        <h3 className="mb-4 text-luiz">Contato</h3>
                        <p className="mb-4 rodape"> (16) 98243-6477 </p>
                        <p>  
                          <a className="btn btn-luiz btn-lg" href="tel:016982436477" rel="noreferrer">Ligue agora!</a>
                        </p>
                        <div className="col-lg-7 col-md-12 col-sm-4">
                          <a href={facebook} target="_blank" rel="noreferrer">
                            <Styled.FacebookIcon />
                          </a> 
                          <a href={instagram} target="_blank" rel="noreferrer">
                            <Styled.InstagramIcon />
                          </a> 
                          <a href={youtube} target="_blank" rel="noreferrer">
                            <Styled.YoutubeIcon />
                          </a> 
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3">
                        <h3 className="mb-4 text-luiz">Endereço</h3>
                        <p className="rodape">Rua Jair Costa, 140<br />
                          Distrito de Bonfim Paulista <br />
                          Ribeirão Preto - SP <br />
                          Brasil
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-3">
                        <h3 className="text-luiz">Horário de Funcionamento</h3>
                        <p className="rodape">
                          <div className="row">
                            <div className="col-6 ml-3">Segunda-Feira.:</div>
                            <div className="col-5">08:00 – 21:00</div>
                          </div>
                          <div className="row">
                            <div className="col-6 ml-3">Terça-Feira:</div>
                            <div className="col-5">08:00 – 21:00</div>
                          </div>
                          <div className="row">
                            <div className="col-6 ml-3">Quarta-Feira:</div>
                            <div className="col-5">08:00 – 21:00</div>
                          </div>
                          <div className="row">
                            <div className="col-6 ml-3">Quinta-Feira:</div>
                            <div className="col-5">08:00 – 21:00</div>
                          </div>
                          <div className="row">
                            <div className="col-6 ml-3">Sexta-Feira:</div>
                            <div className="col-5">08:00 – 21:00</div>
                          </div>
                          <div className="row">
                            <div className="col-6 ml-3">Sábado:</div>
                            <div className="col-5">08:00 – 12:00</div>
                          </div>
                          <div className="row">
                            <div className="col-6 ml-3">Domingo:</div>
                            <div className="col-5">Fechado</div>
                          </div>
                        </p>
                    </div> 
                </div>
            </div>
        </div>

      <div className="bg-dark">
        <div className="container">
          <div className="row bg-dark text-secondary py-2 d-flex justify-content-between">
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              {copyright}
            </div>
            
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                Desenvolvido por &nbsp;<a className="text-secondary link-secondary" href="https://api.whatsapp.com/send?phone=5516991430302&amp;text=" target="_blank" rel="noreferrer"> Matheus Macedo</a>
            </div>
          </div>
        </div>
      </div>  
    </>
    )
}

export default Footer