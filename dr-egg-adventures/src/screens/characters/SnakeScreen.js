import {React, useState} from 'react'
import Snake from '../../images/characters/Snake.png';
import SnakeImg from '../../images/characters/Snake-Highlight2.png';
import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';

import { useHistory } from "react-router-dom";

import LandscapePopup from '../../components/Landscape.js';


import Accordian from "../../components/Accordian"


export const SnakeScreen = () => {
  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }
  const [modalState2, setModalState2] = useState(true);



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


        <img className="Individual-Character-Styling-Snake"src={SnakeImg} />

        <img className="Back-Button " src={Back} onClick={BackEventHandler} alt="Back"/>
        <h1 className="Character-Type"> THE NARRATOR: </h1>

        <h2 className="Individual-Character-Name">  THE SNAKE:  </h2> 
        <h2 className="Individual-Character-Slogan">  NARRATOR </h2>

        <div className="Character-Description-Snake">
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

        
    
      </div>
    )
}
export default SnakeScreen