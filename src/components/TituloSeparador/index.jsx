import React from 'react'
import Linha from '../Linha'

const TituloSeparador = (props) => {
    let display = '';
    const titulo2 = props.titulo2 !== '' ? props.titulo2 : '';
    if(titulo2 === '') {
        display = 'd-none'
    } else {
        display = ''
    }
    return(
        <>
            <div className={`row d-flex justify-content-center align-items-center ${props.espacoTitulo}`}>
                <h2 className="">{props.titulo} <span className={`${display} text-luiz`}>{titulo2}</span></h2>
            </div>
            <div className='row d-flex justify-content-center align-items-center'>
                <p className={`fontsubtitulo ${props.espacoSubtitulo}`}>
                    {props.subTitulo}
                </p>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <Linha color="baggio" />
            </div>
        </>
    )
}

export default TituloSeparador

        