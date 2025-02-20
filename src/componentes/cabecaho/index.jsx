import styled from "styled-components"

const ContainerEstilizado = styled.div`
width: 100%;
/* margin-top: 10px; */
display: flex;
height: 60px;
align-items: center;
/* background-color: #818181; */
`


const Logo = styled.img`
height: 40px;
right: 10px;
position: absolute;

` 

const MenuBtn = styled.img`
position: absolute;
left: 10px;

`




const Cabecalho = () => {
    return(
        <ContainerEstilizado>
            <Logo src="src/assets/logo.png"/>
            <MenuBtn src="src/assets/botaoMenu.svg"/>

        </ContainerEstilizado>
    )
}

export default Cabecalho