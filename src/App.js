import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Profile from "./components/Profile";
import cards from "./data";

function App() {
  const cardsNew = cards.map((item) => {});
  return (
    <div className="App">
      <Navbar />
      <Events />
      <Profile />
    </div>
  );
}

export default App;
