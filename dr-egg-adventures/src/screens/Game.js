import React from 'react'
import Popup from '../components/Popup';
import { useState } from 'react';
import ardash from '../images/ardash-face.png';
import vivi from '../images/vivi-face.png';
import google from '../images/google-play.png';
import apple from '../images/app-store.png';
import close from '../images/close-popup.png';

export const Game = () => {

    const [buttonPopup1, setButtonPopup1] = useState(true);

    return (
        <div className = "Game-Background-Container">
            
            <div className = "game-container">

            <Popup trigger={buttonPopup1} setTrigger = {setButtonPopup1} getbk = {false}>
                    <div className = "game-text1-cont">
                    <h1 className = "game-text1">DR EGG ADVENTURES INTERACTIVE 
                    <br></br>
                    BOOK AND PUZZLE GAME</h1> 
                    </div>
                        <img className="game-button" src={google} alt = "google play"/>
                        <a className = "game-link" href="https://apps.apple.com/au/app/dr-egg-adventures-laboratory/id1372550003">
                            <img className="apple-button" src={apple} alt = "apple"/>
                        </a>
                      <p className= "game-text2">Click to download the app now!</p>

                <img className="ardash-face" src={ardash} alt = "ardash" />
                <img className="vivi-face" src={vivi} alt = "vivi"/>
                <img className = "close-btn" src = {close} alt = "close" onClick={()=>{ window.history.back()}}/>
            </Popup>
            </div>

            

        </div>
    )
}
export default Game
