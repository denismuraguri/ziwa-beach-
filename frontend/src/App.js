import React from 'react'
import RoomScreen from './screens/RoomScreen';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import BookingAddressScreen from './screens/BookingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
//import BookingOrderScreen from './screens/PlaceOrderScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
function App() {
/**
 * const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    if(!userInfo){
        props.history.push('/signin')
    }
 */
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch()
  
  const signoutHandler = () => {
    dispatch(signout());
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
        <Link className="brand" to="/">
          Ziwa Beach
        </Link>
      </div>
      <div>
        <Link to="/cart">Cart
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
        </Link>
        {
          userInfo ? (
            <div className="dropdown">
              <Link to="#">
                {userInfo.name} <i className="fa fa-caret-down"></i> {" "}</Link>
              <ul className="dropdown-content">
              <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
              </ul>
            </div>
          ) : (
            <Link to="/signin">Sign In</Link>
          )
        }
        
      </div>
    </header>
    <main>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/room/:id" component={RoomScreen}></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/booking" component={BookingAddressScreen}></Route>
      <Route path="/payment" component={PaymentMethodScreen}></Route>
      <Route path="/placebooking"component={PlaceOrderScreen}></Route>
      <Route path="/order/:id" component={OrderScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
    </main>
    <footer className="row center">All right reserved</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
