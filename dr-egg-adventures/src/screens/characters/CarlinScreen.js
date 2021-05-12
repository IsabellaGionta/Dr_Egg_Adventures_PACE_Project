import React from 'react';
import Carlin from '../../images/characters/Carlin.png';
import Snake from '../../images/Snake.png';
import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';

import { useHistory } from "react-router-dom";

export const CarlinScreen = () => {
  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }


    return (
      <div className="Characters-Background-Container">
                <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>

          <img className="Blackboard" src={Blackboard} alt="Blackboard" />


          <img className="Individual-Character-Styling"src={Carlin} />

        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>

        <h1 className="Companions"> THE COMPANIONS: </h1>
        <h2 className="Individual-Character-Name"> CARLIN: CORNELIA'S MOUSE </h2>

        <div className="Companion-Description">
             <p> 
               GOAL: Help Cornelia
            </p>
            <p> 
              SPECIAL POWER: ‘Thought-wave’ clues to Cornelia
            </p>
        </div>

        
          
        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
export default CarlinScreen