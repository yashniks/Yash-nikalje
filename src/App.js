import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Product } from "./pages/Product";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="gallery" element={<Gallery/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
