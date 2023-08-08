import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container '>
  <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
    
    </div>
  );
}

export default App;
