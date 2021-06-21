import { useState, React } from 'react'
import DrEgg from '../../images/characters/Dr-Egg-Highlight1.png';
import Snake from '../../images/characters/Snake.png';
import Back from '../../images/btn-Back.png';
import EggDrone from '../../images/characters/EggDrone.png';
import EggDroneFlipped from '../../images/characters/EggDrone-Flipped.png';
import Popup from '../../components/CharacterPopup.js';
import LandscapePopup from '../../components/Landscape.js';


import Accordian from "../../components/Accordian"



import Blackboard from '../../images/Blackboard.png';

import { useHistory } from "react-router-dom";

export const DrEggScreen = () => {

  const [modalState, setModalState] = useState(false);
  const [modalState1, setModalState1] = useState(true);
  const [modalState2, setModalState2] = useState(true);


  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }


    return (
      <div className="Characters-Background-Container">

          <img className="Blackboard" src={Blackboard} alt="Blackboard" />
          <div className="Accordians">
          <Accordian className="characteristics" title="CHARACTERISTICS" content="Dr Egg creates small inventions
              to cure diseases, as well as inventing biological
              spying devices to track activities in Professor Mole’s
              totalitarian empire. He is the twin brother of Dr
              Moon. Dr Egg acts as Professor Mole’s nemesis. " />
          <Accordian className="virtues" title="VIRTUES" content="Altruistic. Inventive." />
          <Accordian title=" TOOLS " content="Flying Egg Spy" />
          <Accordian title="  WORLD " content="Egg Laboratories" />
       </div>


          <img className="Individual-Character-Styling-Inventors"src={DrEgg} />


        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>

        <h1 className="Character-Type"> THE SCIENTISTS: </h1>

        <h2 className="Individual-Character-Name"> DR ERIC EGG:  </h2> 
        <h2 className="Individual-Character-Slogan"> THE INGENIOUS INVENTOR </h2>
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
        <img className="Character-Pet EggDroneHighlight"src={EggDrone} onClick={() => setModalState(true) } /> 


        <Popup trigger={modalState} setTrigger = {setModalState}>

          <div className = "popup-background">
            <h1 className="Character-Type-Pet"> THE COMPANIONS: </h1>

        <h2 className="Individual-Character-Name-Pet"> FLYING EGG SPY:  </h2> 
        <img className="Character-Pet-Popup"src={EggDroneFlipped}/> 

        <div className="Companion-Description">
          <p> 
              <b> GOAL: </b> Help Dr Egg find clues
          </p>
          <p className="Powers"> 
            <b> SPECIAL POWER: </b> Gathers data and clues through roving eye-camera for Dr Egg
          </p>
        </div>
          </div>
        </Popup>
        <LandscapePopup trigger={modalState2} setTrigger = {setModalState2}>
          <div className = "popup-background">
            <p className="Landscape-text"> For a better viewing experience, turn device to Landscape view. </p>
          </div>
        </LandscapePopup>
        
        {/* <Popup className="Landscape" trigger={modalState1} setTrigger = {setModalState1}>
          <div className = "popup-background">
            <p className="Landscape-text"> For a better viewing experience rotate your screen into landscape view.</p>
          </div>
        </Popup> */}
        
        
        

        
          
        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
export default DrEggScreen