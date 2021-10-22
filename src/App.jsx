import * as React from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import ItemListContainer from "./containers/ItemListContainer";
import Cart from "./pages/Cart";
import Login from "./components/Login/login"
//import { CartProvider } from "./context/CartContext"
//import UserContext from "./context/UserContext"
import logo from "../src/components/Imagenes/logo.png"




function App() {
  return (
    <BrowserRouter>
    
      <NavBar />
      <Link to="/"><img  className="logo" src={logo} alt="logo"/></Link>
      <Login />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/productos/:id" component={ProductDetail} />
      <Route exact path="/category/:category"> <ItemListContainer />  </Route>
      <Route path="*" component={NotFound} />
      </Switch>
      <footer> Copyright 2021 Rincón Natural • All Rights Reserved</footer>
      
    </BrowserRouter>
  );
};

export default App;
