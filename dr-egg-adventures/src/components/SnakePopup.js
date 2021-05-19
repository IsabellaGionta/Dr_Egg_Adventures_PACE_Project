import React from 'react'
import './Popup.css'

import close from '../images/close-popup.png';

function SnakePopup(props) {
    return (props.trigger) ? (
        <div className = "popup">
            <div className = "Snake-popup-inner">
                <img className = "Snake-close-btn" src = {close} onClick = {() => props.setTrigger(false)}/>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default SnakePopup