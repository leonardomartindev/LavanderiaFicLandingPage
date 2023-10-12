import { Iframe, IframeContainer, Title } from "./Location.style";

export default function Location() {
  return (
    <div id="location">
        <IframeContainer>
            <Title>Onde estamos?</Title>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0752900170273!2d-46.65381282481841!3d-23.56573927879681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1697113698598!5m2!1spt-BR!2sbr" width="1000" height="600" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>
        </IframeContainer>
    </div>
  )
}
