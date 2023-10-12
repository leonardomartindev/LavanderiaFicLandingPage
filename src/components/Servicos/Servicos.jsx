import {Title, Card, ServicoContainer, Img, Subtitle, Description, Cards,Line} from './Servicos.style'
import { GiClothes } from 'react-icons/gi'
import { BiSolidWasher } from 'react-icons/bi'
import { TbTruckDelivery } from 'react-icons/tb'
export default function Servicos() {
  return (
    <ServicoContainer id='servicos'>
        <Title>Como trabalhamos?</Title>
        <Cards>
            <Card>
                <Img>
                <GiClothes/>
                </Img>
                <Subtitle>Coletamos suas roupas</Subtitle>
                <Description>Nós entendemos que sua vida é corrida e que você não tem tempo para se preocupar com a lavanderia. É por isso que oferecemos um serviço de coleta de roupas conveniente e confiável. Basta agendar um horário e nós iremos até sua casa ou escritório para coletar suas roupas sujas.</Description>
            </Card>
            <Card>
                <Img>
                <BiSolidWasher/>
                </Img>
                <Subtitle>Lavamos suas roupas</Subtitle>
                <Description>Nossa equipe de especialistas em lavanderia cuidará de suas roupas com o máximo cuidado e atenção aos detalhes. Utilizamos os melhores produtos e equipamentos para garantir que suas roupas fiquem limpas, frescas e prontas para serem usadas novamente.</Description>
            </Card>
            <Card>
                <Img>
                <TbTruckDelivery/>
                </Img>
                <Subtitle>Entregamos suas roupas</Subtitle>
                <Description>Depois que suas roupas estiverem limpas e passadas, nós as entregaremos de volta a você em um horário conveniente. Nossa entrega é rápida, confiável e gratuita. Você pode relaxar sabendo que suas roupas estão em boas mãos.</Description>
            </Card>
        </Cards>
        <Line/>
    </ServicoContainer>
  )
}
