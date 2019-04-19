import React from 'react'
import './Buttons.scss'

const ArrowBtn = (props) => {
    return (
        <button className="ArrowBtn" disabled={props.locked} onClick={(e) => { props.click(props.direction, e) }} >
            <i className={"fas fa-caret-"+props.direction}></i>
        </button>
    )
}

export default ArrowBtn
