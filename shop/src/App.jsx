
import './App.css'
import {Outlet} from "react-router-dom"
import Header from './component/header/Header';
function App() {
  

  return (
    <div className="App">
      <Header/>
      <main className="main">
        <Outlet />
      </main>

    </div>
  )
}

export default App
