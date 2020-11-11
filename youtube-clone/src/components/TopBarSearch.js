import React, { useState } from 'react';



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
    return (
        <div>
            <SearchForm onSubmit={handleSubmit}>
                <input
                    placeholder="Search"
                    name="search"
                    value={SearchTerm}
                    onChange={onInputChange}
                    onKeyPress={onKeyPress}
                />
            </SearchForm>
        </div>
    )
}

export default TopBarSearch
