import React from "react";
import {Routes, Route} from 'react-router-dom'
import { Users, Products, Home } from "./pages";
import { Header } from "./components";
import './app.css'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route />
        <Route />
      </Routes>
    </div>
  );
};

export default App;
