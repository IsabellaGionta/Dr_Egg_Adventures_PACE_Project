import {useState, React}from 'react'
import Snake from '../images/characters/Snake.png';
import ClosePop from "../images/close-popup.png"
import farmworld from '../images/farmworld.png';
import slumworld from '../images/slumworld.png';
import technoworld from '../images/technoworld.png';
import egglab from '../images/egglab.png';
import seedcorp from '../images/seedcorp.png';
import Popup from '../components/SnakePopup.js';
import Back from '../images/btn-Back.png';
import card from '../images/Chatbot/ChatboxCard.png';

export const Worlds = () => {

const [modalState, setModalState] = useState(true);


    return (
        <div  className="Background-Container"> 

        <div className = "worldContainer">
          <div className="farmworld1" id = "FWorld">
            <a href="/corn-farmlands">
                <img className = "world" src={farmworld} alt = "Corn-Farmlands" />
            </a>
          </div>
          <div className="slumworld1" id = "SWorld">
            <a href="/slum-lanes">
                    <img className="world" src={slumworld} alt = "Slum-Lanes"/>
            </a>
          </div>
          <div className="seedcorp1" id = "SedWorld">
            <a href="/seedcorp-lab">
                    <img className="world" src={seedcorp} alt = "Seedcorp Lab"/>
          </a>
            </div>
            <div className="egglab1" id = "LWorld">
            <a href="/egg-lab">
                    <img className="world" src={egglab} alt = "Dr Egg Lab" />
            </a>
            </div>

            <div className="technoworld1" id = "TechWorld">
            <a href="/techno-towers">
                    <img className="world" src={technoworld} alt = "Techno-Towers" />
            </a>
            </div>
            <div className="egglab1" id = "LWorld2">
            <a href="/egg-lab">
                    <img className="world" src={egglab} alt = "Dr Egg Lab" />
            </a>
            </div>
            </div>
            <a href="/map">
         <img className="Back-Button characters" src={Back} alt="Back"/>
        </a>
                <Popup trigger={modalState} setTrigger = {setModalState}>
                    <div className = "popup-background">
                        <img className = "SnakePopup" src={Snake} alt = "Sake"/>
                        <p className="Snake-text"> In sprawled out, windy slum world, starvation and food shortages are every day occurences. The poor inhabittants suffer as Dr Mole ruthlessly seeks to control the food supplies. In the scary backstreets, roam gangs of "dumped" mutant thugs, the result of Dr Mole's experiments on children and animals. Anyone can become the thugs' unsuspecting quarry, and be kidnapped for auction at the notorious and scary Mutant and Body Parts Black Market. </p>
                    </div>
                </Popup>

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
