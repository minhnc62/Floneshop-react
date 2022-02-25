
import './App.css'
import {Outlet} from "react-router-dom"
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import styled from 'styled-components';

const Main_App = styled.main`
  .container-fluid{
    padding:0;
  }
`
function App() {
  
  return (
    <Main_App className="App">
      <div className="container-fluid">
      <Header/>
      <main className="main">
        <Outlet />
      </main>
      <Footer/>
      </div>
      
    </Main_App>
  )
}

export default App
