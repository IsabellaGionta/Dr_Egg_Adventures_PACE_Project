import React from 'react';
import map from '../images/Map.png';
import Snake from '../images/Snake.png';






export const Map = () => {

    return (
        <div className="Map-Container">
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
