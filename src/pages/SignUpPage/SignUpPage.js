import { Back, SignUpContainer } from './styled'
import Logo from '../../assets/images/logo.png'
import BackIcon from '../../assets/icons/backicon.png'
import SignUpFormPage from './SignUpFormPage'

const SignUpPage = () => {
    return (
        <>
            <Back src={BackIcon} alt='voltar'/>
            <SignUpContainer>
                <img src={Logo} alt='Logo'/>
                <p>Cadastrar</p>
                <SignUpFormPage/>
            </SignUpContainer>
      </>
    );
  }
  
  export default SignUpPage