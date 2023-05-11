import React from "react"

function Track (props) {
    return (
        <>
            <p>{props.trackName}</p>
            <p>{props.artist}</p>
        </>
    )
}

export default Track