import React, { useState } from 'react';
import { Search as SearchIcon } from '@material-ui/icons';

const SEARCH_BUTTON_EDGE = 60;

const searchFieldButtonStyle = {
    height: SEARCH_BUTTON_EDGE - 25, // reduces 2px because of top and bottom border
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

const searchFieldInputStyle = {
    height: SEARCH_BUTTON_EDGE - 25,
    width: SEARCH_BUTTON_EDGE + 10,
    outline: 'none',
    border: 'none',
    fontSize: 14,
    padding: 10,
    flex: 1,
    fontWeight: 100,
    color: '#5a5a5a',
}

function TopBarSearch({ onSubmit }) {

    const [SearchTerm, setSearchTerm] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        // formSubmit(SearchTerm);
        setSearchTerm("")
    }

    const onInputChange = (event) => setSearchTerm(event.target.value);

    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            onSubmit(SearchTerm);
        };
    }

   

    return (
        <div className='searchFieldStyle'>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Search"
                    name="search"
                    value={SearchTerm}
                    onChange={onInputChange}
                    onKeyPress={onKeyPress}
                    style={searchFieldInputStyle}
                />
                <button 
                className='' 
                type='button' 
                // onClick={onSearchClick}
                style={searchFieldButtonStyle}
                >
                    <SearchIcon />
                </button>
            </form>
            
        </div>
    )
}

export default TopBarSearch
