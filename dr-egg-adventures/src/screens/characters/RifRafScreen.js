import React from 'react';
import RifRaf from '../../images/characters/RifRaf.png';
import Snake from '../../images/characters/Snake.png';
import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';

import { useHistory } from "react-router-dom";

export const RifRafScreen = () => {
  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }


    return (
      <div className="Characters-Background-Container">
          <img className="Blackboard" src={Blackboard} alt="Blackboard" />


          <img className="Individual-Character-Styling"src={RifRaf} alt = "RifRaf"/>

        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>

        <h1 className="Character-Type"> THE COMPANIONS: </h1>
        <h2 className="Individual-Character-Name">  RIF-RAF:  </h2> 
        <h2 className="Individual-Character-Slogan">  THE DOG </h2>

        <div className="Companion-Description">
          <p> 
            GOAL: Help liberate the birds and animals
          </p>
          <p className="Powers"> 
            SPECIAL POWER: Following a scent, seeing in the dark
          </p>
        </div>   
          
        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
export default RifRafScreen