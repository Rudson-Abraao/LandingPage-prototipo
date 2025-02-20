import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

// Componente BotaoWhatsapp
const FundoEstilizado = styled.div`
background-color: ${props => props.theme.colors.verdeTema};
border-radius: 100%;
height: 50px;
width: 50px;
display: flex;
align-items: center;
position: absolute;
bottom: 20px;
right: 20px;
justify-content: center;

:hover{
    cursor: pointer;
}

@media (min-width: 768px) {
    height: 75px;
    width: 75px;
    
}

`




const BotaoWhatsapp = ({AoClicado}) => {
    const [tela, setTela] = useState(window.innerWidth)
    window.addEventListener('resize', () => { setTela(window.innerWidth) })


    return (

        <FundoEstilizado onClick={AoClicado}>
            {/* <FaWhatsapp color="white"  size={75}/> */}
            {tela < 768 ? <FaWhatsapp size={50} color="white"/> : <FaWhatsapp size={75} color="white" />}
            
        </FundoEstilizado>



    )

}


export default BotaoWhatsapp;