import React from "react"
import './SearchBar.css'

function SearchBar(props) {

    const handleChange = event => {
        props.setSearchParam(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.handleSearch()
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='search' name='search' placeholder='Search' aria-label="Search" onChange={handleChange}/>
            <input type='submit' value='Search' />
        </form>
    )
}

export default SearchBar;