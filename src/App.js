import "./App.css"
import NavBar from "./components/Navbar/NavBar";
import Header from "./components/Header/Header";
import ItemListContainer from "./containers/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";




  
function App() {

 
  
  return (
    <div className="App">
      <Header name="Tienda"/>
      <NavBar />
      <ItemListContainer />
<<<<<<< HEAD
      <ItemCount stock="5" initial="1"/>
=======
      <ItemCount stock="5" initial="0"/>
>>>>>>> a1ca6d8d526c625383ea5a75d44a481071da0c38
    </div>
  );
}

export default App;
