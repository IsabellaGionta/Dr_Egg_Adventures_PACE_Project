import React from 'react';
import Pigeon from '../../images/characters/Pigeon.png';
import Snake from '../../images/characters/Snake.png';
import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';

import { useHistory } from "react-router-dom";

export const PigeonScreen = () => {
  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }


    return (
      <div className="Characters-Background-Container">

        <img className="Blackboard" src={Blackboard} alt="Blackboard" />


        <img className="Individual-Character-Styling-Pigeon characters"src={Pigeon} alt="Pigeon"/>

        <img className="Back-Button" src={Back} onClick={BackEventHandler} alt="Back"/>

        <h1 className="Character-Type"> THE COMPANIONS: </h1>
        <h2 className="Individual-Character-Name"> PUFF CHEST:  </h2> 
        <h2 className="Individual-Character-Slogan">  PIGEON AIR FORCE PILOT </h2>
        <div className="Companion-Description">
          <p> 
            GOAL: Help Cornelia liberate the animals
          </p>
          <p className="Powers"> 
            SPECIAL POWER: ‘Pigeon-Poop Pummelings’
          </p>
        </div>

        
          
        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
export default PigeonScreen