import React from 'react'
import './BookPopup.css'

import close from '../images/close-popup.png';

function bookpopup(props) {
    return (props.trigger) ? (
        <div className = "bookpopup">
            <div className = "bookpopup-inner">
                <img className = "close-btn" src = {close} onClick = {() => props.setTrigger(false)}/>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default bookpopup