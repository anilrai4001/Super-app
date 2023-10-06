import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Register from "./pages/register/Register";
import SelectCategory from "./pages/select-category/SelectCategory";
import Profile from "./pages/profile/Profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" Component={Register}/>
        <Route path="/select-category" Component={SelectCategory}/>
        <Route path="/profile" Component={Profile}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
