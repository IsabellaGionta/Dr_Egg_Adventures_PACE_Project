import React from 'react';
import TeacherDownloadButton from '../images/TeacherDownloadButton.png';
import StudentDownloadButton from '../images/StudentDownloadButton.png';
import Back from '../images/btn-Back.png';
import Snake from '../images/characters/Snake.png';
import Blackboard from '../images/Blackboard.png';
import pdf from '../pdf/Resource.pdf';
import { useHistory } from "react-router-dom";




export const Resources = () => {

    let history = useHistory();


    const BackEventHandler = () => {
        history.push('/map')

      }

    return (
        <div className="Resource-Background-Container">
          <img className="Blackboard" src={Blackboard} />
          <h1 className="Resources-Title"> RESOURCES </h1>
          <div className="buttons">
            <a href={pdf} target="_blank" download>
              <img className="TeacherButton" src={TeacherDownloadButton} alt="TeacherDownloadButton"/>
            </a>
            <a href={pdf} target="_blank" download >
              <img className="StudentButton" src={StudentDownloadButton}  alt="StudentDownloadButton"/>
            </a>
          </div>
            <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
            <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
           </a>        
           </div>
    )
}
export default Resources


// onClick={() => { alert('Downloading Student resources!')}}
