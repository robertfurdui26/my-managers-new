import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./register.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
