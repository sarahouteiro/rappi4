import { LoginContainer } from './styled'
import Logo from '../../assets/images/logo.png'
import LoginFormPage from './LoginFormPage'

const LoginPage = () => {
    return (
      <LoginContainer>
        <img src={Logo} alt='Logo'/>
        <p>Entrar</p>
        <LoginFormPage/>
          <p>Não possui cadastro? Clique aqui.</p>
      </LoginContainer>
    );
  }
  
  export default LoginPage