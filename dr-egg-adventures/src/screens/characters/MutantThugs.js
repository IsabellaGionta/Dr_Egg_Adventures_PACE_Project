import React from 'react'
import DrMoon from '../../images/characters/Dr-Moon-Highlight1.png';
import PetriDish from '../../images/PetriDish.png';
import Snake from '../../images/characters/Snake.png';
import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';

import Accordian from "../../components/Accordian"


import { useHistory } from "react-router-dom";

export const MutantThugs = () => {
  
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
        <h2 className="Individual-Character-Name"> MUTANT THUGS  </h2> 
        {/* <h2 className="Individual-Character-Slogan">  </h2> */}

        <div className="Character-Description">
             <p> 
              CHARACTERISTICS: These mutants started life in Dr Moles industrial laboratories. Created with a range of genetic characteristics,
              including pig snouts and animal paws, they have been classified as failed experiments and Biohazards. Dumped in slum-lanes, they form 
              'Gangs' with one main leader and several sidekicks. Surving by stealth. They bully and manipulate their quarry before kidnapping them
              to sell at the Mutant and Body Parts Market. 
            </p>
            
            <p> 
              VIRTUES: Resislient.
            </p>
            <p>
              TOOLS: None.
            </p>
            <p>
              POWERS: Tattoos which carry diseases.
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
export default MutantThugs