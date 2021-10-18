import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import "../styles/App.css";


function App() {
  const [searchResults, setSearchResults] = useState();

  return (
    <div className="App">
      <img
        className="App-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="NASA logo"
      />
      <Search setSearchResults={setSearchResults} />
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default App;
