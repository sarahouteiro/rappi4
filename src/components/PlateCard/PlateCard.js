import { Card, CardText, CardHeader, Num, Title, Description, CardBottom, Price, Delete } from './styled'
import PlateImage from '../../assets/images/plateimage.png'

const PlateCard = () => {
    return(
        <Card>
            <img src={PlateImage} alt='Foto do prato'/>
            <CardText>
                <CardHeader>
                    <Title>Stencil</Title>
                    <Num>1</Num>
                </CardHeader>
                <Description>Pão, carne, queijo, cebola roxa, tomate, alface e molho.</Description>
                <CardBottom>
                    <Price>R$46,00</Price>
                    <Delete>remover</Delete>
                </CardBottom>
            </CardText>
        </Card>
    )
}

export default PlateCard