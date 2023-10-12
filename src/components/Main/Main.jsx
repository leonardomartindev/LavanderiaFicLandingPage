import { Button, Title, ContainerMain, Image, Line } from './Main.style'
import mainImage from '../../assets/teste.svg'

export default function Main() {
  return (
    <ContainerMain id='home'>
        <div>
            <Title>Deixe suas roupas limpas <br /> e cheirosas conosco!</Title>
            <Button>Ver serviços</Button>
        </div>
        <div>
            <Image src={mainImage}/>
        </div>
        <Line/>
    </ContainerMain>
  )
}
