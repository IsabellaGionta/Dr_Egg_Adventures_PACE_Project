import React from 'react';
import { useEffect } from 'react';
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


const Characters = () => {



    useEffect(() => {
        console.log("effect is being run") 
        getAll()
        .then (res => {
          console.log(res.data)
        })
      })

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
              <img className="DrEgg good-characters all" src={DrEgg} onClick={DrEggEventHandler} alt="DrEgg"/>

              <img className="DrMoon good-characters all" src={DrMoon} onClick={DrMoonEventHandler} alt="DrMoon"/>
              <img className="Ardash good-characters all" src={Ardash} onClick={ArdashEventHandler} alt="Ardash"/>

              <img className="Vivi good-characters all" src={Vivi} onClick={ViviEventHandler} alt="Vivi"/>
              <img className="Cornelia good-characters all" src={Cornelia} onClick={CorneliaEventHandler} alt="Cornelia"/>
              <img className="ProfMole bad-characters all " src={ProfMole} onClick={ProfMoleEventHandler} alt="ProfMole"/> 

              <img className="Character-Bench" src={LabBench} alt="LabBench"/>

              <img className="SnakeImg characters" src={SnakeImg} onClick={SnakeEventHandler} alt="SnakeImg"/> 

            </div>


            <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
            <a href="/chatbot">
              <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
            </a>
          </div>
        </div>
    )
}

export default Characters
