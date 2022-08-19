import { Div, Frete, DivTotal, SubTotal, Valor } from './styled'

const ShipTotal = () => {
    return(
        <Div>
            <Frete>Frete R$6,00</Frete>
            <DivTotal>
                <SubTotal>SUBTOTAL</SubTotal>
                <Valor>R$67,00</Valor>
            </DivTotal>
        </Div>
    )
}

export default ShipTotal