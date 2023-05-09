import React from "react"
import './SearchBar.css'

function SearchBar () {
    return(
        <form>
            <input type='search' name='search' placeholder='Search' />
            <input type='submit' value='Search' />
        </form>
    )
}

export default SearchBar;