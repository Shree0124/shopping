import React from "react";
import Navbar from "./Components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Admin from "./Components/Admin";
import Register from "./Components/Register";
import Edit from "./Components/Edit";
import Cart from "./Components/Cart";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
