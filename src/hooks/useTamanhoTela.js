import { useState } from "react";

export function useTamanhoTela(){
    const [tela, setTela] = useState(window.innerWidth);
    window.addEventListener('resize', () => {setTela(window.innerWidth)});

    return tela;
}