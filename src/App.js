import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Register from "./pages/register/Register";
import SelectCategory from "./pages/select-category/SelectCategory";
import Home from "./pages/home/Home"
import Browse from "./pages/browse/Browse"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Register}/>
        <Route path="/select-category" Component={SelectCategory}/>
        <Route path="/home" Component={Home}/>
        <Route path="/browse" Component={Browse}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
