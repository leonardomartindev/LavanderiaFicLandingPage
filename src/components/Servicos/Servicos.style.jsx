import styled from 'styled-components'
import { theme } from '../../Theme'

export const ServicoContainer = styled.div`
    display: flex; 
    justify-content: center;
    flex-direction:column;
    align-items:center;
`

export const Title = styled.h1`
    font-size: 5rem;
    color: ${theme.colors.text_color};
    margin-top: 5rem;
    margin-bottom: 8rem;

    @media(max-width: 500px) {
        font-size: 4rem;
    }
`

export const Card = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    text-align:center;
    gap:2rem;

    @media(max-width: 740px) {
        gap: 1rem;
    }
`

export const Img = styled.div`
    width: 10vw;
    height: 10vw;
    background-color: #ccc;
    border-radius: 50%;
    font-size: 10rem;
    display:flex;
    align-items:center;
    justify-content:center;
    color:${theme.colors.primary_color};

    @media(max-width: 740px) {
        width: 150px;
        height: 150px;
    }
    `
export const Subtitle = styled.h2`
    font-size: 3rem;
`
export const Description = styled.p`
    font-size: 1.8rem;
    width: 25vw;
    @media(max-width: 900px) {
        width: 40vw;
    }
    @media(max-width: 740px) {
        font-size: 2rem;
        width: 50vw;
    }
    @media(max-width: 500px) {
        width: auto;
        margin: 0 2rem;
    }

    
`

export const Cards = styled.div`
    display:flex;
    gap: 8rem;
    color:${theme.colors.text_color};
    justify-content:center;
    flex-wrap: wrap;
`

export const Line = styled.div`
    width:100%;
    height: 1.5px;
    background-color:${theme.colors.text_color};
    margin-top: 12rem;
`