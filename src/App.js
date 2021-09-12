import "./App.css"
import NavBar from "./components/Navbar/NavBar";
import Header from "./components/Header/Header";
import ItemListContainer from "./containers/ItemListContainer";




  
function App() {

 
  
  return (
    <div className="App">
      <Header name="Tienda" />
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
