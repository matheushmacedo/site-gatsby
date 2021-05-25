import styled, { css } from 'styled-components'

export const CardV2Wrapper = styled.div`
    background: ${props => props.background ? props.background : '#F6F6F6'};

    ${props => 
      props.hipnose &&
      css`
        h5 {
            color: #CCC;
        }

        p {
            color: #CCC;
        }
        `
    }    
`