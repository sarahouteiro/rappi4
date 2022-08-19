import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import SignUpAdressPage from '../pages/SignUpAdressPage/SignUpAdressPage'
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage'
import CartPage from '../pages/CartPage/CartPage'
import OrderGoingPage from '../pages/OrderGoingPage/OrderGoingPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<FeedPage/>}/>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='signup' element={<SignUpPage/>}/>
                <Route path='signup-adress' element={<SignUpAdressPage/>}/>
                <Route path='restaurant/:id' element={<RestaurantPage/>}/>
                <Route path='cart/:id' element={<CartPage/>}/>
                <Route path='ordergoing/:id' element={<OrderGoingPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router