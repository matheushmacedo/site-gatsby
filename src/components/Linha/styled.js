import styled from 'styled-components'
import Icons from '../Icons'

export const LinhaIcon = styled(Icons.LineHorizontal1)`
    height: 35px;
    width: 50px;    
    color: ${props => props.color ? props.color : '#000'};
`
