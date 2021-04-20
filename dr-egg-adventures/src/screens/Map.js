import React from 'react';
import map from '../images/Map.png';
import DrEgg from '../images/DrEgg.png';
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Worlds from '../images/Worlds.PNG';

import Snake from '../images/Snake.png';







export const Map = () => {

  let history = useHistory();

  const CharactersEventHandler = () => {
    history.push('/All')

  }

  const ResourcesEventHandler = () => {
    history.push('/resources')

  }

  const WorldsEventHandler = () => {
    history.push('/worlds')

  }
    return (
        <div className="mapContainer">
        <img className="DrEggMap characters" src={DrEgg} onClick={CharactersEventHandler} alt="DrEgg"/>
        <Button onClick={ResourcesEventHandler} variant="primary" className="resources"> RESOURCES </Button>
        <Button onClick={WorldsEventHandler} variant="primary" className="worlds"> WORLDS </Button>       

        <div className="brightness">
        <img className="worlds" src={Worlds} onClick={WorldsEventHandler} alt="Worlds"/>
        <img className="snake" src={Snake} alt="Snake"/>


        </div>
     
            
            
        </div>
    )
}
export default Map;

