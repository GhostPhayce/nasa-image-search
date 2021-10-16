import React from "react";
import Search from "../components/Search";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <img className="App__logo" alt="NASA logo" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" />
      <Search />
    </div>
  );
}

export default App;
