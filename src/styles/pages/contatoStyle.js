import styled, { css } from 'styled-components'
import Icons from '../../components/Icons'

export const EmailWrapper = styled(Icons.Email)`
    color: ${ props => props.color ? props.color : '#CCC' };
    width: ${ props => props.width ? props.width : '100px' };

    ${props => 
    props.corhipnose && 
    css`
        color: #009888;
        width: 35px;
    `}
`
export const PhoneWrapper = styled(Icons.Phone)`
    color: ${ props => props.color ? props.color : '#CCC' };
    width: ${ props => props.width ? props.width : '100px' };

    ${props => 
        props.corhipnose && 
        css`
            color: #009888;
            width: 35px;
    `}
`
export const PlaceWrapper = styled(Icons.Place)`
    color: ${ props => props.color ? props.color : '#CCC' };
    width: ${ props => props.width ? props.width : '100px' };

    ${props => 
        props.corhipnose && 
        css`
            color: #009888;
            width: 35px;
    `}

`
export const WhatsWrapper = styled(Icons.Whatsapp)`
    color: ${ props => props.color ? props.color : '#FFF' };
    width: ${ props => props.width ? props.width : '35px' };

    ${props => 
        props.corwhite && 
        css`
            color: #ffffff;
            width: 35px;
            margin-right: 10px;
    `}

`
export const CalendarWrapper = styled(Icons.Calendar)`
    color: ${ props => props.color ? props.color : '#FFF' };
    width: ${ props => props.width ? props.width : '35px' };

    ${props => 
        props.corwhite && 
        css`
            color: #ffffff;
            width: 35px;
            margin-right: 10px;
    `}

`
export const Phone2Wrapper = styled(Icons.Phone)`
    color: ${ props => props.color ? props.color : '#FFF' };
    width: ${ props => props.width ? props.width : '35px' };

    ${props => 
        props.corhipnose && 
        css`
            color: #ffffff;
            width: 35px;
            margin-right: 10px;
    `}
`
