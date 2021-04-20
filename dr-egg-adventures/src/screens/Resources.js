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
        <div>
            <img className="TeacherButton" src={TeacherDownloadButton} onClick={() => { alert('Downloading Teacher resources!')}} alt="TeacherDownloadButton"/>
            <img className="StudentButton" src={StudentDownloadButton} onClick={() => { alert('Downloading Student resources!')}} alt="StudentDownloadButton"/>

            <img className="back characters" src={Back} onClick={BackEventHandler} alt="Back"/>
          <img className="snake" src={Snake} alt="Snake"/>

        </div>
    )
}
export default Resources

