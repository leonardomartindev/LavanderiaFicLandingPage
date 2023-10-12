import styled from 'styled-components'
import { theme } from '../../Theme'

export const NavBarContainer = styled.div`
    color: ${theme.colors.primary_color};
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    background-color: white;
    border-bottom: 4px solid ${theme.colors.primary_color};
    text-align:center;
    align-items: center;
    position:fixed;
    @media(max-width: 1000px) {
        font-size: 1.5rem;
      }

    a{
        text-decoration:none;
        color:inherit;
    }
`;


export const PhoneContainer = styled.div`
    display: flex;
    align-items:center;
    gap: 13px;
`

export const LinksNav = styled.a`
    color: ${theme.colors.text_color};
    font-weight: bold;
    text-decoration: none;
    font-size: 2.5rem;
    transition: color ease 200ms;

    @media(max-width: 1000px) {
        font-size: 2rem;
      }

    @media(max-width: 800px) {
        display:none;
      }

    &:hover{
        color:${theme.colors.primary_color};
    }

`

export const Logo = styled.img`
    margin: 1rem;
    width: 22rem;

    @media(max-width: 500px) {
        width: 16rem;
      }
`

export const PhoneIcon = styled.img`
    width: 30px;
    border-right: 2px solid #D9D9D9;
    padding-right: 15px;
`

export const Phone = styled.p`
    color: ${theme.colors.primary_color};
    font-weight:bold;
`
export const LocationContainer = styled.div`
    cursor: pointer;
    display:flex;
    align-items:center;
    gap: 12px;
    background-color: ${theme.colors.primary_color};
    padding-top: 3rem;
    padding-bottom: 2rem;
    padding-right: 4rem;
    padding-left: 3rem;
`

export const PhoneLocationContainer = styled.div`
    display:flex;
    cursor: pointer;
    gap: 3rem;
    @media(max-width: 800px) {
        display:none;
      }
`

export const LocationIcon = styled.img`
`
export const Location = styled.p`
    color: ${theme.colors.secondary_color};
    font-weight: bold;
    font-size: 2.2rem
`
export const MenuBurguer = styled.i`
    font-size: 5rem;
    margin-right: 3rem;
    align-items:center;
    display:flex;
    @media(min-width: 800px) {
        display:none;
      }
`

export const CloseMenu = styled.i`
    position: absolute;
    right: 8px;
    top: 16px;
    z-index: 1;
    color: white;
    font-size: 5rem;
    display: ${props => (props.showMenu ? 'none' : 'block')};
`

export const NavMobile = styled.div`
    background-color: ${theme.colors.primary_color};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0; 
    width: 60vw;
    transform: translate(${props => (props.showMenu ? '0' : '70vw')});
    color:white;
    display:flex;
    flex-direction:column;
    gap: 3rem;
    padding-top: 8rem;
    transition: transform ease 300ms;
    

    
`


export const LinkMobile = styled.div`
    display:flex;
    align-items: center;
    width: fit-content;
    @media(max-width: 500px) {
        font-size: .8rem;
      }
`

export const LinksIcon = styled.i`
    font-size: 3rem;
    margin-right:20px;
    margin-left: 20px;
`

export const Line = styled.div`
    width:100%;
    height: 3px;
    background-color:#7CBBE4;
`