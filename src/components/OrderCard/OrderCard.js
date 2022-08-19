import { Card, TextBox, Titulo, Restaurante, SubTotal } from './styled'
import Clock from '../../assets/icons/clockicon.png'

const OrderCard = () => {
    return(
        <Card>
            <img src={Clock} alt='icone relógio'/>
            <TextBox>
                <Titulo>Pedido em andamento</Titulo>
                <Restaurante>Bullguer Vila Madalena</Restaurante>
                <SubTotal>SUBTOTAL R$67,00</SubTotal>
            </TextBox>
        </Card>
    )
}

export default OrderCard