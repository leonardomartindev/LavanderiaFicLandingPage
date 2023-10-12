import styled from 'styled-components'
import { theme } from '../../Theme'

export const FooterContainer = styled.footer`
    width: 100vw;
    height: 55vh;
    background-color: ${theme.colors.primary_color};
    margin-top: 16rem;
    display:flex;
    justify-content: space-between;
    padding-top: 4rem;
    color: white;
    height:auto;
    padding-bottom: 80px;

    @media(max-width: 976px){
        height:auto;
    }
    @media(max-width: 630px){
        flex-direction: column;
        align-items:left;
        padding-bottom: 100px;
        margin-top:8rem;
    }
` 

export const CefContainer = styled.div`
    display:flex;
    gap: 8rem;
    flex-wrap: wrap;
    @media(max-width: 980px){
        justify-content:center;
    }

    @media(max-width: 630px){
        flex-direction:column;
        gap: 7rem;
        margin-left: 2rem;
    }
`

export const FirstContainer = styled.div`
    display:flex;
    flex-direction:column;
    

   
`
export const Logo = styled.img`
    background-color: white;
    width: 20vw;
    @media(max-width: 630px){
        flex-direction: column;
        padding: 1rem;
        width: 55vw;
    }
    
`
export const Description = styled.p`
    font-size: 1.7rem;
    font-weight: bold;
    margin: 1rem;
    @media(max-width: 630px){
        font-size: 2rem;
        width: 340px;
        
    }
`
export const ContactContainer = styled.div``
export const AddressContainer = styled.div``
export const TimeContainer = styled.div`
    margin-right: 10rem;

    @media(max-width: 831px){
        margin-right:0;
        display:flex;
        flex-direction:column;
    }
`
export const Operation = styled.div`
    display:flex;
    flex-direction: column;
    gap: .2rem;
    font-size: 2rem;

    
`

export const OperationText = styled.p`


`
export const SocialContainer = styled.div`
    display:flex;
    gap: 12px;
    font-size: 4.5rem;
    margin: 2rem 1rem;


    @media(max-width: 630px){
        gap: 3rem;
    }

    
`
export const Title = styled.h2`
    font-size: 3.6rem;

    @media(max-width: 1080px){
        font-size: 4rem;
    }

    
`
export const Button = styled.button`
    padding: 10px 14px;
    font-size: 1.8rem;
    text-transform: uppercase;
    background-color: white;
    border: none;
    border-radius: 6px;
    margin: 1.4rem 0;
    cursor: pointer;
    transition: all 200ms ease;
    &:hover{
        filter: brightness(85%);
    }
`
export const Info = styled.p`
    font-size: 1.8rem;
    margin-top: 12px;
    @media(max-width: 1080px){
        font-size: 2rem;
    }

`
export const Icon = styled.i`
    cursor: pointer;

    @media(max-width: 630px){
        font-size: 7rem;
    }
`
