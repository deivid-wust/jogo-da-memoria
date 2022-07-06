import {} from '@mui/material'
import ContainerFlex from '../Components/ContainerFlex'
import Carta from '../Components/Carta';
import CartaTresCoracao from '../Assets/Images/images.png';

function Ranking() {
    return(
        <>
            <ContainerFlex>
                <h1>deu certo</h1>
                <Carta valor={10} imagem={CartaTresCoracao}/>
            </ContainerFlex>
        </>
    )
}

export default Ranking