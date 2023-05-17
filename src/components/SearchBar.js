import React from "react"
import './SearchBar.css'

function SearchBar( {handleSubmit} ) {
    return(
        <form onSubmit={handleSubmit}>
            <input type='search' name='search' placeholder='Search' aria-label="Search" />
            <input type='submit' value='Search' />
        </form>
    )
}

export default SearchBar;