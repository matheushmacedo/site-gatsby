import styled from 'styled-components'
import Icons from '../Icons'

export const HandleIcon = styled(Icons.CursorClick)`
    height: 35px;
    width: 50px;    
    color: ${props => props.color ? props.color : '#FFF'};
    margin-right: 15px;
`
