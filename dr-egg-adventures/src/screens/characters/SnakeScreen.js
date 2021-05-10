import React from 'react'
import Snake from '../../images/Snake.png';
import SnakeImg from '../../images/characters/Snake.png';
import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';

import { useHistory } from "react-router-dom";

export const SnakeScreen = () => {
  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }


    return (
      <div className="Characters-Background-Container">
                <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>

          <img className="Blackboard" src={Blackboard} alt="Blackboard" />


          <img className="Individual-Character-Styling-Snake"src={SnakeImg} />

        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
        <h1 className="Companions"> THE NARRATOR: </h1>

        <h2 className="Individual-Character-Name"> THE SNAKE NARRATOR </h2>

        <div className="Character-Description">
             <p> 
                CHARACTERISTICS: The Snake narrator moves in 
                and out of the Laboratory’s interactive story-world,
                and acts as a pop-up guide and shape shifter. In
                this interactive story-world the witty Snake calls
                the viewer to action, suggesting how to use the
                Laboratory and game tools. In the plays and books,
                the Snake provocatively challenges readers to make
                ethical decisions and take responsibility for their
                creations. 
            </p>
            
            <p> 
              VIRTUES: Ethical. Curious. Witty.
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
export default SnakeScreen