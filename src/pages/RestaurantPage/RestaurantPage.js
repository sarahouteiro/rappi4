import HeaderRestaurante from "../../components/HeaderRestaurante/HeaderRestaurante"
import RestaurantTitle from "../../components/RestaurantTitle/RestaurantTitle"
import { RestaurantBody } from './styled'

const RestaurantPage = () => {
    return (
      <>
        <HeaderRestaurante/>
        <RestaurantBody>
          <RestaurantTitle/>
        </RestaurantBody>
      </>
    );
  }
  
  export default RestaurantPage