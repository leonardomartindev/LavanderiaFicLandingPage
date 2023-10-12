import {AddressContainer, Button, CefContainer, ContactContainer, Description, FirstContainer, FooterContainer, Icon, Info, Logo, Operation, SocialContainer, TimeContainer, Title} from './Footer.style'
import LogoImg from '../../assets/logo.svg'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'

export default function Footer() {
  return (
    <FooterContainer>
        <FirstContainer>
            <Logo src={LogoImg}/>
            <Description>Diariamente cuidando com carinho <br /> de suas roupas</Description>
            <SocialContainer>
                <Icon><AiOutlineInstagram/></Icon>
                <Icon><a target='blank'><BsWhatsapp/></a></Icon>
            </SocialContainer>
        </FirstContainer>
        <CefContainer>
            <ContactContainer>
                <Title>Contato</Title>
                <Button><a href="tel:+5511999999999"> ligar agora</a></Button>
                <Info>(11) 99999-9999</Info>
            </ContactContainer>    
            <AddressContainer>
                <Title>Endereço</Title>
                <Button><a target='blank'>ver rotas</a> </Button>
                <Info>rua nome da rua, 00 <br /> bairo nome <br /> São Paulos, SP <br /> 05100-000 <br /> Brasil</Info>
            </AddressContainer>
            <TimeContainer>
                <Title>Funcionamento</Title>
                <Operation>
                    <Info><b>segunda: </b> 07:30 ~ 18:00</Info>
                    <Info><b>terça: </b> 07:30 ~ 18:00</Info>
                    <Info><b>quarta: </b> 07:30 ~ 18:00</Info>
                    <Info><b>quinta: </b> 07:30 ~ 18:00</Info>
                    <Info><b>sexta: </b> 07:30 ~ 18:00</Info>
                    <Info><b>sábado: </b> 07:30 ~ 18:00</Info>
                    <Info><b>domingo: </b> 08:00 ~ 14:00</Info>
                </Operation>
            </TimeContainer>
        </CefContainer>
    </FooterContainer>
    )
}
