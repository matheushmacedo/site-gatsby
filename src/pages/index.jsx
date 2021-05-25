import * as React from 'react'
import Banner from '../components/Banner'
import Mapa from '../components/ImgMapa'

import Layout from '../components/Layout'
import FaixaReta from '../components/FaixaReta'
import Seo from '../components/seo'
import * as Styled from '../styles/pages/contatoStyle'

import Depoimento from '../components/Depoimento'
import TituloSeparador from '../components/TituloSeparador'
import Seta from '../components/Seta'
import Handle from '../components/Handle'



const IndexPage = () => (
  <Layout>
    <span id="home"></span>
    <Seo 
      title="Luiz Felipe Baggio"
      description="Bem-vindo"
    />
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="row mt-3">
      <div className="col-lg-6">
        <Banner />                     
      </div>
      <div className="col-lg-6 py-4 bg-light d-flex justify-content-center align-items-center">
        <div className="container">
          <h1 className="text-luiz text-center mb-5 text-break">Luiz Felipe Baggio - Hipnoterapeuta</h1>
          <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5516982436477&amp;text=" className="text-center text-baggio" >
            <u> 
              <h2> 
                Clique aqui e descubra o que a hipnose pode fazer por você.
              </h2> 
            </u> 
          </a>
          <br />
          <h3 className="text-center text-baggio">Atendemos de Seg. a Sábado a partir das 08h</h3>
          <br/>
        </div>                    
      </div>
    </div>
    <br />

    <span id="sobre"></span>
    <br/>
    <br/>
    <br/>
    <FaixaReta corfundo="white">
      <div className="container px-0 py-0 text-baggio">
        <TituloSeparador 
          espacoTitulo=""
          espacoSubtitulo=""
          titulo="LUIZ FELIPE BAGGIO"
          titulo2=""  
          subTitulo="Sobre mim" 
        />
        <p className="fonttexto text-wrap px-4">
          Professor e Hipnólogo, certificado pela Omni Hypnosis, instituição reconhecida internacionalmente, conto com mais de 10 anos de experiência atuando como hipnoterapeuta, 
          e ajudando diversas pessoas a superar traumas, medos, ansiedade, etc. <br /> 
        </p>
        <p className="fonttexto text-center px-4 mt-3">
          Eu ajudo pessoas depressivas e ansiosas a conquistar o amor próprio, através da hipnose. 
        </p>
      </div>
    </FaixaReta>
    <br/>
    <br/>

    <a href="https://api.whatsapp.com/send?phone=5516982436477&text=" target="_blank" rel="noreferrer" className="text-white">
      <FaixaReta corfundo="luiz">
        <div className="container">
          <div className="row">
            <p className="text-white col-lg-12 col-md-12 d-flex justify-content-center align-items-center">
              <h2 className="">
                <Handle />
                <u>
                  Clique aqui 
                </u> 
                &nbsp;e agende uma avaliação. 
              </h2>
            </p>
          </div>
        </div>
      </FaixaReta>
    </a>

    <FaixaReta corfundo="light">
      <div className="container px-0 py-0 text-baggio ">
        <TituloSeparador 
          espacoTitulo="px-5"
          espacoSubtitulo=""
          titulo="A HIPNOSE PODE "
          titulo2="TE AJUDAR"  
          subTitulo="Se você sofre de:" 
        />
        <div className="row">
          <div className="col-lg-6 col-md-6 paddingEsquerdo">
            <h4>
              <Seta color="#009888" />
              Medos
            </h4>  
          </div>
          <div className="col-lg-6 col-md-6 paddingEsquerdo">
            <h4>
              <Seta color="#009888" />
              Depressão
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 paddingEsquerdo">
            <h4>
              <Seta color="#009888" />
              Síndrome do Pânico
            </h4>
          </div>
          <div className="col-lg-6 col-md-6 paddingEsquerdo">
            <h4>
              <Seta color="#009888" />
              Tabagismo
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 paddingEsquerdo">
            <h4>
              <Seta color="#009888" />
              Alcoolismo
            </h4>
          </div>
          <div className="col-lg-6 col-md-6 paddingEsquerdo">
            <h4>
              <Seta color="#009888" />
              Transtorno Obsessivo Compulsivo (TOC)
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 paddingEsquerdo">
            <h4>
              <Seta color="#009888" />
              Traumas
            </h4>
          </div>
          <div className="col-lg-6 col-md-6 paddingEsquerdo">
            <h4>
              <Seta color="#009888" />
              entre outros problemas emocionais
            </h4>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center px-5 mt-5">
          <h2 className="">
            Descubra o que a hipnose pode fazer <span className="text-luiz">por você</span>.
          </h2>
        </div>
      </div>
    </FaixaReta>
    <span id="depoimentos"></span>
    <br/>
    <br/>
    <br/>
    <FaixaReta corfundo="white">
      <div className="container px-0 py-0 text-baggio">
        <TituloSeparador 
          espacoTitulo=""
          espacoSubtitulo="pl-5"
          titulo="DEPOIMENTOS" 
          subTitulo="Confira algumas avaliações de nossos clientes" 
        />
        <div className="row">
          <Depoimento 
            display="d-none" 
            nome="Hipno R"
            texto="Fiz meu tratamento para depressão e, posso dizer, salvou minha vida. Fiquei encantado e por isso resolvi até aprender hipnose! O Luiz é um excelente profissional, diria o melhor da cidade. Recomendadíssimo!" 
          />
          <Depoimento 
            display="d-none" 
            nome="Matheus H"
            texto="Sensacional! Essa é a palavra que descreve esse profissional. Desde o primeiro contato você já percebe que ele está preocupado única e exclusivamente em resolver o seu problema e não com horário e tempo da sessão. " 
          />
          <Depoimento 
            display="d-none" 
            nome="Carla B"
            texto="Uma das terapias mais rápidas para terminar com a depressão, traumas e fobias. Recomendo!" 
          />
        </div>
      </div>
    </FaixaReta>
    <span id="contato"></span>
    <br/>
    <br/>
    <br/>
    <FaixaReta corfundo="light">
      <div className="container">
        <TituloSeparador 
          espacoTitulo="px-5"
          espacoSubtitulo=""
          titulo="CONTATO "
          titulo2=""  
          subTitulo="Fale comigo, seu problema tem solução!" 
        />
        <div className="row">
          <div className="col-12 py-2 mb-3">
            <a href="https://goo.gl/maps/nfqGC9db1Tps852y8" target="_blank" rel="noreferrer">
              <Mapa />
            </a>
          </div>
          <div className="col-md-6">
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="mb-3">
                <input name="name" type="text" className="form-control" id="InputNome" aria-describedby="emailHelp" placeholder="Nome"/>
              </div>
              <div className="mb-3">
                <input name="email" type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="E-mail"/>
              </div>
              <div className="mb-3">
                <textarea name="message" className="form-control" id="FormControlTextarea" rows="3" placeholder="Descrição"></textarea>
              </div>
              <button type="submit" className="btn btn-luiz mb-3">Enviar</button>
              <br/>
            </form>
          </div>
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">
                <Styled.EmailWrapper corhipnose /> E-mail@gmail.com
              </li>
              <li className="list-group-item">
                <Styled.PhoneWrapper corhipnose /> (16) 98243-6477 
              </li>
              <li className="list-group-item">
                <Styled.PlaceWrapper corhipnose /> Rua Jair Costa, 140 - Bonfim Paulista-SP
              </li>
            </ul>
          </div>
        </div>
      </div> 
    </FaixaReta>
    

    {/* <FaixaReta corfundo="luiz">
      <div className="container">
        <div className="text-white row d-flex justify-content-center align-items-center px-5">
            <h2 className="">ME ACOMPANHE NAS REDES SOCIAIS 2 </h2>
        </div>
        <div className='text-white row d-flex justify-content-center align-items-center'>
            <p className="fontsubtitulo">
              Toda semana um vídeo ou dica nova para você.
            </p>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          INSTAGRAM
          FACEBOOK
          YOUTUBE
        </div>
        
      </div>
    </FaixaReta> */}

    

  </Layout>
)

export default IndexPage
