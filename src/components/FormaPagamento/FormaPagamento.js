import { Div, Lista, Pagamento, Button } from './styled'

const FormaPagamento = () => {
    return(
        <Div>
            <p>Forma de Pagamento</p>
            <Lista>
                <Pagamento>
                    <input type='radio' id='dinheiro' name='pagamento' value='Dinheiro' checked/>
                    <label htmlFor='dinheiro'> Dinheiro </label>
                </Pagamento>
                <Pagamento>
                    <input type='radio' id='credito' name='pagamento' value='credito'/>
                    <label htmlFor='credito'> Cartão de crédito </label>
                </Pagamento>
            </Lista>
                <Button>Confirmar</Button>
        </Div>
    )
}

export default FormaPagamento