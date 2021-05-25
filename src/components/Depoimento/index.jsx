import React from 'react'
import * as Styled from './styled'


const Depoimento = (props) => {
  
    const numero = props.display === 'd-block' ? 8 : 12;

  return(
    <>
    <div className="card py-2 card-group col-lg-4 col-md-4 border-0">
        <div className="card-body">
            <div className="row">
                <div className={`col-lg-4 col-md-12 text-center ${props.display}`}>

                <Styled.UserIcon />
                </div>
                <div className={`col-lg-${numero} col-md-12 text-center py-2`}>
                    {props.texto}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center py-2">
                    <Styled.StarIcon />
                    <Styled.StarIcon />
                    <Styled.StarIcon />
                    <Styled.StarIcon />
                    <Styled.StarIcon />
                </div>
                <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center text-luiz">
                    <p className="">
                        <strong>
                            {props.nome}
                        </strong>
                    </p>   
                </div>
            </div>
        </div>
    </div>
    </>

  )
}

export default Depoimento