import './App.css';
import Home from './components/Home';
import Product from './components/mobile';
import About from "./components/About"
import {Route ,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import { Laptop } from './components/laptop';
import Ipad from './components/Ipad';
import MobileDisplay from './components/mobileDisplay';
import LapDisplay from './components/lapDisplay';
import IpadDisplay from './components/IpadDisplay';
import Cart from "./components/cart";
import Checkout from './components/Checkout';
import { Payment } from './components/Payment';
import Login from './buttons/Login';
import SignUp from './buttons/SignUp';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';


function App() {
  const [log,setLog] = useState(false);
  useEffect(() => {
    var a = JSON.parse(localStorage.getItem("app")) || null;
    if(a){
      setLog(true)
    }
  })
  return (
    <>
    <Navbar setLog={setLog} log={log}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login setLog={setLog}/>} />
      <Route path='/Signup' element={<SignUp/>} />
      <Route path='/About' element={<About/>} />

      <Route path='/mobiles' element={<Product/>} />
      <Route path='/mobiles/:id' element={<MobileDisplay/>} />

      <Route path='/laptops' element={<Laptop/>} />
      <Route path='/laptops/:id' element={<LapDisplay/>} />

      <Route path='/Ipads' element={<Ipad/>} />
      <Route path='/Ipads/:id' element={<IpadDisplay/>} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/Payment" element={<Payment/>} />

    </Routes> 
    <Footer></Footer>
    </>
  );
}

export default App;
