import React from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import '../App.css';
import MetaTags from 'react-meta-tags';
import logo from '../images/DrEggLogoOnPaper.jpg';




export const Home = () => {

  let history = useHistory();

  const EnterWebPortalHandler = () => {
    history.push('/map')
    console.log("page has been redirected to 'Character' page")
  }
    return (
            <div className="Home-Background-Container"> 
              <Button onClick={EnterWebPortalHandler} variant="primary" className="Home-Enter-Button"> ENTER </Button>    
              <img src="./images/Map.png" alt="map" />        
            </div> 
          )

}
export default Home

