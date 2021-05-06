import React from 'react';
import map from '../images/Map.png';
import DrEgg from '../images/DrEgg.png';
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Worlds from '../images/Worlds.PNG';
import ChatbotScreen from './ChatbotScreen.js'
import Snake from '../images/Snake.png';






export const Map = () => {

  let history = useHistory();


  const ChatbotEventHandler = () => {
    <ChatbotScreen />
  }

    return (
        <div className="Map-Container">
          <img className="MapImage" src={map} alt="Map" useMap="#Map"/>
          <a href = "./Game">
          <div className="GamesHeading"> GAMES</div>
          </a>
          <a href = "./Resources">
          <div className="ResourcesHeading"> RESOURCES</div>
          </a>
          <a href = "./Characters">
          <div className="CharactersHeading"> CHARACTERS </div>
          </a>
          <a href = "./Constact">
          <div className="ContactHeading"> CONTACT </div>
          </a>
          <a href = "./Lab">
          <div className="LabHeading"> LAB </div>
          </a>
          <a href = "./Worlds">
          <div className="WorldsHeading"> WORLDS </div>
          </a>
          <a href = "./Trailer">
          <div className="TrailerHeading"> TRAILER </div>
          </a>
          <a href = "./online-store">
          <div className="OnlineStoreHeading"> ONLINE STORE </div>
          </a>
 
           <a href="/chatbot">
           <img className="Map-Snake" src={Snake} alt="Snake"/>  
           </a>
            
        </div>
    )
}
export default Map;

// <img className="DrEggMap characters" src={DrEgg} onClick={CharactersEventHandler} alt="DrEgg"/>
// <Button onClick={ResourcesEventHandler} variant="primary" className="resources"> RESOURCES </Button>
// <Button onClick={WorldsEventHandler} variant="primary" className="worlds"> WORLDS </Button>       

// <div className="brightness">
// <img className="worlds" src={Worlds} onClick={WorldsEventHandler} alt="Worlds"/>
