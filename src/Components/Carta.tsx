import { useRef } from 'react';
import CostasCarta from '../Assets/Images/card-game-48980_960_720.png';

type CartaProps = {
    valor: number;
    imagem: any;
}

export default function Carta({valor, imagem}: CartaProps) {
    const costasCarta = CostasCarta;
    const carta = useRef<HTMLImageElement>(null);

    function onVirarCarta() {
        if (carta.current) {
            carta.current.src = imagem;
        }

        setTimeout(() => {
            if (carta.current) {
                carta.current.src = costasCarta;
            }
        }, 2000);
    }
    return (
        <>
            <img style={{cursor: 'pointer'}} ref={carta} width={50} src={CostasCarta} onClick={onVirarCarta} />
        </>
    );
}