import React from "react"

function Track (props) {
    return (
        <>
            <p>{props.trackName}</p>
            <p>{props.artist}</p>
            <button onClick={props.onClickButton} id={props.id} >{props.buttonText}</button>
        </>
    )
}

export default Track