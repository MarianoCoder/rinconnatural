import * as React from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import ItemListContainer from "./containers/ItemListContainer";
import Cart from "./pages/Cart";
import Login from "./components/Login/login";
import Frutos from "./pages/Frutos";
import Reposteria from "./pages/Reposteria";
import SinTacc from "./pages/SinTacc"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Login />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/reposteria" component={Reposteria} />
        <Route exact path="/frutos" component={Frutos} />
        <Route exact path="/sinTacc" component={SinTacc} />
        <Route exact path="/productos/:id" component={ProductDetail} />
        <Route exact path="/category/:category">
          {" "}
          <ItemListContainer />{" "}
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
