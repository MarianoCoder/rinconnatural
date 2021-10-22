import * as React from "react";
import Header from "../components/Header/Header";
import ItemListContainer from "../containers/ItemListContainer";
//import Categories from "../components/Categories/Categories";

const Home = () => {
   // const [selectedCategory, setSelectedCategory] = React.useState(null)
    return (
        <div>
           <Header />
           <ItemListContainer />
        </div>
    )
}

export default Home;
