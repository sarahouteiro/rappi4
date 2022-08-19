import { CardContainer, Titulo, Infos, Tempo, Frete } from './styled'
import RestauranteCard from '../../assets/images/restaurantecard.jpg'

const RestaurantCard = () => {
    return(
        <CardContainer>
            <img src={RestauranteCard} alt='Foto do restaurante'/>
            <Titulo>Vinil Butantã</Titulo>
            <Infos>
                <Tempo>50 - 50 min</Tempo>
                <Frete>Frete R$6,00</Frete>
            </Infos>
        </CardContainer>
    )
}

export default RestaurantCard