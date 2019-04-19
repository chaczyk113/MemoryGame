import React from 'react';
import './ButtonGroup.scss'

const buttonGroup = (props) => {
    let classText = "ButtonGroup";
    if (props.scoreList) {
        classText+=" scoreList";
    }

    return (
        <div className={classText}>
            <h3>{props.header}</h3>
            <div className="Buttons-row">{props.children}</div>
        </div>
    )
}

export default buttonGroup