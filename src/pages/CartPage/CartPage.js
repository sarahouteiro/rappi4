import { Container, CartContainer } from './styled'
import HeaderCarrinho from '../../components/HeaderCarrinho/HeaderCarinho'
import CartAdress from '../../components/CartAdress/CartAdress'
import RestaurantAdress from '../../components/RestaurantAdress/RestaurantAdress'
import PlateCard from '../../components/PlateCard/PlateCard'
import ShipTotal from '../../components/ShipTotal/ShipTotal'
import FormaPagamento from '../../components/FormaPagamento/FormaPagamento'
import NavBar from '../../components/NavBar/NavBar'


const CartPage = () => {
    return (
      <Container>
        <HeaderCarrinho/>
        <CartContainer>
          <CartAdress/>
          <RestaurantAdress/>
          <PlateCard/>
          <PlateCard/>
          <ShipTotal/>
          <FormaPagamento/>
        </CartContainer>
        <NavBar/>
      </Container>
    );
  }
  
  export default CartPage