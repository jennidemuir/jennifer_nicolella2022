import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/index";
import ContactPage from './Pages/ContactPage.js'


function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
