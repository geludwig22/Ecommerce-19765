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
        <Link className="navbar-brand ms-5 ms-md-0" to={'/home'}>Home</Link>
        </li>
        <li class="nav-item">
        <Link className="navbar-brand ms-5 ms-md-0" to={'/producto'}>Productos</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
        <li class="nav-item">
          <CartWidget />
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar