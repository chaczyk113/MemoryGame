import React from 'react';
import './ButtonGroup.scss'

const buttonGroup = (props) => {
    return (
        <div className="ButtonGroup">
            <h3>{props.header}</h3>
            <div className="Buttons-row">{props.children}</div>
        </div>
    )
}

export default buttonGroup