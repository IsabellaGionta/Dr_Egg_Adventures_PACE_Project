import React from 'react'
import './Popup.css'

import close from '../images/close-popup.png';

function popup(props) {
    return (props.trigger) ? (
        <div className = "popup">
            <div className = "popup-inner">
                <img className = "close-btn" src = {close} onClick = {() => props.setTrigger(false)}/>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default popup
