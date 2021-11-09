import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //import de boostrap
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/itemlistContainer/ItemListContainer';

const style = {
   fontSize: '20px'
}

NavBar()



function App() {
  return (
    <div className="App" >
      <h1> Clase 6 </h1>
      <NavBar/>
      <ItemListContainer greetings="Hola soy prop" />               
    </div>
  );
}



export default App;
