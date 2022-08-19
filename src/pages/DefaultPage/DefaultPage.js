import { Container, Logo } from './styled'
import LogoDefault from '../../assets/images/logodefault.png'

const DefaultPage = () => {
    return (
      <>
        <Container>
          <Logo src={LogoDefault} alt='Logo'/>
        </Container>
      </>
    );
  }
  
  export default DefaultPage