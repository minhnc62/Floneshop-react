import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ProductDetail from './pages/ProductDetail';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore}from 'redux-persist'
import Wishlish from './pages/Wishlish';
import Checkout from './pages/Checkout';
let persistor = persistStore(store)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<App/>}>
        <Route index element={<Home/>}></Route>
        <Route path='shop' element={<Shop/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='wishlish' element={<Wishlish/>}></Route>
        <Route path='checkout' element={<Checkout/>}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        
      </Route>
    </Routes>
    </BrowserRouter>
    </PersistGate>
    
    </Provider>
    
    
  </React.StrictMode>,
  document.getElementById('root')
)