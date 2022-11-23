import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import Products from "./components/products";
import './assets/styles/App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App;


