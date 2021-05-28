import React from 'react'
import Vivi from '../../images/characters/Vivi-Highlight1.png';
import Snake from '../../images/characters/Snake.png';
import Goggle from '../../images/Goggle.png';
import Toolbelt from '../../images/Toolbelt.png';

import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';

import { useHistory } from "react-router-dom";

export const ViviScreen = () => {
  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }


    return (
      <div className="Characters-Background-Container">
          <img className="Blackboard" src={Blackboard} alt="Blackboard" />


          <img className="Individual-Character-Styling-Inventors-Vivi"src={Vivi} />
          <img className=" Character-Tool-Goggles"src={Goggle} />
          <img className="Character-Tool" src={Toolbelt} />



        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>

        <h1 className="Character-Type"> THE KID INVENTORS: </h1>

        <h2 className="Individual-Character-Name">  VIVI:   </h2> 
        <h2 className="Individual-Character-Slogan">  THE CURIOUS CAT INVENTOR </h2>
        <div className="Character-Description">
            <p> AGE: 13 </p>
             <p> 
              CHARACTERISTICS:Vivi is a curious inventor and a real risk-taker. 
              She’s resourceful and loves to ‘do-a-lot with not-a-lot’
              by recycling bits and pieces she finds in slum world. She’s
              passionate about finding practical solutions to fix problems
              like her father’s missing ear. She desperately hopes Dr Egg will
              help her to grow him a new one! 
            </p>
            
            <p> 
              VIRTUES: Curious. Empathetic. Brave.
            </p>
            <p>
              TOOLS: Home-made tool-kit with lots of gadgets. Dad’s old motorcycle helmet and goggles.
            </p>
            <p>
              POWERS: Through the goggles, she can see things that the other inventors can’t.
              With her fix it mentality, she can create inventions for any circumstance.
            </p>
            <p>
              WORLD: Slum-Lanes
            </p>

        </div>

        
          
        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
export default ViviScreen