import {NavBarContainer, LinksNav, Logo, PhoneIcon, Phone, LocationIcon,Location,PhoneContainer, LocationContainer, PhoneLocationContainer, MenuBurguer, NavMobile,LinkMobile, LinksIcon, Line,CloseMenu} from './NavBar.style'
import mainLogo from '../../assets/logo.svg'
import phoneIcon from '../../assets/phoneNavBar.svg'
import location from '../../assets/location.svg'
import { AiOutlineMenu, AiFillHome, AiFillCloseCircle } from 'react-icons/ai'
import { MdDesignServices } from 'react-icons/md'
import { BsTelephoneInbound } from 'react-icons/bs'
import { useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'


function NavBar(){
    const [showMenu, setShowMenu] = useState(false);

    const handleBurgerClick = () => {
        setShowMenu(!showMenu);
    };

    return(
        <NavBarContainer>
            <Logo src={mainLogo} alt="" />
            <LinksNav href="#home">Home</LinksNav>        
            <LinksNav href="#servicos">Serviços</LinksNav>        
            <LinksNav href="#contato">Contato</LinksNav>  
            <PhoneLocationContainer>
                <PhoneContainer>
                    <PhoneIcon src={phoneIcon}/>
                    <Phone><a href="tel:+5511917323088"> 11 99999-9999</a></Phone>
                </PhoneContainer>
                <LocationContainer>
                    <LocationIcon src={location} alt="" />
                    <Location><a href="#location">Localização</a></Location>
                </LocationContainer>
            </PhoneLocationContainer>
            <MenuBurguer onClick={handleBurgerClick}><AiOutlineMenu/></MenuBurguer>
            <NavMobile showMenu={showMenu}>
                <CloseMenu onClick={handleBurgerClick}><AiFillCloseCircle/></CloseMenu>
                <Line/>
                <LinkMobile>
                    <LinksIcon><AiFillHome/></LinksIcon>
                    <h1><a href="#home">Home</a></h1>    
                </LinkMobile>
                <LinkMobile>
                    <LinksIcon><MdDesignServices/></LinksIcon>
                    <h1><a href="#servicos">Serviços</a></h1>    
                </LinkMobile>
                <LinkMobile>
                    <LinksIcon><a target='blank' href="https://api.whatsapp.com/send?phone=5511917323088&text=Ol%C3%A1,%20estou%20interessado%20nos%20servi%C3%A7os%20de%20lavanderia!"><BsWhatsapp/></a></LinksIcon>
                    <h1><a target='blank' href="https://api.whatsapp.com/send?phone=5511917323088&text=Ol%C3%A1,%20estou%20interessado%20nos%20servi%C3%A7os%20de%20lavanderia!">Whatsapp</a></h1>    
                </LinkMobile>
                <LinkMobile>
                    <LinksIcon><BsTelephoneInbound/></LinksIcon>
                    <h1><a href="tel:+5511915630912"> (11) 91563-0912</a></h1>    
                </LinkMobile>
                <Line/>
            </NavMobile>
        </NavBarContainer>
    );
}

export default NavBar