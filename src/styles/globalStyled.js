import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  h1 {
    color: #009888;
  }

  body {
    font-family: Arial;
  }

  .rodape {
    font-weight: 400;
    font-size: 18px;
  }


  .fontsubtitulo {
    font-size: 22px;
  } 

  .fonttexto {
    font-size: 20px;
  }

  .paddingEsquerdo {
    padding-left: 9% !important;
  }

`
export default GlobalStyle