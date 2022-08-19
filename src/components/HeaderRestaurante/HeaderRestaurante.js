import { Div, Back } from './styled'
import BackIcon from '../../assets/icons/backicon.png'

const HeaderRestaurante = () => {
    return(
        <Div>
            <Back src={BackIcon} alt='voltar'/>
            <p>Restaurante</p>
        </Div>
    )
}

export default HeaderRestaurante