import { useState } from "react";

export const useTamanhoTela = () => {
    const [tela, setTela] = useState(window.innerWidth);

    function  medeTela(){
        window.addEventListener('resize', () => {setTela(window.innerWidth)});
    }

    return tela;
}