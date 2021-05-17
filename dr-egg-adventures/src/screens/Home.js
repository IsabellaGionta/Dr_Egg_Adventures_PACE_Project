import React from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import '../App.css';




export const Home = () => {

  let history = useHistory();

  const EnterWebPortalHandler = () => {
    history.push('/map')
    console.log("page has been redirected to 'Map' screen")
  }
    return (
            <div className="Home-Background-Container"> 
              <div className="Home-Button-wrapper">
               <Button onClick={EnterWebPortalHandler} variant="primary" className="Home-Enter-Button"> ENTER </Button>    
               {/* <img src="./images/Map.png" alt="map" />         */}
              </div>
            </div> 
          )

}
export default Home

