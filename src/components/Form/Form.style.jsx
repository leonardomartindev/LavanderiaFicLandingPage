import styled from 'styled-components'
import { theme } from '../../Theme'

export const Title = styled.h1`
    font-size: 6rem;
    text-align:center;
    color: ${theme.colors.text_color};
    margin-top: 6rem;
    margin-bottom: 6rem;

    @media(max-width: 700px) {
        font-size: 5rem;
    }
    @media(max-width: 580px) {
        font-size: 4.5rem;
    }
    @media(max-width: 500px) {
        width: auto;
        font-size: 3.5rem;
    }

`