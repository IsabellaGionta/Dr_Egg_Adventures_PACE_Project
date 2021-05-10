import React from 'react';
import EggDrone from '../../images/characters/EggDrone - Copy.png';
import Snake from '../../images/Snake.png';
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
        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
        <h1 className="Companions"> THE COMPANIONS: </h1>
        <img className="Blackboard" src={Blackboard} alt="Blackboard" />


        <img className="Individual-Character-Styling"src={EggDrone} />

        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>

        <h2 className="Individual-Character-Name"> FLYING EGG SPY: DR EGG'S COMPANION </h2>

        <div className="Companion-Description">
          <p> 
              GOAL: Help Dr Egg find clues
          </p>
          <p> 
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