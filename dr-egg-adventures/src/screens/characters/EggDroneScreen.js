import React from 'react';
import EggDrone from '../../images/characters/EggDrone.png';
import Snake from '../../images/characters/Snake.png';
import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';

import { useHistory } from "react-router-dom";

export const EggDroneScreen = () => {
  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }


    return (
      <div className="Characters-Background-Container">
        <h1 className="Character-Type"> THE COMPANIONS: </h1>
        <img className="Blackboard" src={Blackboard} alt="Blackboard" />


        <img className="Individual-Character-Styling-EggDrone"src={EggDrone} alt = "Egg Drone"/>

        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
        <h2 className="Individual-Character-Name"> FLYING EGG SPY:  </h2> 
        <h2 className="Individual-Character-Slogan">  DR EGG'S COMPANION </h2>
        <div className="Companion-Description">
          <p> 
              GOAL: Help Dr Egg find clues
          </p>
          <p className="Powers"> 
            SPECIAL POWER: Gathers data and clues through roving eye-camera for Dr Egg
          </p>
        </div>

        
          
        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
export default EggDroneScreen