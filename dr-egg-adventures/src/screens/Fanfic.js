import {useState, React}from 'react'
import { useHistory } from "react-router-dom";
import Popup from '../components/SnakePopup.js';
import submit from '../images/btn-submit.png';
import fanfic from '../images/btn-fanfiction2.png';
import ClosePop from "../images/close-popup.png"

//Glow Buttons
import submitglow from '../images/btn-submit-glow.png';
import fanficglow from '../images/btn-fanfic-glow2.png';

import Back from '../images/btn-Back.png';
import Snake from '../images/characters/Snake.png';
import { Helmet, HelmetProvider } from 'react-helmet-async';


export const Fanfic = () => {

    const history = useHistory();

    const submitNav = () => {
        history.push('/contact-form');
    }

    const [modalState, setModalState] = useState(true);

    return (
        <div className="OnlineStore-Background-Container">
      <HelmetProvider><Helmet>
        <title>Fanfiction</title>
      </Helmet></HelmetProvider>
      <div className="OnlineStore-Container">
                <input className = "InputStyle" type="checkbox" id = "c1"/>
                <input className = "InputStyle" type="checkbox" id = "c2"/>
                <input className = "InputStyle" type="checkbox" id = "c3"/>                
                <div id = "bookCover">
                  <div className = "imgPageCoverContainer">
                  <div className = "fact1Container">
                  <h1 className = "book-heading">
                        Fanfiction 1
                    </h1>
                    <p className = "book-text">
                        [Stories written by kids, submitted.]
                    </p>
                    </div>
                  </div>
                </div>
                <div className = "pageContainer">

                  <div className = "page" id = "p1">
                    <div className = "backPageContainer">
                      <div className = "backPage">
                      </div>
                      <label htmlFor = "c1"><div className="backBtn"/></label>
                    </div>
                    <div className = "frontPageContainer">
                      <div className = "frontPage">
                      <div className = "bookTxt">
                      <h1 className = "book-heading">
                        Fanfiction 2
                    </h1>
                    <p className = "book-text">
                        [Stories written by kids, submitted.]
                    </p>
                    </div>
                      </div>
                      <label htmlFor = "c1"><div className="nextBtn"/></label>
                    </div>
                  </div>

                  <div className = "page" id = "p2">
                    <div className = "backPageContainer">
                      <div className = "backPage">
                        
                      </div>
                      <label htmlFor = "c2"><div className="backBtn"/></label>
                    </div>
                    <div className = "frontPageContainer">
                      <div className = "frontPage">
                        <div className = "bookTxt">
                        
                        </div>
                      </div>
                      <label htmlFor = "c2"><div className="nextBtn"/></label>
                    </div>
                  </div>

                  <div className = "page" id = "p3">
                    <div className = "backPageContainer">
                    <div className = "backPage">
                        
                    </div>
                      <label htmlFor = "c3"><div className="backBtn"/></label>
                    </div>
                    <div className = "frontPageContainer">
                      <div className = "frontPage">
                      <div className = "bookTxt">
                        
                      </div>
                      </div>
                      <label htmlFor = "c3"><div className="nextBtn"/></label>
                    </div>
                  </div>

                </div>
              </div>
              <a href = "/Lab">
                <div className="StoreBack" src={Back} alt="Back"/>
              </a>

              <Popup trigger={modalState} setTrigger = {setModalState}>
                    <div className = "popup-background">
                        <img className = "SnakePopup" src={Snake} alt = "Snake" />
                        <p className="Snake-text">I have heard you enjoyed the world of Dr Eggs and want to write fanfictionssss.
                        Read some of the stories or submit your own. 
                        </p>
                        <div className = "popup-btn-container">
                            <img className = "popup-btn" src={submit} onClick = {submitNav} onMouseOver = {e => e.currentTarget.src = submitglow} onMouseOut={e => e.currentTarget.src = submit} alt = "Submit"/>
                            <img className = "popup-btn" src={fanfic} onClick = {() => setModalState(false)} onMouseOver = {e => e.currentTarget.src = fanficglow} onMouseOut={e => e.currentTarget.src = fanfic} alt = "Fan Fiction"/>
                        </div>
                    </div>
            </Popup>


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
                <input className = "InputStyle" type="checkbox" id = "Q2"/>
                  <div className = "chatCont" id = "QCont">
                    <label htmlFor = "Q1">
                      <div className = "chatFFQ1"/>
                    </label>
                    <label htmlFor = "Q2">
                      <div className = "chatFFQ2"/>
                    </label>
                  </div>
                  <div className = "chatCont" id = "A1">
                    <div className = "chatFFA1"/>
                    <div className = "chatATxt">
                    HUMAN! Do you like writing? sksksk.. I sure do like reading them! Humans are interesting. Try clicking on the “SUBMIT” button to submit your own INTERESTING story for other humans like you do read!                    </div>                     
                    <label htmlFor = "Q1">
                      <div className = "chatBackBtn"/>
                    </label>
                  </div>
                  <div className = "chatCont" id = "A2">
                    <div className = "chatFFA2"/>
                    <div className = "chatATxt">
                    sksksk.. I LOVE reading what other humans have submitted to read. Try clicking on the “FAN FICTION” button to read what other humans submitted!                    </div>                     
                    <label htmlFor = "Q2">
                      <div className = "chatBackBtn"/>
                    </label>
                  </div>
                </div>
              </div>

            </div>
        
    )
}
export default Fanfic