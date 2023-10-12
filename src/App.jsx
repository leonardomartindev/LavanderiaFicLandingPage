import NavBar from './components/Navbar/NavBar'
import Main from './components/Main/Main'
import { GlobalStyle } from './GlobalStyle'
import Servicos from './components/Servicos/Servicos'
import Form from './components/Form/Form'
import Location from './components/Location/Location'
import Footer from './components/Footer/Footer'
import Arrow from './components/Arrow/Arrow'
function App() {
 

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Main/>
      <Servicos/>
      <Form/>
      <Location/>
      <Footer/>
      <Arrow/>
    </>
  )
}

export default App
