import * as React from "react";
import Header from "../components/Header/Header";
//import ItemDetailContainer from "../containers/ItemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer";
import Categories from "../components/Categories/Categories";

const Home = () => {
    return (
        <div>
           <h1>Home</h1>
           <Header name="Tienda"/>
           <Categories />
           <ItemListContainer />
        </div>
    )
}

export default Home;