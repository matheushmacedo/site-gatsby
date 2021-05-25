import styled from 'styled-components'
import Icons from '../Icons'

export const SetaIcon = styled(Icons.RightArrow)`
    height: 15px;
    width: 25px;    
    color: ${props => props.color ? props.color : '#009888'};
`