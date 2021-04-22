import React from 'react'
// import getAll from '../services/characters.js';
// import { useEffect } from 'react';
// import characters from '/dummy.js';
import Ardash from '../images/Ardash.png';
import Snake from '../images/Snake.png';
import Back from '../images/btn-Back.png';
import PaperText from '../images/PaperText.png';
import { useHistory } from "react-router-dom";

export const IndividualCharacters = ({item}) => {

  
  let history = useHistory();

  const BackEventHandler = () => {
      history.push('/characters')
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
        <div className="Individual-Character-Container">
          <img className="Individual-Character-Styling"src={Ardash} />
        </div> 
        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
        <img className="Paper-Textbox" src={PaperText} alt="Paper" />

        <h2 className="Individual-Character-Name"> ARDASH </h2>

        <p className="Indivdual-Character-Text1"> 
          Lorem ipsum dolor sit amet consectetur adipiscing elit at ante facilisi consequat 
          porttitor hac, penatibus sociosqu lacinia class vulputate curae urna in sollicitudin 
          leo mi. Ut habitant vitae bibendum 
        </p>
        <p className="Indivdual-Character-Text2">
          sociosqu faucibus in, nascetur tempus mauris ornare 
          molestie, netus arcu scelerisque proin et. Placerat egestas aliquam morbi imperdiet quis 
          lacinia proin hendrerit, congue ultricies conubia tellus mus mollis turpis orci pharetra, 
          curae sem interdum aptent odio phasellus augue.
        </p>

        <table className="Individual-Character-Table">
          <thead>
            <tr>
              <th>World</th>
              <td> Techno-world </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Virtues</th>
              <td> Fast. Speedy</td>
            </tr> 
            <tr> 
              <th>Tools</th>
              <td> Hover-tube </td>
            </tr>
            <tr> 
              <th>Special Powers</th>
              <td> Genetically modified so he can't catch any diseases. </td>
            </tr>
          </tbody>
        </table>
          
        <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>      
      </div>
    )
}
export default IndividualCharacters