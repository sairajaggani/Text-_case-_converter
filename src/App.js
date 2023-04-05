//import logo from './grow.jpg';

import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import Textfield from './component/Textfield';
import About from './component/About';
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom"

function App()  { 
 
  return ( <Router>
   <div> <Navbar title ="Text Converter"  />
      <div className='container'>
    
         <Routes>
          <Route exact path="/index.html" element={<Textfield head='to convert'/>}></Route>
         <Route exact path="/" element={<Textfield head='to convert'/>}></Route>
          <Route exact path="/about" element={<About/>}>
          
            
          </Route>
         </Routes>
         </div>
       </div></Router>
       
      /*<> <Navbar title ="Text Converter"  />
       <About/></>*/
  );
}



  
 
export default App;



