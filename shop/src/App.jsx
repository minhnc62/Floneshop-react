import { NavLink ,Link} from 'react-router-dom'
import './App.css'
import logo from "./logo-black.png";
import {Outlet} from "react-router-dom"

function App() {
  

  return (
    <div className="App">
     <header className="header">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <nav className="nav">
          <NavLink to={"/"}>Home page</NavLink>
          <NavLink to={"/about"}>gioi thieu page</NavLink>
          <NavLink to={"/shop"}> cửa hàng page</NavLink>
          <NavLink to={"/contact"}>lien he page</NavLink>
 
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

    </div>
  )
}

export default App
