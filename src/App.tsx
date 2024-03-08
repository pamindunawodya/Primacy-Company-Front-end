import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './view/home';
import Aboutus from './view/aboutus';
import Offers from './view/offer';
import Products from './view/products';
import BusinessInsight from './view/businessInsight';
import Career from './view/career';
import Contact from './view/contact';
class App extends React.Component<any, any>{
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutus" element={<Aboutus/>}/>
            <Route path="/offers" element={<Offers/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/businessInsight" element={<BusinessInsight/>}/>
            <Route path="/career" element={<Career/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
