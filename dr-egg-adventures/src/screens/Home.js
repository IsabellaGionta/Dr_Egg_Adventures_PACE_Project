import React from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import '../App.css';
import Enter from '../images/Enter-Button.png';
import DrEggLogo from '../images/Dr-Egg-Logo.png';





export const Home = () => {

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
            </div> 
          )

}
export default Home

