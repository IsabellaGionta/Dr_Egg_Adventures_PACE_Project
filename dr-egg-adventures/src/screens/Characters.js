import React from 'react';
import { useEffect } from 'react';
import getAll from '../services/characters.js';
import { useHistory } from "react-router-dom";
import IndividualCharacters from './IndividualCharacters.js';
import MetaTags from 'react-meta-tags';
import '../App.css';
import Carlin from '../images/Carlin.png';
import Lab from '../images/Lab.png';
import LabBench from '../images/labbench.png';
import RifRaf from '../images/RifRaf.png';
import Pigeon from '../images/Pigeon.png';
import Ardash from '../images/Ardash.png';
import Cornelia from '../images/Cornelia.png';
import DrEgg from '../images/DrEgg.png';
import DrMoon from '../images/DrMoon.png';
import Vivi from '../images/Vivi.png';
import EggDrone from '../images/EggDrone.png';
import Back from '../images/btn-Back.png';
import Snake from '../images/Snake.png';


// import items from '../server/dummy.json';

const Characters = () => {

    useEffect(() => {
        console.log("effect is being run") // unit test
        getAll()
        .then (res => {
          console.log(res.data)
    
        })
      })

      let history = useHistory();

      const CharcaterEventHandler = () => {
        history.push('/each-character')
        console.log("page has been redirected to individual 'Character' pages") // unit test
      }

      const BackEventHandler = () => {
        history.push('/map')
      }


    return (
        <div className="ContainerWrapper">
          {/* <MetaTags>
            <meta name="viewport" content="width=device-width, initial-scale=1"> 
            </meta>
          </MetaTags> */}
            {/* {items.map( item =>{
                 {items.image}
            })} */}
          <div className="background-img2"> 
          <img className="ardash characters" src={Ardash} onClick={CharcaterEventHandler} alt="Ardash"/>
          <img className="DrEgg characters" src={DrEgg} onClick={CharcaterEventHandler} alt="DrEgg"/>

          <img className="DrMoon characters" src={DrMoon} onClick={CharcaterEventHandler} alt="DrMoon"/>
          <img className="Vivi characters" src={Vivi} onClick={CharcaterEventHandler} alt="Vivi"/>
          <img className="cornelia characters" src={Cornelia} onClick={CharcaterEventHandler} alt="Cornelia"/>

          <img className="bench" src={LabBench} alt="LabBench"/>

          <img className="carlin characters" src={Carlin} onClick={CharcaterEventHandler} alt="Carlin"/>
          <img className="rifraf characters" src={RifRaf} onClick={CharcaterEventHandler} alt="RifRaf"/>
          <img className="pigeon characters" src={Pigeon} onClick={CharcaterEventHandler} alt="Pigeon"/>
          <img className="EggDrone characters" src={EggDrone} onClick={CharcaterEventHandler} alt="EggDrone"/>

          <img className="back characters" src={Back} onClick={BackEventHandler} alt="Back"/>
          <a href="/chatbot">
           <img className="snake" src={Snake} alt="Snake"/>  
           </a>

          </div>


        {/* <img className="characters" src="/images/Ardash.png" onClick={CharcaterEventHandler} alt="Ardash"/>
        <img className="characters" src="/images/Carlin.png" onClick={CharcaterEventHandler} alt="Carlin"/>
        <img className="characters" src="/images/Cornelia.png" onClick={CharcaterEventHandler} alt="Cornelia"/>
        <img className="characters" src="/images/DrEgg.png" onClick={CharcaterEventHandler} alt="DrEgg"/>
        <img className="characters" src="/images/EggDrone.png" onClick={CharcaterEventHandler} alt="Egg Drone"/>
        <img className="characters" src="/images/Pigeon.png" onClick={CharcaterEventHandler} alt="Pigeon"/>
        <img className="characters" src="/images/RifRaf.png" onClick={CharcaterEventHandler} alt="RifRaf"/>
        <img className="characters" src="/images/Vivi.png" onClick={CharcaterEventHandler} alt="Vivi"/> */}

        </div>

    )
}

export default Characters
