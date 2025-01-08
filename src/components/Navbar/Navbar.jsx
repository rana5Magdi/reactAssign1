import { Link, NavLink } from "react-router-dom";


export function Navbar()
{
    return <div>
        <nav className="navbar navbar-expand-lg py-4 fixed-top">
  <div className="container">
    <Link className="navbar-brand link fs-2 fw-bolder text-uppercase" to={'/StartFramework'}>Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <NavLink className="nav-link link fw-bold" aria-current="page" to={'/about'}>ABOUT</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className="nav-link link fw-bold" to={'/portfolio'}>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className="nav-link link fw-bold" to={'/contact'}>CONTACT</NavLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
        
    </div>
}