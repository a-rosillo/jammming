import React from "react"

function SearchBar () {
    return(
        <form>
            <input type='search' name='search' />
            <input type='submit' value='Search' />
        </form>
    )
}

export default SearchBar;