import React from 'react'
import Ardash from '../../images/characters/Ardash-Cropped.png';
import Snake from '../../images/characters/Snake.png';
import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';
import HoverBoard from '../../images/HoverBoard.png';
import { Button } from 'react-bootstrap';

import { useHistory } from "react-router-dom";

export default class ArdashScreen extends React.Component{ 
  constructor(props) {
    super(props);
    this.state={
    display: false
  }
}
render() {
  // let history = useHistory();

  const BackEventHandler = () => {
      // history.push('/characters')
    }
    
    const CharacteristicsHandler = () => {
      const currentStatus=this.state.display;
      this.setState({
        display: !currentStatus
      })
    }

    let characteristics=null;
    if(this.state.display) {
      characteristics= 
      <p className="Character-Description-Inventors">
        CHARACTERISTICS: Ardash is a boy with no belly button and 
        he is literally perfect. He hails from Techno-world and has
        been genetically modified so he can’t catch any diseases. He’s
        a super plugged in and clever kid, and knows heaps about 
        technology. He’s able to work out scientific and mathematical
        problems super-fast, making him a great helper in Dr Egg’s
        experiments. He can also travel at super speeds! Ardash likes
        to investigate and discover new diseases and is searching for
        one he could catch. 
      </p>
    }

    return (
      <div className="Characters-Background-Container">

        <img className="Blackboard" src={Blackboard} alt="Blackboard" />
        <img className="Individual-Character-Styling-Inventors"src={Ardash} />
        <img className="Character-Tool"src={HoverBoard} />

        <a href="/characters">
         <img className="Back-Button characters" src={Back} alt="Back"/>
        </a>
        <h1 className="Character-Type"> THE KID INVENTORS: </h1>

        <h2 className="Individual-Character-Name"> ARDASH: </h2> 
        <h2 className="Individual-Character-Slogan">THE PLUGGED IN PERFECTIONIST </h2>
        <Button onClick={CharacteristicsHandler} variant="primary" className="Mobile-Characteristics"> CHARACTERISTICS </Button>    

        <div className="Character-Description-Inventors">

             <p> AGE: 13 </p>
             {characteristics}
             {/* <p> 
              CHARACTERISTICS: Ardash is a boy with no belly button and 
              he is literally perfect. He hails from Techno-world and has
              been genetically modified so he can’t catch any diseases. He’s
              a super plugged in and clever kid, and knows heaps about 
              technology. He’s able to work out scientific and mathematical
              problems super-fast, making him a great helper in Dr Egg’s
              experiments. He can also travel at super speeds! Ardash likes
              to investigate and discover new diseases and is searching for
              one he could catch. 
            </p> */}
            
            {/* <p> 
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
              WORLD: Techno-towers
            </p> */}

        </div>

        
          
        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
}
// export default ArdashScreen