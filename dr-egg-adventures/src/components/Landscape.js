import React from 'react'
import './Popup.css'

import close from '../images/close-popup.png';

function Landscape(props) {
    return (props.trigger) ? (
        <div className = "Landscape-popup">
            <div className = "Landscape-popup-inner">
                <img className = "Landscape-close-btn" src = {close} onClick = {() => props.setTrigger(false)}/>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Landscape