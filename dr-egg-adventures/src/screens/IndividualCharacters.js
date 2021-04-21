import React from 'react'
import getAll from '../services/characters.js';
import { useEffect } from 'react';
// import characters from '/dummy.js';
import { NavItem } from 'react-bootstrap';
import Ardash from '../images/Ardash.png';
import Snake from '../images/Snake.png';
import Back from '../images/btn-Back.png';

import { useHistory } from "react-router-dom";




export const IndividualCharacters = ({item}) => {

  
  let history = useHistory();


  const BackEventHandler = () => {
      history.push('/map')
    }

//     useEffect(() => {
//         console.log("effect is being run") // unit test
//         getAll()
//         .then (res => {
//           console.log(res.data)
    
//         })
//       })

    return (
      <div className="Characters-Background-Container">
        <div className="Individual-Container">
          <img className="Character-Styling"src={Ardash} />
          </div> 
        {/* <img src={item.image} variant ='top' /> */}

        <img className="back characters" src={Back} onClick={BackEventHandler} alt="Back"/>
        <a href="/chatbot">
           <img className="snake" src={Snake} alt="Snake"/>  
           </a>      
      </div>
      
    )
}
export default IndividualCharacters

{/* <>
      {characters.map(item => (
        <h2> {item.image}</h2>
      ))}
        // <div>
        //     This is the Individual character page 
        //     {/* {characters.image} */}
            
        // </div>
        // </> */}