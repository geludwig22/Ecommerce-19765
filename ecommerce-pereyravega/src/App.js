import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //import de boostrap
import NavBar from './componets/NavBar';
import ItemListContainer from '../src/componets/itemlistContainer/ItemListContainer';
import ItemDetailContainer from '../src/componets/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from '../src/componets/Context/CartContext'


NavBar()



function App() {
  return (
    <CartContextProvider >
    <Router>
         <div className="App">
      <NavBar />
      <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/categoria/:id" element={<ItemListContainer />} />
          <Route exact path="/detail/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<CartContextProvider />} />
        </Routes>
        </div>
    </Router>
    </CartContextProvider>
  );
}



export default App;
