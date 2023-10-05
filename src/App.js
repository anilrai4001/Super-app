import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Register from "./components/Register";
import SelectCategory from "./components/SelectCategory"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" Component={Register}/>
        <Route path="/select-category" Component={SelectCategory}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
