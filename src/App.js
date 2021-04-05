import {useState, useEffect, createContext, useReducer} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import './App.css'

function App() {
  const [cart, setCart] = useReducer(reducer, initialCart);
  return (
    <div className="App">
      <Router>
        <NavBar />
          <CartContext.Provider value={{cart: cart, setCart: setCart}}>
            <Switch>
              <Route path='/' exact><Home/></Route>
              <Route path='/Cart' exact><Cart/></Route>
              <Route path='/Login' exact><Login/></Route>
              <Route path='/productDetails/:product.name' exact><ProductDetails /></Route>
            </Switch>
          </CartContext.Provider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

const Footer = ()=> {
  return(
    <div className="footer"></div>
  )
}

export const CartContext = createContext();
const initialCart = [];
const reducer = (state, action)=>{
  switch(action){
    case 'update':
      return state;
  //   case 'decreament':
  //     return --state;
  //   case 'reset':
  //     return initialState
    default:
      return state;
  }
}
