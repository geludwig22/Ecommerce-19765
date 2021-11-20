import { BrowserRouter as Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //import de boostrap
import NavBar from './componets/NavBar';
import ItemListContainer from '../src/componets/itemlistContainer/ItemListContainer';
import ItemDetailContainer from '../src/componets/ItemDetailContainer/ItemDetailContainer';


const style = {
   fontSize: '20px'
}

NavBar()



function App() {
  return (
    <BrowserRouter>
         <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </div>
      </BrowserRouter>
  );
}



export default App;
