import * as React from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Categories from "./components/Categories/Categories";



function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
      
      <Route exact path="/" component={Home} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/productos/:id" component={ProductDetail} />
      <Route exact path="/categorias/" component={Categories} />
      <Route path="*" component={NotFound} />
      </Switch>
      <footer>Footer</footer>
    </BrowserRouter>
  );
};

export default App;
