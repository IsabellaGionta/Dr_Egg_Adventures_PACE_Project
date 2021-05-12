import React from 'react';
import Cornelia from '../../images/characters/Cornelia-Cropped.png';
import Carlin from '../../images/characters/Carlin.png';
import Snake from '../../images/Snake.png';
import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';

import { useHistory } from "react-router-dom";

export const CorneliaScreen = () => {
  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }


    return (
      <div className="Characters-Background-Container">
        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>

        <img className="Blackboard" src={Blackboard} alt="Blackboard" />


        <img className="Individual-Character-Styling"src={Cornelia} />
        <img className="Character-Pet"src={Carlin} />


        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>

        <h1 className="Companions"> THE KID INVENTORS: </h1>
        <h2 className="Individual-Character-Name"> CORNELIA: THE GOLDEN GIRL </h2>

        <div className="Character-Description">
            <p> AGE: 13 </p>
             <p> 
              CHARACTERISTICS: Cornelia is a girl with a sunny personality.
              Animals are attracted to her radiance and other farmer’s kids
              are jealous of her good fortune, because unlike her, most of
              them are starving. Cornelia is passionate about achieving
              justice for the animals and to feed the people of Farm World.
              With a pet mouse as her sidekick, it becomes her mission to
              unify the animals against Dr Mole and liberate the world’s
              food and seed supplies from Dr Mole’s control. 
            </p>
            
            <p> 
              VIRTUES: Just. Radiant.
            </p>
            <p>
              TOOLS: Pet mouse. Magic corn. Violin.
            </p>
            <p>
              POWERS: The ability to talk to animals, Inner radiance, Can
              make anything grow. When she plays the violin she can put
              almost any creature into a euphoric trance.
            </p>
            <p>
              WORLD: Corn-farmlands
            </p>
        </div>

        
          
        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
export default CorneliaScreen