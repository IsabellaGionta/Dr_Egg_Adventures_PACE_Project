import React from 'react';
import {useState } from 'react';
import getAll from '../services/characters.js';
import { useHistory } from "react-router-dom";
import '../App.css';
import LabBench from '../images/labbench.png';
import Ardash from '../images/characters/Ardash.png';
import Cornelia from '../images/characters/Cornelia.png';
import DrEgg from '../images/characters/DrEgg.png';
import DrMoon from '../images/characters/DrMoon.png';
import Vivi from '../images/characters/Vivi.png';
import SnakeImg from '../images/characters/Snake.png';
import ProfMole from '../images/characters/ProfMole.png';
import Back from '../images/btn-Back.png';
import Snake from '../images/characters/Snake.png';
import LandscapePopup from '../components/Landscape.js';
import ClosePop from "../images/close-popup.png"



const Characters = () => {

  const [modalState2, setModalState2] = useState(true);

      let history = useHistory();

      const CharcaterEventHandler = () => {
        history.push('/each-character')
        console.log("page has been redirected to individual 'Character' pages") 
      }
      const ArdashEventHandler = () => {
        history.push('/character/Ardash')
        console.log("page has been redirected to individual 'Character' pages") 
      }

      const CarlinEventHandler = () => {
        history.push('/character/Carlin')
        console.log("page has been redirected to individual 'Character' pages") 
      }

      const DrEggEventHandler = () => {
        history.push('/character/DrEgg')
        console.log("page has been redirected to individual 'Character' pages") 
      }

      const ViviEventHandler = () => {
        history.push('/character/Vivi')
        console.log("page has been redirected to individual 'Character' pages") 
      }

      const DrMoonEventHandler = () => {
        history.push('/character/DrMoon')
        console.log("page has been redirected to individual 'Character' pages") 
      }

      const CorneliaEventHandler = () => {
        history.push('/character/Cornelia')
        console.log("page has been redirected to individual 'Character' pages") 
      }

      const RifRafEventHandler = () => {
        history.push('/character/RifRaf')
        console.log("page has been redirected to individual 'Character' pages") 
      }

      const PigeonEventHandler = () => {
        history.push('/character/Pigeon')
        console.log("page has been redirected to individual 'Character' pages") 
      }

      const EggDroneEventHandler = () => {
        history.push('/character/EggDrone')
        console.log("page has been redirected to individual 'Character' pages") 
      }

      const SnakeEventHandler = () => {
        history.push('/character/Snake')
        console.log("page has been redirected to individual 'Character' pages") 
      }

      const ProfMoleEventHandler = () => {
        history.push('/character/Professor-Mole')
        console.log("page has been redirected to individual 'Character' pages") 
      }

      const BackEventHandler = () => {
        history.push('/map')
      }

    return (
      
        <div className="Character-Container">
          <div className="Character-Background-Container"> 
            <div className="Character-Images">
            <figure className="good-characters">
                <img className="DrEgg  all" src={DrEgg} onClick={DrEggEventHandler} alt="DrEgg"/>

                <img className="DrMoon  all" src={DrMoon} onClick={DrMoonEventHandler} alt="DrMoon"/>
                <img className="Ardash  all" src={Ardash} onClick={ArdashEventHandler} alt="Ardash"/>

                <img className="Vivi all" src={Vivi} onClick={ViviEventHandler} alt="Vivi"/>
                <img className="Cornelia all" src={Cornelia} onClick={CorneliaEventHandler} alt="Cornelia"/>
              </figure>

              <figure className="bad-characters">
               <img className="ProfMole all " src={ProfMole} onClick={ProfMoleEventHandler} alt="ProfMole"/> 
              </figure>
              <img className="Character-Bench" src={LabBench} alt="LabBench"/>

              <img className="SnakeImg characters" src={SnakeImg} onClick={SnakeEventHandler} alt="SnakeImg"/> 

            </div>

            {/* <LandscapePopup trigger={modalState2} setTrigger = {setModalState2}>
            <div className = "popup-background">
              <p className="Landscape-text"> For a better viewing experience, turn device to Landscape view. </p>
            </div>
          </LandscapePopup> */}

            

            <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
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
                      <div className = "chatCharQ1"/>
                    </label>
                  </div>
                  <div className = "chatCont" id = "A1">
                    <div className = "chatCharA1"/>
                    <div className = "chatATxt">
                    sksksks.. See the bright light? That’s the GOOD people! See the dark light? That’s the BAD people! Try clicking on one of them for more INTERESTING INFORMATION! sksksk.                     
                    </div>                     
                    <label htmlFor = "Q1">
                      <div className = "chatBackBtn"/>
                    </label>
                  </div>
                </div>
              </div>

          </div>
        </div>
    )
}

export default Characters
