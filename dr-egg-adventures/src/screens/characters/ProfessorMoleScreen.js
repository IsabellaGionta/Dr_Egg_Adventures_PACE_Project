import React from 'react'
import Snake from '../../images/characters/Snake.png';
import ProfMole from '../../images/characters/ProfMole-Highlight.PNG';
import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';

import { useHistory } from "react-router-dom";

export const ProfessorMoleScreen = () => {
  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }


    return (
      <div className="Characters-Background-Container">
          <img className="Blackboard" src={Blackboard} alt="Blackboard" />


          <img className="Individual-Character-Styling-ProfMole"src={ProfMole} />

        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
        <h1 className="Character-Type"> THE BADDIES: </h1>
        <h2 className="Individual-Character-Name">  PROFESSOR MOLE:  </h2> 
        <h2 className="Individual-Character-Slogan">  THE GREEDY CONTROLLER </h2>
        <div className="Character-Description">
             <p> 
             Professor Mole controls the world’s food supply
             from his vast totalitarian empire, SEEDCORP. His
             goal is to control all the seed in the world. Once
             a friend and colleague of Dr Egg and Dr Moon,
             his lust for fame and power overtook him, and he
             stole their breakthrough invention, the Square
             Tomato. Living on a diet of GM seeds, he has
             mutated into a part-mole, part-human creature
             emitting strange animal odours.
            </p>
            
            <p> 
              VIRTUES: None.
            </p>
            <p>
              TOOLS: Hybrid Helpers. GM Seeds.
            </p>
            <p>
              WORLD: SEEDCORP Empire.
            </p>

        </div>

        
          
        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
export default ProfessorMoleScreen