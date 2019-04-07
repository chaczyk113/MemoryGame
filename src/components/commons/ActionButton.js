import React from 'react';
import './Buttons.scss'

const actionButton = (props) => {

    let outputText = ()=>{
        if (!props.locked){
            return (
            <div className="ScrollableContent">
            <span>{props.children}</span>
            <span style={{fontSize:"16px"}}>{props.description}</span>
            </div>
            )
        }
        else {
            return (
            <div className="Locked">
                <i className="fas fa-lock"></i>
            </div>
            )
        }
    };

    return (
    <button className="ActionButton" disabled={props.locked} onClick={(e)=>{props.click(props.level, e)}} title={props.title}>
        {outputText()}
    </button>
    )
}

export default actionButton;
