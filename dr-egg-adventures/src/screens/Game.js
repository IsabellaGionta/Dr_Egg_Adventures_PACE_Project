import React from 'react'
import { useHistory } from "react-router-dom";
import Popup from '../components/Popup';
import { useState } from 'react';
import ardash from '../images/ardash-face.png';
import vivi from '../images/vivi-face.png';
import google from '../images/google-play.png';
import apple from '../images/app-store.png';

export const Game = () => {

    const history = useHistory();

    const [buttonPopup, setButtonPopup] = useState(true);

    if (buttonPopup == false) {
        history.push('/map');
    }

    return (
        <div className = "Game-Background-Container">
            
            <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
                <div className = "game-container">
                    <h1 className = "game-text1">DR EGG ADVENTURES INTERACTIVE 
                    <br></br>
                    BOOK AND PUZZLE GAME</h1> 
                    <div className = "gamebtn">
                        <img className="game-button" src={google} alt = "google play"/>
                        <a className = "game-link" href="https://apps.apple.com/au/app/dr-egg-adventures-laboratory/id1372550003">
                            <img className="apple-button" src={apple} alt = "apple"/>
                        </a>
                    </div>
                    <p className= "game-text2">Click to download the app now!</p> 
                </div>
                <img className="ardash-face" src={ardash} alt = "ardash" />
                <img className="vivi-face" src={vivi} alt = "vivi"/>
            </Popup>
            

        </div>
    )
}
export default Game
