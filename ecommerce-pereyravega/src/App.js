import logo from './logo.svg';
import './App.css';
import NavBar from './componets/NavBar';


const style = {
  backgroundColor: 'grey',
  fontSize: '20px'
}

NavBar()



function App() {
  return (
    <div className="App" style= { style } onClick= ''>
      <h1> Clase 3 NavBar </h1>
      <NavBar/>
          
               
    </div>
  );
}

export default App;
