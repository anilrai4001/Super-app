import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Register from "./pages/register/Register";
import SelectCategory from "./pages/select-category/SelectCategory";
import Home from "./pages/home/Home"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" Component={Register}/>
        <Route path="/select-category" Component={SelectCategory}/>
        <Route path="/home" Component={Home}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
