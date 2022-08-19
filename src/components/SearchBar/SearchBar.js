import { InputContainer, Input } from './styled'
import SearchIcon from '../../assets/icons/searchicon.png'

const SearchBar = () => {
    return(
            <InputContainer>
                <img src={SearchIcon} alt='Procurar'/>
                <Input
                    placeholder={'Restaurante'}
                />
            </InputContainer>
    )
}

export default SearchBar