import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p className="search-results__no-results">Sorry, there are no images that match that query</p>;
    }
    return (
        <>
        <div className="search-results__card">
          {results.map((image, index) => (
            <a href={image} target="_blank" rel="noreferrer" key={index}>
              <img
                key={image}
                className="search-results__card-image"
                src={image}
                alt={image.title}
              />
            </a>
          ))}
        </div>
      </>
    );
};

export default SearchResults;
