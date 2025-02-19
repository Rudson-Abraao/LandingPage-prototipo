import { styled } from "styled-components"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { useTamanhoTela } from "src/hooks/useTamanhoTela";







const ContainerEstilizado = styled.div`

    display: flex;
    justify-content: space-around;
    height: 30px;
    background-color: green;
    color: white;
    align-items: center;
    z-index: 2;

    @media (min-width: 768px){
        
        
    }
`

const ContatoEstilizado = styled.div`
display: flex;
align-items: center;
gap: 5px;
size: 3ex;

`

// const tela = useTamanhoTela()
// console.log(tela);




const Contatos = () => {

    const [tela, setTela] = useState(window.innerWidth);
    window.addEventListener('resize', () => { setTela(window.innerWidth) });
    console.log(tela);
    


    return (
        <ContainerEstilizado>
            <ContatoEstilizado>
              {/* {tela < 768 ? <FaWhatsapp size={20}/> : <FaWhatsapp size={32}/>} */}
              <FaWhatsapp />
                <p>(85) 97777-6666</p>
            </ContatoEstilizado>
            <ContatoEstilizado>
                <FaInstagram size={20} />
                <p>@Prime.Madeira</p>
            </ContatoEstilizado>
        </ContainerEstilizado>
    )
}



export default Contatos;