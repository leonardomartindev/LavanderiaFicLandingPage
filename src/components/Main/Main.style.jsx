import styled from 'styled-components'
import { theme } from '../../Theme'


export const ContainerMain = styled.main`
    width: 100vw;
    display: flex;
    justify-content:space-around;
    flex-wrap:wrap;
    margin-top: 10rem;

    @media(max-width: 900px) {
        text-align:center;
    }
    `

export const Title = styled.h1`
    margin-top: 15rem;
    font-size: 5rem;

    @media(max-width: 630px) {
        font-size: 4.2rem;
    }
    @media(max-width: 500px) {
        font-size: 3rem;
        margin-top: 6rem;
    }
`

export const Button = styled.button`
    background-color: ${theme.colors.primary_color};
    color:white;
    border: none;
    border-radius: 50px;
    padding: 1.8rem 2.8rem;
    font-size: 2rem;
    font-weight: bold;
    transition: all 200ms ease;
    cursor: pointer;
    margin-top: 2rem;
    &:hover{
        filter: brightness(80%);
    }
`
export const Image = styled.img`
    width: 43vw;
    min-width: 400px;
    @media(max-width: 900px) {
        width: 80vw;
        margin-top: 5rem;
    }
`

export const Line = styled.div`
    width:75%;
    height: 1.5px;
    background-color:${theme.colors.text_color};
`
