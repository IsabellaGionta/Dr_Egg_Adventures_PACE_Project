import { useState, React }  from 'react';
import Cornelia from '../../images/characters/Cornelia-Highlight1.png';
import Carlin from '../../images/characters/Carlin.png';
import Pigeon from '../../images/characters/Pigeon.png';
import PigeonFlipped from '../../images/characters/Pigeon-Flipped.png';
import Snake from '../../images/characters/Snake.png';
import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';
import Popup from '../../components/Popup.js';
import LandscapePopup from '../../components/Landscape.js';


import { useHistory } from "react-router-dom";

import Accordian from "../../components/Accordian"


export const CorneliaScreen = () => {

  // Creating state for popups of companions 
  const [modalState, setModalState] = useState(false);
  const [modalState1, setModalState1] = useState(false);
  const [modalState2, setModalState2] = useState(true);


  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }

    return (

      
      <div className="Characters-Background-Container">        

        <img className="Blackboard" src={Blackboard} alt="Blackboard" />

        <div className="Accordians">
          <Accordian className="characteristics" title="CHARACTERISTICS" content="Cornelia is a girl with a sunny personality.
                  Animals are attracted to her radiance and other farmer’s kids
                  are jealous of her good fortune, because unlike her, most of
                  them are starving. Cornelia is passionate about achieving
                  justice for the animals and to feed the people of Farm World.
                  With a pet mouse as her sidekick, it becomes her mission to
                  unify the animals against Dr Mole and liberate the world’s
                  food and seed supplies from Dr Mole’s control. " /> 
          <Accordian className="virtues" title="VIRTUES" content="Just. Radiant." /> 
          <Accordian title=" TOOLS " content="Pet mouse. Magic corn. Violin." />
          <Accordian title=" POWERS " content="The ability to talk to animals, Inner radiance, Can
                make anything grow. When she plays the violin she can put
                almost any creature into a euphoric trance." /> 
          <Accordian title="  WORLD " content="Corn-Farmlands" />
       </div>



        <img className="Individual-Character-Styling-Inventors-Cornelia"src={Cornelia} />


      
        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
        

        <div className="Titles" >
          <h1 className="Character-Type"> THE KID INVENTORS: </h1>
          <h2 className="Individual-Character-Name">  CORNELIA:  </h2> 
          <h2 className="Individual-Character-Slogan"> THE GOLDEN GIRL </h2>
        </div>
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
              WORLD: Corn-Farmlands
            </p>
            

        </div>

        <img className="Character-Pet CarlinHighlight clicked"src={Carlin}  onClick = {() => setModalState(true)}/> 
        <img className="Character-Pet-Pigeon PigeonHighlight clicked"src={Pigeon} onClick={() => setModalState1(true) } /> 

        


        <Popup trigger={modalState1} setTrigger = {setModalState1}>
                <div className = "popup-background">
                  <h1 className="Character-Type-Pet"> THE COMPANIONS: </h1>
                  <h2 className="Individual-Character-Name-Pet"> PUFF CHEST: PIGEON AIR FORCE PILOT  </h2> 
                  <img className="Character-Pet-Popup"src={PigeonFlipped} /> 

                  <div className="Companion-Description">
                    <p> 
                      GOAL: Help Cornelia liberate the animals
                    </p>
                    <p className="Powers"> 
                      SPECIAL POWER: ‘Pigeon-Poop Pummelings’
                    </p>

                  </div>
                </div>
          </Popup>

          <Popup trigger={modalState} setTrigger = {setModalState}>

            <div className = "popup-background">
              <h1 className="Character-Type-Pet"> THE COMPANIONS: </h1>
              <h2 className="Individual-Character-Name-Pet">  CARLIN: CORNELIA'S MOUSE  </h2> 
              <img className="Character-Pet-Popup"src={Carlin} /> 

              <div className="Companion-Description">
                <p> 
                  <b> GOAL: </b> Help Cornelia
                </p>
                <p className="Powers"> 
                 <b> SPECIAL POWER: </b> ‘Thought-wave’ clues to Cornelia
                </p>
            </div>
          </div>
        </Popup>

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
export default CorneliaScreen