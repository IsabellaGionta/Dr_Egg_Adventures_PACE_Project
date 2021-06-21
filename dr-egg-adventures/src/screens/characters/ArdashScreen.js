import {React, useState} from 'react'
import Ardash from '../../images/characters/Ardash-Highlight1.png';
import Snake from '../../images/characters/Snake.png';
import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';

import LandscapePopup from '../../components/Landscape.js';


import Accordian from "../../components/Accordian"



import { useHistory } from "react-router-dom";
export const ArdashScreen = () => {
   const [modalState2, setModalState2] = useState(true);

    const CharacteristicsHandler = () => {
      const currentStatus=this.state.display;
      this.setState({
        display: !currentStatus
      })
    }

    return (
      <div className="Characters-Background-Container">

        <img className="Blackboard" src={Blackboard} alt="Blackboard" />

        <div className="Accordians">
          <Accordian className="characteristics" title="CHARACTERISTICS" content="Ardash is a boy with no belly button and 
              he is literally perfect. He hails from Techno-Towers and has
              been genetically modified so he can’t catch any diseases. He’s
              a super plugged in and clever kid, and knows heaps about 
              technology. He’s able to work out scientific and mathematical
              problems super-fast, making him a great helper in Dr Egg’s
              experiments. He can also travel at super speeds! Ardash likes
              to investigate and discover new diseases and is searching for
              one he could catch.  " />
          <Accordian className="virtues" title="VIRTUES" content="Fast. Speedy. Can do anything with numbers and data." />
          <Accordian title=" TOOLS " content="Hover-tube with a built-in compass. Wearable wrist
              gadget and camera." />
          <Accordian title=" POWERS " content="Genetically modified so he can’t catch any diseases.
              Super eyesight. Super fast. Knows everything about numbers and data!" />
          <Accordian title="  WORLD " content="Techno-Towers" />
       </div>
        <img className="Individual-Character-Styling-Inventors-Ardash"src={Ardash} />

        <a href="/characters">
         <img className="Back-Button characters" src={Back} alt="Back"/>
        </a>
        <h1 className="Character-Type"> THE KID INVENTORS: </h1>

        <h2 className="Individual-Character-Name"> ARDASH: </h2> 
        <h2 className="Individual-Character-Slogan">THE PLUGGED IN PERFECTIONIST </h2>

        <div className="Character-Description">

             <p> AGE: 13 </p>
             <p> 
              CHARACTERISTICS: Ardash is a boy with no belly button and 
              he is literally perfect. He hails from Techno-Towers and has
              been genetically modified so he can’t catch any diseases. He’s
              a super plugged in and clever kid, and knows heaps about 
              technology. He’s able to work out scientific and mathematical
              problems super-fast, making him a great helper in Dr Egg’s
              experiments. He can also travel at super speeds! Ardash likes
              to investigate and discover new diseases and is searching for
              one he could catch. 
            </p>
            
            <p> 
              VIRTUES: Fast. Speedy. Can do anything with numbers and data.
            </p>
            <p>
              TOOLS: Hover-tube with a built-in compass. Wearable wrist
              gadget and camera.
            </p>
            <p>
              POWERS: Genetically modified so he can’t catch any diseases.
              Super eyesight. Super fast. Knows everything about numbers and data!
            </p>
            <p>
              WORLD: Techno-Towers
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
    );
}

export default ArdashScreen