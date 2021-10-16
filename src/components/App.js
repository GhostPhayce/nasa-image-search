import React from "react";
import Search from "../components/Search";
import "../styles/App.css";

function App() {
  return (
    <div className="app">
      <img className="app-logo" alt="NASA logo" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" />
      <Search />
    </div>
  );
}

export default App;
