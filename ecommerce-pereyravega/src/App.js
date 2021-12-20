import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componets/NavBar';
import './App.css';
import ItemListContainer from './componets/itemlistContainer/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './componets/Cart/Cart';
import {CartContextProvider} from './componets/Context/CartContext'
import Footer from "./componets/Footer/Footer";




function App() {
  return (
    <div className="App">
    <CartContextProvider>
    <BrowserRouter>
     
       <NavBar />
       <Switch>
 
        <Route exact path='/'> 
        <ItemListContainer saludo= {"Bienvenido"}/></Route> 
        <Route exact path='/categoria/:categoryID'> 
        <ItemListContainer saludo= {"Nuestros Productos"}/></Route> 
        
       <Route exact path='/detail/:detailID' component ={ ItemDetailContainer}></Route>
       <Route exact path='/Cart' component ={Cart}></Route>
      </Switch>
      <Footer />
   
    </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;


