import "./App.css"
import NavBar from "./components/Navbar/NavBar";
import Header from "./components/Header/Header";
import ItemListContainer from "./containers/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";




  
function App() {

 
  
  return (
    <div className="App">
      <Header name="Tienda" />
      <NavBar />
      <ItemListContainer />
      <ItemCount stock="5" initial="0"/>
    </div>
  );
}

export default App;
