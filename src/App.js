import "./App.css"
import NavBar from "./components/Navbar/NavBar";
import Header from "./components/Header/Header";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemCount from "./components/ItemCount/ItemCount";




  
function App() {

 
  
  return (
    <div className="App">
      <Header name="Tienda"/>
      <NavBar />
      <ItemDetailContainer />
      <ItemCount stock="5" initial="1"/>
    </div>
  );
}

export default App;
