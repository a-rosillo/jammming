import React from "react"

function Track (props) {
    return (
        <>
            <p key={'trackName-' + props.index}>{props.trackName}</p>
            <p key={'artist-' + props.index}>{props.artist}</p>
        </>
    )
}

export default Track