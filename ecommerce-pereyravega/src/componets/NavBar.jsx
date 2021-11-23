import { CartWidget } from "./CartWidget/CartWidget"
import { Link } from "react-router-dom"


const NavBar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link className="navbar-brand ms-5 ms-md-0" to={'/'}>Navbar</Link>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className="navbar-brand ms-5 ms-md-0" to={'/'}>Home</Link>
        </li>
        <li class="nav-item">
        <Link className="navbar-brand ms-5 ms-md-0" to={'/categoria/Bebida'}>Bebidas</Link>
        </li>
        <li class="nav-item">
          <Link class="navbar-brand ms-5 ms-md-0" to={'/categoria/Comida'}>Comida</Link>
        </li>
        <li class="nav-item">
        <Link to='/cart'>
          <CartWidget />
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar