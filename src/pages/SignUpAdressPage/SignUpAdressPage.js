import { Back, SignUpContainer } from "./styled"
import BackIcon from '../../assets/icons/backicon.png'
import AdressFormPage from "./AdressFormPage"

const SignUpAdressPage = () => {
    return (
      <>
        <Back src={BackIcon} alt='voltar'/>
        <SignUpContainer>
            <p>Meu Endereço</p>
            <AdressFormPage/>
        </SignUpContainer>
      </>
    );
  }
  
  export default SignUpAdressPage