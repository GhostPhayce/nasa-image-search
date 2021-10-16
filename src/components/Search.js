import React, { useState } from "react";
import "../styles/Search.css";

const Search = () => {
    const [value, setValue] = useState();

    return (
        <>
            <form className="search-form">
                <input
                    className="search-form__input"
                    type="text"
                    onChange={(event) => setValue(event.target.value)}
                />
                <button 
                    type="submit"
                    className="search-form__button">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </>
    );
};

export default Search;
