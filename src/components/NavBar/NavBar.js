import HomeIcon from '../../assets/icons/homepageicon.png'
import CartIcon from '../../assets/icons/carticon.png'
import AvatarIcon from '../../assets/icons/avataricon.png'
import { NavBarContainer } from './styled'

const NavBar = () => {
    return(
        <NavBarContainer>
            <img src={HomeIcon} alt='Home'/>
            <img src={CartIcon} alt='Carrinho'/>
            <img src={AvatarIcon} alt='Perfil'/>
        </NavBarContainer>
    )
}

export default NavBar