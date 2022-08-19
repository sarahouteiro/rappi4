import { Container, FeedContainer } from './styled'
import SearchBar from '../../components/SearchBar/SearchBar'
import FoodTypeList from '../../components/FoodTypeList/FoodTypeList'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'

const FeedPage = () => {
    return (
      <Container>
        <Header/>
        <FeedContainer>
          <SearchBar/>
          <FoodTypeList/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
        </FeedContainer>
        <NavBar/>
      </Container>
    );
  }
  
  export default FeedPage