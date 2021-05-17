import { useState, React } from 'react'
import DrEgg from '../../images/characters/DrEgg-Cropped.png';
import Snake from '../../images/characters/Snake.png';
import Back from '../../images/btn-Back.png';
import EggDrone from '../../images/characters/EggDrone.png';
import EggDroneFlipped from '../../images/characters/EggDrone-Flipped.png';

import Blackboard from '../../images/Blackboard.png';

import { useHistory } from "react-router-dom";

export const DrEggScreen = () => {

  const [modalState, setModalState] = useState(false);

  const manageState= () => {
    setModalState(!modalState)
  }

  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }


    return (
      <div className="Characters-Background-Container">

          <img className="Blackboard" src={Blackboard} alt="Blackboard" />


          <img className="Individual-Character-Styling-Inventors"src={DrEgg} />
          {/* <img className="Character-Pet"src={EggDrone} /> */}



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

        <div className={`modalBackground modalShowing-${modalState}`}> 
        <h1 className="Character-Type-Pet"> THE COMPANIONS: </h1>

        <h2 className="Individual-Character-Name-Pet"> FLYING EGG SPY:  </h2> 
        {/* <h2 className="Individual-Character-Slogan">  DR EGG'S COMPANION </h2> */}
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
        <img className="Character-Pet"src={EggDrone} onClick={() => manageState() } /> 
        

        
          
        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
export default DrEggScreen