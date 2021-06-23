import { useState, React }  from 'react';
import ProductOverview from '../images/product-overview.PNG';
import TeacherDownloadButton from '../images/TeacherDownloadButton.png';
import StudentDownloadButton from '../images/StudentDownloadButton.png';
import Back from '../images/btn-Back.png';
import Snake from '../images/characters/Snake.png';
import Blackboard from '../images/Blackboard.png';
import pdf from '../pdf/Resource.pdf';
import { useHistory } from "react-router-dom";
import ClosePop from "../images/close-popup.png"







export const Resources = () => {

    let history = useHistory();


    const BackEventHandler = () => {
        history.push('/map')

    }


    return (
        <div className="Resource-Background-Container">
          <img className="Blackboard" src={Blackboard} />
          <h1 className="Resources-Title"> PRODUCT OVERVIEW </h1>
          <div className="buttons">
            <a href={pdf} target="_blank" download>
              <img className="ProductOverview" src={ProductOverview} alt="Product Overview Button"/>
            </a>
            {/* <a href={pdf} target="_blank" download>
              <img className="StudentDownload" src={StudentDownloadButton} alt="Student Download Button"/>
            </a>
            <a href={pdf} target="_blank" download>
              <img className="TeacherDownload" src={TeacherDownloadButton} alt="Teacher Download Button"/>
            </a> */}

          </div>
          
            <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
            

            <label htmlFor = "chat">
                  <div className="StoreSnake"/>  
              </label>
              <input className = "InputStyle" type="checkbox" id = "chat"/>
              <div className = "ChatBoxContainer">
                <label htmlFor = "chat">
                  <img className = "chatClose" src = {ClosePop} alt = "Close"/>
                </label>
                <div className = "chatHBox">
                  <img className="chatbotImg" src={Snake} alt="Snake"/>
                </div>
                <div className = "chatQBox">
                  What do you need help with?
                </div>
                <div className = "chatABox">
                <input className = "InputStyle" type="checkbox" id = "Q1"/>
                  <div className = "chatCont" id = "QCont">
                    <label htmlFor = "Q1">
                      <div className = "chatRescQ1"/>
                    </label>
                  </div>
                  <div className = "chatCont" id = "A1">
                    <div className = "chatRescA1"/>
                    <div className = "chatATxt">
                    Clicking on the buttons lets you download EXTRA sksksk information about Dr Egg Adventures Laboratory WORLD!  
                    </div>                     
                    <label htmlFor = "Q1">
                      <div className = "chatBackBtn"/>
                    </label>
                  </div>
                </div>
              </div>
             
           </div>
    )
}
export default Resources
