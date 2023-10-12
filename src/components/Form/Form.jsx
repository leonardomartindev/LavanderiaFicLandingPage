import { useState } from 'react'
import {Title} from './Form.style'
import {FormContainer, Label, Input, TextArea, Button, EmailContainer, NomeTelContainer, MensagemContainer, NomeContainer, TelContainer, Inputs, Line} from './FormContent.style'
import emailJs from '@emailjs/browser'

export default function Form() {
    
    
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    
    if(email === '' || nome === '' || message === '' || tel === ''){
        alert("Nenhum campo pode estar vázio!")
        return;
    }
    setEmail("");
    setNome("");
    setTel("");
    setMessage("");

    const templateParams ={
        from_name: nome,
        message: message,
        email: email,
        tel: tel
    }

    emailJs.send("service_ck2ijxa", "template_ao78ijo",templateParams, "5HpiXyEvO3kJDIycD")
    .then((response)=>{
        console.log("EMAIL ENVIADO", response.status, response.text)
    }, (err) =>{
        console.log("ERRO: ", err)
    })

  }
  
  return (


    <div id='contato'>
        <Title>Nos conte mais sobre <br /> o que você precisa!</Title>
        <FormContainer onSubmit={sendEmail}>
            <Inputs>
                <EmailContainer>
                    <Label htmlFor="email">Email:</Label>
                    <Input 
                    value={email} 
                    type="email" 
                    id="email"
                    required
                    onChange={(e)=> setEmail(e.target.value)}/>
                </EmailContainer>
                <NomeTelContainer>
                    <NomeContainer>
                        <Label htmlFor="name">Nome:</Label>
                        <Input 
                        value={nome} 
                        type="text" 
                        required
                        id="name"
                        onChange={(e)=> setNome(e.target.value)}/>
                    </NomeContainer>
                    <TelContainer>
                        <Label htmlFor="telephone">Telefone:</Label>
                        <Input 
                        value={tel} 
                        required
                        type="tel" 
                        id="telephone"
                        onChange={(e)=> setTel(e.target.value)}/>
                    </TelContainer>
                </NomeTelContainer>
                <MensagemContainer>
                    <Label htmlFor='message'>Mensagem:</Label>
                    <TextArea 
                    value={message} 
                    id="message"
                    required
                    onChange={(e)=> setMessage(e.target.value)}></TextArea>
                </MensagemContainer>
                <Button type='submit'>enviar</Button>
            </Inputs>
        </FormContainer>
        <Line/>
    </div>
  )
}
