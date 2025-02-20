
import BotaoWhatsapp from 'src/componentes/BotaoWhatsapp'
import Contatos from './componentes/Contatos'
import EstilosGlobais from './componentes/EstilizacaoGlobal'
import Fundo from './componentes/Fundo'
import Menu from 'src/componentes/Menu'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Cabecalho from './componentes/cabecaho'


function App() {

  // const [tela, setTela] = useState(window.innerWidth);
  // window.addEventListener('resize', setTela(window.innerWidth))
  // window.addEventListener('resize', console.log('tela mexida')
  // )

  // App.jsx
  const tema = {
    colors: {
      verdeTema: '#25d366'
    },
    font: {
      fontePrincipal: 'Fira Sans'
    }
  }


  return (
    <Fundo>
      <ThemeProvider theme={tema}>
        <EstilosGlobais />
        <Contatos />
        <Cabecalho/>
        {/* <Menu/> */}

        <BotaoWhatsapp AoClicado={() => window.open('https://wa.me/5585977776666')}/>

      </ThemeProvider>
    </Fundo>
  )
}

export default App
