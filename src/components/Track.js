import React from "react"

function Track (props) {
    return (
        <>
            <p>{props.trackName}</p>
            <p>{props.artist}</p>
            <p>{props.album}</p>
            <button onClick={props.onClickButton} id={props.id} >{props.buttonText}</button>
        </>
    )
}

export default Track