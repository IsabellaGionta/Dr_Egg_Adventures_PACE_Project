import {useState, React}from 'react'
import btnback from '../images/btn-Back.png';
import btnbackglow from '../images/btn-Back-hover.png';
import book from '../images/Book.png';
import arrowleft from '../images/btn-left.png';
import arrowright from '../images/btn-right.png';
import { useHistory } from "react-router-dom";
import Popup from '../components/SnakePopup.js';
import submit from '../images/btn-submit.png';
import fanfic from '../images/btn-fanfiction2.png';

//Glow Buttons
import arrowleftglow from '../images/btn-left-glow.png';
import arrowrightglow from '../images/btn-right-glow.png';
import submitglow from '../images/btn-submit-glow.png';
import fanficglow from '../images/btn-fanfic-glow2.png';

import Back from '../images/btn-Back.png';
import Snake from '../images/characters/Snake.png';
import { Helmet, HelmetProvider } from 'react-helmet-async';


export const Fanfic = () => {

    const history = useHistory();

    const homeNav = () => {
        history.push('/lab');
    }

    const submitNav = () => {
        history.push('/contact-form');
    }

    const [modalState, setModalState] = useState(true);

    return (
        <div className="OnlineStore-Background-Container">
      <HelmetProvider><Helmet>
        <title>Store Preview</title>
      </Helmet></HelmetProvider>
      <div className="OnlineStore-Container">
                <input className = "InputStyle" type="checkbox" id = "c1"/>
                <input className = "InputStyle" type="checkbox" id = "c2"/>
                <input className = "InputStyle" type="checkbox" id = "c3"/>                
                <div id = "bookCover">
                  <div className = "page1">
                  <h1 className = "book-heading">
                        Fanfiction 1
                    </h1>
                    <p className = "book-text">
                        [Stories written by kids, submitted.]
                    </p>
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
              <a href="/chatbot">
                  <img className="StoreSnake" src={Snake} alt="Snake"/>  
              </a>
              <a href = "/Map">
                <div className="StoreBack" src={Back} alt="Back"/>
              </a>

              <Popup trigger={modalState} setTrigger = {setModalState}>
                    <div className = "popup-background">
                        <img className = "SnakePopup" src={Snake} />
                        <p className="Snake-text">I have heard you enjoyed the world of Dr Eggs and want to write fanfictionssss.
                        Read some of the stories or submit your own. 
                        </p>
                        <div className = "popup-btn-container">
                            <img className = "popup-btn" src={submit} onClick = {submitNav} onMouseOver = {e => e.currentTarget.src = submitglow} onMouseOut={e => e.currentTarget.src = submit}/>
                            <img className = "popup-btn" src={fanfic} onClick = {() => setModalState(false)} onMouseOver = {e => e.currentTarget.src = fanficglow} onMouseOut={e => e.currentTarget.src = fanfic}/>
                        </div>
                    </div>
            </Popup>
              </div>
        
    )
}
export default Fanfic