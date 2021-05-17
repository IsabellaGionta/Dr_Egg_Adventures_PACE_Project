import { useState, React }  from 'react';
import Cornelia from '../../images/characters/Cornelia-Cropped.png';
import Carlin from '../../images/characters/Carlin.png';
import Pigeon from '../../images/characters/Pigeon.png';
import PigeonFlipped from '../../images/characters/Pigeon-Flipped.png';
import Snake from '../../images/characters/Snake.png';
import Back from '../../images/btn-Back.png';
import Blackboard from '../../images/Blackboard.png';
// import Popup from './Popup';
import Popup from "reactjs-popup";


import { useHistory } from "react-router-dom";

export const CorneliaScreen = () => {

  // Creating state for popups of companions 
  const [modalState, setModalState] = useState(false);

  const manageState= () => {
    setModalState(!modalState)
  }

  const [modalState1, setModalState1] = useState(false);

  const manageState1= () => {
    setModalState1(!modalState1)
  }


  
 
  // const [isOpen, setIsOpen] = useState(false);
 
  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // }

  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
    }

    // const HandleClose = () => {
    //   history.push('/characters')
    // }


    return (
      <div className="Characters-Background-Container">

        <img className="Blackboard" src={Blackboard} alt="Blackboard" />


        {/* <Popup trigger=
          {
            <img className="Character-Pet" src={Carlin}/> 
          } position=" center center">
          <div className="popup-box"> 
            <div className="box">
            

            <h1 className="Character-Type"> THE COMPANIONS: </h1> */}
            {/* <h2 className="Individual-Character-Name">  CARLIN:  </h2> 
            <h2 className="Individual-Character-Slogan"> CORNELIA'S MOUSE </h2>

            <div className="Companion-Description">
              <p> 
               GOAL: Help Cornelia
              </p>
               <p className="Powers"> 
               SPECIAL POWER: ‘Thought-wave’ clues to Cornelia
              </p>


            </div> */}
          {/* </div>
          </div>
        </Popup> */}


        <img className="Individual-Character-Styling-Inventors"src={Cornelia} />
        {/* <img className="Character-Pet-Pigeon"src={Pigeon} /> */}

        {/* <div> 
          <input 
          type="button"
          value="Characteristics"
          onClick={togglePopup}
          />

          {isOpen && <togglePopup 
          content={<>
            <h1 className="Character-Type"> THE COMPANIONS: </h1>
            <h2 className="Individual-Character-Name">  CARLIN:  </h2> 
            <h2 className="Individual-Character-Slogan"> CORNELIA'S MOUSE </h2>
          
            <div className="Companion-Description">
              <p> 
                GOAL: Help Cornelia
              </p>
              <p className="Powers"> 
                SPECIAL POWER: ‘Thought-wave’ clues to Cornelia
              </p>
            </div>
        </>
          }
        HandleClose={togglePopup}
      />}
      </div> */}
      



        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>

        <h1 className="Character-Type"> THE KID INVENTORS: </h1>
        <h2 className="Individual-Character-Name">  CORNELIA:  </h2> 
        <h2 className="Individual-Character-Slogan"> THE GOLDEN GIRL </h2>
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

        <div className={`modalBackground modalShowing-${modalState}`}> 
        
          <h1 className="Character-Type-Pet"> THE COMPANIONS: </h1>
          <h2 className="Individual-Character-Name-Pet">  CARLIN: CORNELIA'S MOUSE  </h2> 
          {/* <h2 className="Individual-Character-Slogan"> CORNELIA'S MOUSE </h2> */}
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
        <img className="Character-Pet"src={Carlin} onClick={() => manageState() } /> 
        

        <div className={`modalBackground modalShowing-${modalState1}`}> 
        
        <h1 className="Character-Type-Pet"> THE COMPANIONS: </h1>
        <h2 className="Individual-Character-Name-Pet"> PUFF CHEST: PIGEON AIR FORCE PILOT  </h2> 
        {/* <h2 className="Individual-Character-Slogan">  PIGEON AIR FORCE PILOT </h2> */}
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
        <img className="Character-Pet-Pigeon"src={Pigeon} onClick={() => manageState1() } /> 
        
          
        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
export default CorneliaScreen