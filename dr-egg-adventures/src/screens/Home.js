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
    console.log("page has been redirected to 'Character' page") // unit test
  }
    return (
            <div className="background-img"> 
              <Button onClick={EnterWebPortalHandler} variant="primary" className="Enter-Button"> ENTER </Button>    
              <img src="./images/Map.png" alt="map" />        
            
            
              </div> 
    )

}
export default Home

