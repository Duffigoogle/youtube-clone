import React, { useState } from 'react';

const SEARCH_BUTTON_EDGE = 35;

const searchFieldButtonStyle = {
    height: SEARCH_BUTTON_EDGE - 2, // reduces 2px because of top and bottom border
    width: SEARCH_BUTTON_EDGE - 2,
    outline: 'none',
    backgroundColor: 'white',
    cursor: 'pointer',
    padding: 5,
    boxSizing: 'border-box',
    appearance: 'none',
    border: 'none',
    borderLeft: '1px #ddd solid',
  };

function TopBarSearch({ onSubmit }) {

    const [SearchTerm, setSearchTerm] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        formSubmit(SearchTerm);
        setSearchTerm("")
    }

    const onInputChange = (event) => setSearchTerm(event.target.value);

    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            onSubmit(SearchTerm);
        };
    }

    const onSearchClick
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Search"
                    name="search"
                    value={SearchTerm}
                    onChange={onInputChange}
                    onKeyPress={onKeyPress}
                />
            </form>
            <button 
                className='' 
                type='button' 
                onClick={onSearchClick}
                style={searchFieldButtonStyle}
            >
                <SearchIcon />
            </button>
        </div>
    )
}

export default TopBarSearch
