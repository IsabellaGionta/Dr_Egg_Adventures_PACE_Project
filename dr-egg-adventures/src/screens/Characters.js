import React from 'react';
import { useEffect } from 'react';
import getAll from '../services/characters.js';
import { useHistory } from "react-router-dom";
import IndividualCharacters from './IndividualCharacters.js';
import '../App.css';

import assets from '../dummy.json';


import Carlin from '../images/characters/Carlin.png';
import LabBench from '../images/labbench.png';
import RifRaf from '../images/characters/RifRaf.png';
import Pigeon from '../images/characters/Pigeon.png';
import Ardash from '../images/characters/Ardash.png';
import Cornelia from '../images/characters/Cornelia.png';
import DrEgg from '../images/DrEgg.png';
import DrMoon from '../images/characters/DrMoon.png';
import Vivi from '../images/characters/Vivi.png';
import EggDrone from '../images/characters/EggDrone.png';
import characters from '../images/characters.js';
import Back from '../images/btn-Back.png';
import Snake from '../images/Snake.png';
// let images = [];


// import items from '../server/dummy.json';

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
        history.push('/characters/:id')
        console.log("page has been redirected to individual 'Character' pages") 
      }

      const BackEventHandler = () => {
        history.push('/map')
      }

      // function  importAll(r)  {

        // return r.keys().map((image) => { images[image.replace('../images/characters/', '')] = r(image); });
    // }

      // images = importAll(require.context('../images/characters/', false, /\.(png|jpe?g|svg)$/));
    
      
    //   function  importAll(r)  {
    //     return r.keys().map(r);
    // }

    //   images = importAll(require.context('../images/characters/', false, /\.(png|jpe?g|svg)$/));
    
      

      //  function importAll(r) {
      //   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      //   return images;
      // }
      
      //  images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));


    return (
        <div className="Character-Container">
          <div className="Character-Background-Container"> 
            {/* {assets.map((character) => (
              <span> {character.image} </span>
            ))}           */}
            <img className="Ardash characters" src={Ardash} onClick={CharcaterEventHandler} alt="Ardash"/>
            <img className="DrEgg characters" src={DrEgg} onClick={CharcaterEventHandler} alt="DrEgg"/>

            <img className="DrMoon characters" src={DrMoon} onClick={CharcaterEventHandler} alt="DrMoon"/>
            <img className="Vivi characters" src={Vivi} onClick={CharcaterEventHandler} alt="Vivi"/>
            <img className="Cornelia characters" src={Cornelia} onClick={CharcaterEventHandler} alt="Cornelia"/>



            <img className="Character-Bench" src={LabBench} alt="LabBench"/>

             <img className="Carlin characters" src={Carlin} onClick={CharcaterEventHandler} alt="Carlin"/>
            <img className="Rifraf characters" src={RifRaf} onClick={CharcaterEventHandler} alt="RifRaf"/>
            <img className="Pigeon characters" src={Pigeon} onClick={CharcaterEventHandler} alt="Pigeon"/>
            <img className="EggDrone characters" src={EggDrone} onClick={CharcaterEventHandler} alt="EggDrone"/> 

            <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
            <a href="/chatbot">
              <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
            </a>
          </div>
        </div>
    )
}

export default Characters
