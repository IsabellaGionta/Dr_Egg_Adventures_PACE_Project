import {React, useState} from 'react'
import DrMoon from '../../images/characters/Dr-Moon-Highlight1.png';
import PetriDish from '../../images/PetriDish.png';
import Snake from '../../images/characters/Snake.png';
import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';

import LandscapePopup from '../../components/Landscape.js';


import Accordian from "../../components/Accordian"

import { useHistory } from "react-router-dom";

export const DrMoonScreen = () => {
  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
  }
  const [modalState2, setModalState2] = useState(true);



    return (
      <div className="Characters-Background-Container">

          <img className="Blackboard" src={Blackboard} alt="Blackboard" />
          <div className="Accordians">
            <Accordian className="characteristics" title="CHARACTERISTICS" content="The twin sister of Dr Egg. She
              graduated University at the same time as the
              Doctor and also Professor Magnus Mole. She has
              worked alongside Dr Egg at EGG LABORATORIES
              creating giant corn, square tomatoes and
              incubating all sorts of eggs and inventions. She
              dresses in a white laboratory coat, its pockets
              stuffed with laboratory implements and balls of
              wool. She keeps her bun on her head with knitting
              needles which protrude in all directions.  " />
            <Accordian className="virtues" title="VIRTUES" content="Industrious. Inventive. Unflappable." />
            <Accordian title=" TOOLS " content="Knitting needles. Petri dishes. Bicycle generator." />
            <Accordian title="  WORLD " content="Egg Laboratories" />
          </div>


          <img className="Individual-Character-Styling-Inventors"src={DrMoon} />
          {/* <img className="Character-Tool Petridish"src={PetriDish} /> */}


        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
        <h1 className="Character-Type"> THE SCIENTISTS: </h1>
        <h2 className="Individual-Character-Name"> DR CECILIA MOON:  </h2> 
        <h2 className="Individual-Character-Slogan"> THE DNA KNITTER </h2>

        <div className="Character-Description">
             <p> 
              CHARACTERISTICS:The twin sister of Dr Egg. She
              graduated University at the same time as the
              Doctor and also Professor Magnus Mole. She has
              worked alongside Dr Egg at EGG LABORATORIES
              creating giant corn, square tomatoes and
              incubating all sorts of eggs and inventions. She
              dresses in a white laboratory coat, its pockets
              stuffed with laboratory implements and balls of
              wool. She keeps her bun on her head with knitting
              needles which protrude in all directions. 
            </p>
            
            <p> 
              VIRTUES: Industrious. Inventive. Unflappable.
            </p>
            <p>
              TOOLS: Knitting needles. Petri dishes. Bicycle generator.
            </p>
            <p>
              WORLD: Egg Laboratories
            </p>

        </div>

        <LandscapePopup trigger={modalState2} setTrigger = {setModalState2}>
          <div className = "popup-background">
            <p className="Landscape-text"> For a better viewing experience, turn device to Landscape view. </p>
          </div>
        </LandscapePopup>

        
          
        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
export default DrMoonScreen