import React, { useState } from 'react';
import { Search as SearchIcon } from '@material-ui/icons';
import './topbar.scss';

const SEARCH_BUTTON_EDGE = 60;

const searchFieldButtonStyle = {
    height: SEARCH_BUTTON_EDGE - 25, // reduces 2px because of top and bottom border
    width: 75,
    outline: 'none',
    backgroundColor: '#f8f8f8',
    cursor: 'pointer',
    padding: 5,
    boxSizing: 'border-box',
    appearance: 'none',
    border: 'none',
    borderLeft: '1px #ddd solid',
  };

const searchFieldInputStyle = {
    height: SEARCH_BUTTON_EDGE - 25,
    width: 'SEARCH_BUTTON_EDGE + 280',
    outline: 'none',
    border: '1px solid black',
    fontSize: 14,
    padding: 10,
    flex: 1,
    fontWeight: 100,
    color: '#5a5a5a',
}

const icons = {
        height: '24px',
        width: '24px',
}

function TopSearchBar({ onSubmit }) {

    const [SearchTerm, setSearchTerm] = useState("");

    function handleSubmit(event) {
        const { formSubmit } = this.props;
        formSubmit(SearchTerm);
        setSearchTerm("")
        event.preventDefault();
    }

    const onInputChange = (event) => setSearchTerm(event.target.value);

    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            onSubmit(SearchTerm);
        };
    }

   

    return (
        <div className='searchFieldStyle'>
            <form onSubmit={handleSubmit} className='search_form'>
                <input
                    placeholder="Search"
                    name="search"
                    value={SearchTerm}
                    onChange={onInputChange}
                    onKeyPress={onKeyPress}
                    style={searchFieldInputStyle}
                />
                <button 
                className='search_button' 
                type='button' 
                // onClick={onSearchClick}
                style={searchFieldButtonStyle}
                >
                    <SearchIcon style={icons} />
                </button>
            </form>
            
        </div>
    )
}

export default TopSearchBar
