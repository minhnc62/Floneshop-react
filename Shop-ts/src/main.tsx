import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Shop from "./pages/shop/Shop";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<App/>}>
        <Route index element={<Home/>}></Route>
        <Route path='shop' element={<Shop/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        
      </Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
)