
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthContext';
export default function Navbar() {

  const {state, dispatch} = useContext(AuthContext)
  const {isAuthenticated} = state
  // console.log(dispatch)
 
 

  const handleLogout = ()=>{
    dispatch({type:"LOGOUT"})
    alert("logged out")
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <Link to="/" className="navbar-brand">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link active">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link active">Contact</Link>
        </li>
        
        {/* <li className="nav-item dropdown">
          <Link to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex">
        {!isAuthenticated
        ?        <Link to="/authentication/login" className="btn btn-primary text-white">Login</Link>

      :<>
              <Link to="/dashboard" className="btn btn-primary btn-sm text-white me-2">Dashboard</Link>
              <button className='btn btn-danger btn-sm' onClick={handleLogout}>Logout</button>

      </>
      }
      </form>
    </div>
  </div>
</nav>
  )
}
