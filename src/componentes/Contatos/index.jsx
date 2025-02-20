import { styled } from "styled-components"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";










const ContainerEstilizado = styled.div`

    display: flex;
    justify-content: space-around;
    height: 30px;
    background-color: ${props => props.theme.colors.verdeTema};
    color: white;
    align-items: center;
    z-index: 2;
    font-family: ${props => props.theme.font.fontePrincipal};

    @media (min-width: 768px){
        height: 45px;
        justify-content: center;
        gap: 30px;
        
    }
`

const ContatoEstilizado = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    size: 3ex;

    @media (min-width: 768px){
        font-size: larger;
        
    }

`

// const tela = useTamanhoTela()
// console.log(tela);




const Contatos = () => {

    const [tela, setTela] = useState(window.innerWidth);
    window.addEventListener('resize', () => { setTela(window.innerWidth) });
    console.log(tela);
    
    

    // const tela = useTamanhoTela();
    // console.log(tela);

    // window.addEventListener('resize', () => { const tela =  useTamanhoTela()})
    // console.log(tela);


    return (
        <ContainerEstilizado>
            <ContatoEstilizado>
                {tela < 768 ? <FaWhatsapp size={20} /> : <FaWhatsapp size={26} />}
                <p>(85) 97777-6666</p>
            </ContatoEstilizado>
            <ContatoEstilizado>
                {tela < 768 ? <FaInstagram size={20} /> : <FaInstagram size={26} />}
                <p>@Prime.Madeira</p>
            </ContatoEstilizado>
        </ContainerEstilizado>
    )
}



export default Contatos;