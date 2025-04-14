import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Landing from './pages/Landing';
import Cart from './pages/Cart';
import Product from './pages/Product';
import About from './pages/About'



const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product" element={<Product />} />
        <Route path ="/about" element= {<About/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;