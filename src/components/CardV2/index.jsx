import React from 'react'
import * as Styled from './styled'
import Images from '../Images'

const CardV2 = (props) => {
    return (
        <Styled.CardV2Wrapper 
            className="card" 
            background={props.backgroundCard}
            hipnose={props.styleDefault}
            >
            <Images name={props.nameImage}/>
            <div className="card-body">
                <h5 className="card-title text-luiz">{props.titleCard}</h5>
                <p className="card-text">{props.textCard}</p>
                <a href="/visitar" className={`btn btn-${props.colorButton}`}>Visitar</a>
            </div>
        </Styled.CardV2Wrapper>
    )
}

export default CardV2