import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/Search.css";

const Search = ({ setSearchResults }) => {
    const [value, setValue] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImages(value));
      };

    return (
        <>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    className="search-form__input"
                    type="text"
                    onChange={(event) => setValue(event.target.value)}
                />
                <button 
                    className="search-form__button"
                    type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </>
    );
};

export default Search;
