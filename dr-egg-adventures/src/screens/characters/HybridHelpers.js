import React from 'react'
import DrMoon from '../../images/characters/Dr-Moon-Highlight1.png';
import PetriDish from '../../images/PetriDish.png';
import Snake from '../../images/characters/Snake.png';
import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';

import { useHistory } from "react-router-dom";

import Accordian from "../../components/Accordian"


export const HybridHelpers = () => {
  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }


    return (
      <div className="Characters-Background-Container">

          <img className="Blackboard" src={Blackboard} alt="Blackboard" />

          <div className="Accordians">
            <Accordian className="characteristics" title="CHARACTERISTICS" content="  {CONTENT NEEDS TO BE ADDED} " />
            <Accordian className="virtues" title="VIRTUES" content=" {CONTENT NEEDS TO BE ADDED}" />
            <Accordian title=" TOOLS " content=" {CONTENT NEEDS TO BE ADDED}" />
            <Accordian title="  WORLD " content=" {CONTENT NEEDS TO BE ADDED}" />
          </div> 


          {/* <img className="Individual-Character-Styling-Inventors"src={} /> */}
          {/* <img className="Character-Tool Petridish"src={} /> */}


        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
        <h1 className="Character-Type"> THE BADDIES: </h1>
        <h2 className="Individual-Character-Name"> DR MOLE's HYBRID HELPERS </h2> 
        {/* <h2 className="Individual-Character-Slogan">  </h2> */}

        <div className="Character-Description">
             <p> 
              CHARACTERISTICS: In Dr Mole's totalitarian empire, these strange looking furry creatures are hybrid experiments, 
              with animal charcateristics ranging from possums to fruit-bats. Their yellow hairy ears, shaped like corn cobs, 
              are actually radio transmitters. They're ruthless in the pursuit of Dr Mole's enemies and frequently take orders 
              from Dr Mole himself. The Hybrid Heapers wear a glowing yellow uniform with a SEEDCORP logo.
            </p>
            
            <p> 
              VIRTUES: Persistant.
            </p>
            <p>
              TOOLS: Corn ears with radio transmitters. Van with radio transmitters.
            </p>
            <p>
              POWERS: Spotted dog with genetically modified bark and teeth. 
            </p>
            <p>
              WORLD: Throughout the SEEDCORD empire. 
            </p>

        </div>

        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
export default HybridHelpers