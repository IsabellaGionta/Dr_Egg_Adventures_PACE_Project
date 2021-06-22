import {useState, React} from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import '../App.css';
import Enter from '../images/Enter-Button.png';
import DrEggLogo from '../images/Dr-Egg-Logo.png';

import LandscapePopup from '../components/Landscape.js';






export const Home = () => {

  const [modalState2, setModalState2] = useState(true);


  let history = useHistory();

  const EnterWebPortalHandler = () => {
    history.push('/map')
    console.log("page has been redirected to 'Map' screen")
  }
    return (
            <div className="Home-Background-Container"> 
              <div className="Home-Button-wrapper">
                <img src={DrEggLogo} className="DrEggLogo" alt="Dr Egg Logo" />
                <img onClick={EnterWebPortalHandler} src={Enter} className="Home-Enter-Button" alt="Enter" />    
               {/* <img src="./images/Map.png" alt="map" />         */}
              </div>

            <LandscapePopup trigger={modalState2} setTrigger = {setModalState2}>
              <div className = "popup-background">
                <p className="Landscape-text"> For a better viewing experience, turn device to Landscape view. </p>
              </div>
            </LandscapePopup> 
            </div> 
          )

}
export default Home

