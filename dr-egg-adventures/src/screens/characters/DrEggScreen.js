import React from 'react'
import DrEgg from '../../images/DrEgg-Cropped.png';
import Snake from '../../images/Snake.png';
import Back from '../../images/btn-Back.png';
import EggDrone from '../../images/characters/EggDrone.png';
import Blackboard from '../../images/Blackboard.png';

import { useHistory } from "react-router-dom";

export const DrEggScreen = () => {
  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }


    return (
      <div className="Characters-Background-Container">
                <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>

          <img className="Blackboard" src={Blackboard} alt="Blackboard" />


          <img className="Individual-Character-Styling"src={DrEgg} />
          <img className="Character-Pet"src={EggDrone} />



        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>

        <h1 className="Companions"> THE SCIENTISTS: </h1>

        <h2 className="Individual-Character-Name"> DR ERIC EGG: THE INGENIOUS INVENTOR </h2>

        <div className="Character-Description">
             <p> 
              CHARACTERISTICS: Dr Egg creates small inventions
              to cure diseases, as well as inventing biological
              spying devices to track activities in Professor Mole’s
              totalitarian empire. He is the twin brother of Dr
              Moon. Dr Egg acts as Professor Mole’s nemesis.
             </p>
            
            <p> 
             VIRTUES: Altruistic. Inventive.
            </p>
            <p>
              TOOLS: Flying Egg Spy
            </p>
            <p>
             WORLD: Egg Laboratories
            </p>

        </div>

        
          
        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
export default DrEggScreen