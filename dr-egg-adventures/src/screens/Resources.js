import React from 'react';
import TeacherDownloadButton from '../images/TeacherDownloadButton.png';
import StudentDownloadButton from '../images/StudentDownloadButton.png';
import Back from '../images/btn-Back.png';
import Snake from '../images/Snake.png';
import { useHistory } from "react-router-dom";




export const Resources = () => {

    let history = useHistory();


    const BackEventHandler = () => {
        history.push('/map')

      }

    return (
        <div className="background-container">
          <div className="buttons">
            <img className="TeacherButton" src={TeacherDownloadButton} onClick={() => { alert('Downloading Teacher resources!')}} alt="TeacherDownloadButton"/>
            <img className="StudentButton" src={StudentDownloadButton} onClick={() => { alert('Downloading Student resources!')}} alt="StudentDownloadButton"/>
          </div>
            <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
            <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
           </a>        
           </div>
    )
}
export default Resources

