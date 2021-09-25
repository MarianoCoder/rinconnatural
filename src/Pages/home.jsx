import * as React from "react";
import Header from "../components/Header/Header";
//import ItemDetailContainer from "../containers/ItemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer";
//import Categories from "../components/Categories/Categories";

const Home = () => {
   // const [selectedCategory, setSelectedCategory] = React.useState(null)
    return (
        <div>
           <h1>Home</h1>
           <Header name="Tienda"/>
           <ItemListContainer />
        </div>
    )
}

export default Home;