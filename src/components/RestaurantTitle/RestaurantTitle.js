import { CardContainer, Titulo, Infos, Tipo, Tempo, Frete } from './styled'
import RestauranteCard from '../../assets/images/restaurantecard.jpg'

const RestaurantTitle = () => {
    return(
        <CardContainer>
            <img src={RestauranteCard} alt='Foto do restaurante'/>
            <Titulo>Vinil Butantã</Titulo>
            <Infos>
                <Tipo>Burguer</Tipo>
                <Tempo>50 - 50 min</Tempo>
                <Frete>Frete R$6,00</Frete>
            </Infos>
        </CardContainer>
    )
}

export default RestaurantTitle