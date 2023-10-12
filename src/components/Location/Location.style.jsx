import styled from 'styled-components'
import { theme } from '../../Theme'

export const Title = styled.h1`
    font-size: 6rem;
    text-align:center;
    color: ${theme.colors.text_color};
    margin-top: 7rem;

    @media(max-width: 470px){
        font-size:5rem;
    }
`

export const Iframe = styled.iframe`

    @media(max-width: 1060px){
        width: 80vw;    
    }
    @media(max-width: 500px) {
        height: 65vh;
    }
`

export const IframeContainer = styled.div`
    display: flex;
    align-items:center;
    gap: 2rem;
    flex-direction: column;

   
`