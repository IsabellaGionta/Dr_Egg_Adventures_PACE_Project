import {useState, React}from 'react'
import techno from '../images/technoworld.png';
import farm from '../images/farmworld.png';
import slum from '../images/slumworld.png';
import button from '../images/btn-Back.png';
import Snake from '../images/characters/Snake.png';
import { useHistory } from "react-router-dom";
import ClosePop from "../images/close-popup.png"
import farmworld from '../images/farmworld.png';
import slumworld from '../images/slumworld.png';
import technoworld from '../images/technoworld.png';
import egglab from '../images/egglab.png';
import seedcorp from '../images/seedcorp.png';
import Popup from '../components/SnakePopup.js';
import Back from '../images/btn-Back.png';
import LandscapePopup from '../components/Landscape.js';
import card from '../images/Chatbot/ChatboxCard.png';




import Card from '../components/Card.js';

export const Worlds = () => {

const [modalState, setModalState] = useState(true);
const [modalState2, setModalState2] = useState(true);



const history = useHistory();

const homeNav = () => {
    history.push('/map');
}

const technoNav = () => {
    history.push('/TechnoWorld');
}

const farmNav = () => {
    history.push('/FarmWorld');
}

const slumNav = () => {
    history.push('/SlumWorld');
}

    return (
        <div  className="Background-Container"> 
        <a href="/map">
         <img className="Back-Button characters" src={Back} alt="Back"/>
        </a>
            <a href="/farmworld">
             <div className="card-container">
                <img className="farmworld1 world" src={farmworld} />

            </div>
            </a>

            <a href="/slumworld">
                <div className="card-container">
 
                    <img className="slumworld1 world" src={slumworld} />

                </div>
            </a>
            
            <a href="/seedcorp">
                <div className="card-container">

                    <img className="seedcorp1 world" src={seedcorp} />

                </div>
            </a>

            <a href="/egglab">
                <div className="card-container">

                    <img className="egglab1 world" src={egglab} />

                </div>
            </a>


            <a href="/technoworld">
                <div className="card-container">

                    <img className="technoworld1 world" src={technoworld} />

                </div>

            </a>

                <Popup trigger={modalState} setTrigger = {setModalState}>
                    <div className = "popup-background">
                        <img className = "SnakePopup" src={Snake} />
                        <p className="Snake-text"> In sprawled out, windy slum world, starvation and food shortages are every day occurences. The poor inhabittants suffer as Dr Mole ruthlessly seeks to control the food supplies. In the scary backstreets, roam gangs of "dumped" mutant thugs, the result of Dr Mole's experiments on children and animals. Anyone can become the thugs' unsuspecting quarry, and be kidnapped for auction at the notorious and scary Mutant and Body Parts Black Market. </p>
                    </div>
                </Popup>

                {/* <LandscapePopup trigger={modalState2} setTrigger = {setModalState2}>
                    <div className = "popup-background">
                        <p className="Landscape-text"> For a better viewing experience, turn device to Landscape view. </p>
                    </div>
                </LandscapePopup> */}

        <label htmlFor = "chat">
                  <div className="StoreSnake"/>  
              </label>
              <input className = "InputStyle" type="checkbox" id = "chat"/>
              <div className = "ChatBoxContainer">
                <label htmlFor = "chat">
                  <img className = "chatClose" src = {ClosePop} alt = "Close"/>
                </label>
                <div className = "chatHBox">
                  <img className="chatbotImg" src={Snake} alt="Snake"/>
                </div>
                <div className = "chatQBox">
                  What do you need help with?
                </div>
                <div className = "chatABox">
                <input className = "InputStyle" type="checkbox" id = "Q1"/>
                  <div className = "chatCont" id = "QCont">
                    <label htmlFor = "Q1">
                      <div className = "chatWorldQ1"/>
                    </label>
                  </div>
                  <div className = "chatCont" id = "A1">
                    <div className = "chatWorldA1"/>
                    <div className = "chatATxt">
                    sksksksk.. Click on one of the WORLD CARDS to discover interesting facts about each world that our INTERESTING characters reside in! TRY CLICKING ON ONE NOW!                    
                    <img src = {card} alt = "World Card"/>
                    </div>                     
                    <label htmlFor = "Q1">
                      <div className = "chatBackBtn"/>
                    </label>
                  </div>
                </div>
              </div>
        </div>
    )
}
export default Worlds
