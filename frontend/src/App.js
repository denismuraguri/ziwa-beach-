import React from 'react'
import RoomScreen from './screens/RoomScreen';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter, Route} from 'react-router-dom'
import CartScreen from './screens/CartScreen';
function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="/">
          Ziwa Beach
        </a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
    <main>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/room/:id" component={RoomScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
      
    </main>
    <footer className="row center">All right reserved</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
