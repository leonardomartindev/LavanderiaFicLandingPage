import styled from 'styled-components'
import { theme } from '../../Theme'

export const FormContainer = styled.form`
    display:flex;
    align-items:center;
    flex-direction: column;
`
export const Label = styled.label`
    margin: 8px 0;    
    font-size: 2.8rem;
    color: #707070;
    text-transform: uppercase;

`
export const Input = styled.input`
    height: 4rem;
    outline:none;
    border: 2px solid black;
    border-radius: 14px;
    font-size: 2rem;
    padding: 10px;
`
export const TextArea = styled.textarea`
    height: 12rem;
    outline:none;
    resize: none;
    border: 2px solid black;
    border-radius: 14px;
    font-size: 2rem;
    padding: 10px;
`
export const Button = styled.button`
    margin-top: 2rem;
    font-size: 2rem;
    padding: 1rem 3rem;
    text-transform: uppercase;
    background-color: black;
    color: white;
    border-radius: 40px;
    border:none;
    display:flex;
    align-items:center;
    font-weight:bold;
    cursor:pointer;

    &:hover{
        color: ${theme.colors.primary_color};
    }
`

export const EmailContainer = styled.div`
    display:flex;
    flex-direction: column;
`
export const NomeTelContainer = styled.div`
    display: flex;
    gap: 2rem;

    @media(max-width: 900px) {
        flex-direction: column;
      }
`
export const MensagemContainer = styled.div`
    display:flex;
    flex-direction: column;
`

export const NomeContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;

    @media(max-width: 900px) {
        width: 100%;
    }
`

export const TelContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;

    @media(max-width: 900px) {
        width: 100%;
    }
`

export const Inputs = styled.div`
    width: 60vw;

    @media(max-width: 700px){
        width: 80vw;
    }

  
`

export const Line = styled.div`
    width:100%;
    height: 1.5px;
    background-color:${theme.colors.text_color};
    margin-top:8rem;
`