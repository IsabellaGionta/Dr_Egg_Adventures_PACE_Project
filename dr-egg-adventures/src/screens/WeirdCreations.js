import React from 'react'
import btnback from '../images/btn-Back.png';
import btnbackglow from '../images/btn-Back-hover.png';
import blackboard from '../images/Blackboard.png';
import { useHistory } from "react-router-dom";
import icon from '../images/add-icon.png';
import fish from '../images/fish.png';
import iconglow from '../images/icon-glow.png';
import Snake from '../images/characters/Snake.png';
import ClosePop from "../images/close-popup.png"

export const WeirdCreations = () => {

    const history = useHistory();

    const homeNav = () => {
        history.push('/lab');
    }

    const submitNav = () => {
        history.push('/contact-form');
    }

    return (
        <div className = "Lab-Background-Container">
            <div className = "back-container"> 
                <img className = "Back-Button" 
                src = {btnback}
                onMouseOver = {e => e.currentTarget.src = btnbackglow}
                onMouseOut={e => e.currentTarget.src = btnback}
                alt = "home button" 
                onClick = {homeNav}/>  
            </div>
            <div className = "wc-blackboard-container">
                <h1 className = "wc-heading"> Weird Creations</h1>
                <img className = "submit-icon" src = {icon} onClick = {submitNav} onMouseOver = {e => e.currentTarget.src = iconglow} onMouseOut={e => e.currentTarget.src = icon}/>
                <hr className = "hr-line"></hr>
                <div className = "chat-container">
                    <div className = "chat-view">
                        <img className = "fish-icon" src = {fish} />
                        <p className = "wc-text"><b>@dregguser1</b>hahaha this is a cool glowship. #rebel</p>
                    </div>
                    <hr className = "hr-line2"></hr>
                    <div className = "chat-view">
                        <img className = "fish-icon" src = {fish} />
                        <p className = "wc-text"><b>@dregguser2</b>hehehe glow fish and chips for dinner! #dinner #awesome</p>
                    </div>
                    <hr className = "hr-line2"></hr>
                </div>
            </div>
            <img className = "Blackboard" src = {blackboard} alt = "blackboard" />

            <label htmlFor = "chat">
                  <div className="StoreSnake"/>  
              </label>
              <input className = "InputStyle" type="checkbox" id = "chat"/>
              <div className = "ChatBoxContainer">
                <label htmlFor = "chat">
                  <img className = "chatClose" src = {ClosePop} alt = "Close"/>
                </label>
                <div className = "chatHBox">
                  <img className="chatbotImg" src={Snake} alt="Snake"/>
                </div>
                <div className = "chatQBox">
                  What do you need help with?
                </div>
                <div className = "chatABox">
                <input className = "InputStyle" type="checkbox" id = "Q1"/>
                <input className = "InputStyle" type="checkbox" id = "Q2"/>
                  <div className = "chatCont" id = "QCont">
                    <label htmlFor = "Q1">
                      <div className = "chatWCQ1"/>
                    </label>
                    <label htmlFor = "Q2">
                      <div className = "chatWCQ2"/>
                    </label>
                  </div>
                  <div className = "chatCont" id = "A1">
                    <div className = "chatWCA1"/>
                    <div className = "chatATxt">
                    WEIRD CREATIONS! Human how can you not be excited! sksksk... Find out what your other friends say about their WEIRD CREATIONSksk.                    </div>                     
                    <label htmlFor = "Q1">
                      <div className = "chatBackBtn"/>
                    </label>
                  </div>
                  <div className = "chatCont" id = "A2">
                    <div className = "chatWCA2"/>
                    <div className = "chatATxt">
                    sksksk. This my friend lets you make you’re own post! something like Twitter ya kmow? Try clicking on the button to post your own weird creations to your friends!                    </div>                     
                    <label htmlFor = "Q2">
                      <div className = "chatBackBtn"/>
                    </label>
                  </div>
                </div>
              </div>
        </div>
    )
}
export default WeirdCreations