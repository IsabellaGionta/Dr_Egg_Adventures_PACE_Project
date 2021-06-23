import React from 'react'
import Popup from '../components/Popup';
import { useState } from 'react';

import bench from '../images/labbench.png';
import btnback from '../images/btn-Back.png';
import btnbackglow from '../images/btn-Back-hover.png';
import DrEgg from '../images/DrEgg-cut.png';
import flag from '../images/aboriginal-flag.png';
import flaghover from '../images/flag-glow.png';
import plank from '../images/plank.png';

import { useHistory } from "react-router-dom";

//Buttons
import weird from '../images/btn-weirdcreations.png';
import facts from '../images/btn-crazysciencefacts.png';
import fanfic from '../images/btn-fanfiction.png';
import inv from '../images/btn-inv.png';
import biogoo from '../images/btn-biogoo.png';

//Buttons Glow
import weirdglow from '../images/btn-wc-glow.png';
import factsglow from '../images/btn-facts-glow.png';
import fanficglow from '../images/btn-fanfic-glow.png';
import invglow from '../images/btn-inv-glow.png';
import biogooglow from '../images/btn-bio-glow.png';

//Tools
import goggles from '../images/Goggle.png';
import hoverboard from '../images/HoverBoard.png';
import teletube from '../images/Teletube.png';
import wcbox from '../images/weirdcreations-box.png';

import Snake from '../images/characters/Snake.png';
import ClosePop from "../images/close-popup.png"

export const Lab = () => {

    const history = useHistory();

    const homeNav = () => {
        history.push('/map');
    }

    const creationsNav = () => {
        history.push('/weirdcreations');
    }

    const factsNav = () => {
        history.push('/crazyfacts');
    }

    const fanficNav = () => {
        history.push('/fanfiction');
    }

    const invNav = () => {
        history.push('/game');
    }

    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className = "Lab-Background-Container">
            <img className="dregg" src={DrEgg} alt = "dr egg"/>
            <div className = "button-container">
            <img className="lab-button-inv" src={inv} alt = "inventory button" onClick = {invNav} onMouseOver = {e => e.currentTarget.src = invglow} onMouseOut={e => e.currentTarget.src = inv}/>
                <img className="lab-button-facts" src={facts} alt = "crazy facts button" onClick = {factsNav} onMouseOver = {e => e.currentTarget.src = factsglow} onMouseOut={e => e.currentTarget.src = facts}/>
                <img className="lab-button-wc" src={weird} alt = "weird creations button" onClick = {creationsNav} onMouseOver = {e => e.currentTarget.src = weirdglow} onMouseOut={e => e.currentTarget.src = weird}/>
                <img className="lab-button-fanfic" src={fanfic} alt = "fanfiction button" onClick = {fanficNav} onMouseOver = {e => e.currentTarget.src = fanficglow} onMouseOut={e => e.currentTarget.src = fanfic}/>
                <img className="lab-button-biogoo" src={biogoo} alt = "biogoo button" onMouseOver = {e => e.currentTarget.src = biogooglow} onMouseOut={e => e.currentTarget.src = biogoo}/> 
            </div>
            <img className = "bench" src = {bench} alt = "lab bench"/> 

            <div className = "plank-container">
                <img className = "plank" src = {plank} alt = "plank"/> 
                <p className = "plankname">DR EGG'S ADVENTURES LABORATORY</p>
            </div>

            <div className = "tool-container">
                <img className="tools" src={goggles} alt = "goggles"/>
                <img className="tools" src={hoverboard} alt = "hoverboard"/>
                <img className="tools" src={teletube} alt = "teletube"/>
            </div> 

            <img className = "wc-box" src = {wcbox} alt = "wc box"/> 
            <div className = "back-container"> 
                <img className = "Back-Button" 
                src = {btnback}
                onMouseOver = {e => e.currentTarget.src = btnbackglow}
                onMouseOut={e => e.currentTarget.src = btnback}
                alt = "home button" 
                onClick = {homeNav}/>  
            </div>

            <img className = "aboriginal-flag" 
            src = {flag} 
            onMouseOver = {e => e.currentTarget.src = flaghover}
            onMouseOut={e => e.currentTarget.src = flag}
            alt = "aboriginal flag"
            onClick = {() => setButtonPopup(true)}/>

            <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
                <div>
                    <p className = "popup-text">Dr Egg Adventures would like to acknowledge the Traditional Custodians of the land on, and pay our respects to their Elders past and present.
                    We extend that respect to Aboriginal and Torres Strait Islander peoples on this portal today.</p>  
                </div>
            </Popup>

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
                <input className = "InputStyle" type="checkbox" id = "Q3"/>
                <input className = "InputStyle" type="checkbox" id = "Q4"/>
                  <div className = "chatCont" id = "QCont">
                    <label htmlFor = "Q1">
                      <div className = "chatLabQ1"/>
                    </label>
                    <label htmlFor = "Q2">
                      <div className = "chatLabQ2"/>
                    </label>
                    <label htmlFor = "Q3">
                      <div className = "chatLabQ3"/>
                    </label>
                    <label htmlFor = "Q4">
                      <div className = "chatLabQ4"/>
                    </label>
                  </div>
                  <div className = "chatCont" id = "A1">
                    <div className = "chatLabA1"/>
                    <div className = "chatATxt">
                    human do you like puzzles? sksksk... I SURE DO! Click on the “INVENTORY PUZZLE GAME” button and you can download our puzzle game! It will definitely challenge your BRAINsk...                    
                    </div>                     
                    <label htmlFor = "Q1">
                      <div className = "chatBackBtn"/>
                    </label>
                  </div>
                  <div className = "chatCont" id = "A2">
                    <div className = "chatLabA2"/>
                    <div className = "chatATxt">
                    sksksksk... you humans know anything... Click the “FAN FICTION” button, and it will take you to a world of fan fiction written by other kids your age! You can even post a fan fiction of your own! TRY NOW!                    
                    </div>                     
                    <label htmlFor = "Q2">
                      <div className = "chatBackBtn"/>
                    </label>
                  </div>
                  <div className = "chatCont" id = "A3">
                    <div className = "chatLabA3"/>
                    <div className = "chatATxt">
                    FACTS! This button takesk you to a WORLD of intersting CRAZY facts! sksksk.... you human will be sure to find something you don’t know on this page! DONT BELIEVE ME? I DARE YOU!                    
                    </div>                     
                    <label htmlFor = "Q3">
                      <div className = "chatBackBtn"/>
                    </label>
                  </div>
                  <div className = "chatCont" id = "A4">
                    <div className = "chatLabA4"/>
                    <div className = "chatATxt">
                    WEIRD. ALL THINGS WEIRD. Click on the “WEIRD CREATIONS” button to find anything NOT normal! sksksk... It will interest you human! You can even MAKE your own creations and see what other ‘TERRIFYING’ humans can make!                    
                    </div>                     
                    <label htmlFor = "Q4">
                      <div className = "chatBackBtn"/>
                    </label>
                  </div>
                </div>
              </div>
        </div>
    )
}
export default Lab

