import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Profile from "./components/Profile";
import Salary from "./components/Salary";
import cards from "./data";

function App() {
  const profileNew = cards.map((item) => {
    return <Profile key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Events />
      <div className="profile-section">{profileNew}</div>
      <Salary />
    </div>
  );
}

export default App;
