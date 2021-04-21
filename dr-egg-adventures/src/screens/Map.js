import React from 'react';
import map from '../images/Map.png';
import DrEgg from '../images/DrEgg.png';
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Worlds from '../images/Worlds.PNG';
import MapImage from '../images/PaperBackground.jpg';
import ChatbotScreen from './ChatbotScreen.js'

 



import Snake from '../images/Snake.png';






export const Map = () => {

  let history = useHistory();


  const ChatbotEventHandler = () => {
    <ChatbotScreen />

  }

    return (
        <div className="Container">
          <img className="MapImage" src={map} alt="Map" usemap="#Map" />
          <div className="GamesHeading"> GAMES</div>
          <div className="ResourcesHeading"> RESOURCES</div>
          <div className="CharactersHeading"> CHARACTERS </div>
          <div className="ContactHeading"> CONTACT </div>
          <div className="LabHeading"> LAB </div>
          <div className="WorldsHeading"> WORLDS </div>
          <div className="TrailerHeading"> TRAILER </div>
          <div className="OnlineStoreHeading"> ONLINE STORE </div>



          <map name="Map" id="Map">
            <area shape="poly" coords="901, 300, 1081, 530, 1085, 600, 665, 574, 901, 300 " href="/game" alt="Game" />
            <area  shape="circle" coords="185, 700, 75 " href="/characters " alt="Characters" />
            <area  shape="circle" coords="370, 810, 60  " href="/resources " alt="Resources" />
            <area  shape="circle" coords="780, 700, 45 " href="/trailer" alt="Trailer" />
            <area  shape="circle" coords="1750, 850, 70 " href="/contact " alt="Contact" />
            <area  shape="poly" coords="1570, 650, 1400, 825, 1100, 825, 1100, 500, 1410, 510 " href="/worlds" alt="World" />
            <area  shape="poly" coords="1450, 250, 1400, 505, 1100, 500, 1150, 200, 1410, 110 " href="/lab" alt="Lab" />
            <area  shape="circle" coords="1000, 730, 65 " href="/online-store" alt="Online Store" />








          </map>
          {/* <img className="DrEggMap characters" src={DrEgg} onClick={CharactersEventHandler} alt="DrEgg"/> */}
          {/* <Button onClick={ResourcesEventHandler} variant="primary" className="resources"> RESOURCES </Button> */}
          {/* <Button onClick={WorldsEventHandler} variant="primary" className="worlds"> WORLDS </Button>       
          <div className="brightness">
            <img className="worlds" src={Worlds} onClick={WorldsEventHandler} alt="Worlds"/>
            </div>
           */}
           <a href="/chatbot">
           <img className="MapSnake" src={Snake} alt="Snake"/>  
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
