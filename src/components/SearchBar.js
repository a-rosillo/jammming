import React from "react"
import styles from "./SearchBar.module.css"

function SearchBar(props) {

    const handleChange = event => {
        props.setSearchParam(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.handleSearch()
    }

    return(
        <form className="search-form" onSubmit={handleSubmit}>
            <input className={styles.input} type='search' name='search' placeholder='Search' aria-label="Search" onChange={handleChange}/>
            <input className={styles.submit} type='submit' value='Search' />
        </form>
    )
}

export default SearchBar;