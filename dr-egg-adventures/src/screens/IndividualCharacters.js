import React from 'react'
// import getAll from '../services/characters.js';
// import { useEffect } from 'react';
// import characters from '/dummy.js';
import Ardash from '../images/Ardash-Cropped.png';
import Snake from '../images/Snake.png';
import Back from '../images/btn-Back.png';
import Blackboard from '../images/Blackboard.png';
import HoverBoard from '../images/HoverBoard.png';

import characters from '../images/characters.js'

import { useHistory } from "react-router-dom";

export const IndividualCharacters = ({match}) => {

  const character = characters.find(c => c._id === match.params.id)

  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }

//     useEffect(() => {
//         console.log("effect is being run") // unit test
//         getAll()
//         .then (res => {
//           console.log(res.data)
    
//         })
//       })

    return (
      <div className="Characters-Background-Container">
                <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>

          <img className="Blackboard" src={Blackboard} alt="Blackboard" />
          <div> {character.name}</div>


          {/* <img className="Individual-Character-Styling"src={Ardash} />
          <img className="Character-Tool"src={HoverBoard} />

        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
        <img className="Blackboard" src={Blackboard} alt="Blackboard" />

        <h2 className="Individual-Character-Name"> ARDASH: THE PLUGGED IN PERFECTIONIST </h2>

        <div className="Character-Description">
             <p> 
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
              WORLD: Techno-towers
            </p>

            <p>
              sociosqu faucibus in, nascetur tempus mauris ornare 
              molestie, netus arcu scelerisque proin et. Placerat egestas aliquam morbi imperdiet quis 
              lacinia proin hendrerit, congue ultricies conubia tellus mus mollis turpis orci pharetra, 
              curae sem interdum aptent odio phasellus augue.
            </p>
        </div> */}

        
          
        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
export default IndividualCharacters