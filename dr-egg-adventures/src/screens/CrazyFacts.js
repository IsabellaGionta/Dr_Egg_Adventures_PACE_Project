import {useState, React}from 'react'
import btnback from '../images/btn-Back.png';
import btnbackglow from '../images/btn-Back-hover.png';
import book from '../images/Book.png';
import fact1 from '../images/fact-img.png';
import fact2 from '../images/fact-img2.png';
import arrowleft from '../images/btn-left.png';
import arrowright from '../images/btn-right.png';
import { useHistory } from "react-router-dom";
import Popup from '../components/SnakePopup.js';
import Continue from '../images/btn-continue.png';
import ardash from '../images/ardash-thinking.png';

//Glow Buttons
import arrowleftglow from '../images/btn-left-glow.png';
import arrowrightglow from '../images/btn-right-glow.png';
import Continueglow from '../images/btn-continue-glow.png';

import Back from '../images/btn-Back.png';
import Snake from '../images/characters/Snake.png';
import { Helmet, HelmetProvider } from 'react-helmet-async';



export const CrazyFacts = () => {

    const history = useHistory();

    const homeNav = () => {
        history.push('/lab');
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
                  <div className = "imgPageCoverContainer">
                  <h1 className = "book-heading">Science Breakthrough</h1>
                    <p className = "book-text">A young girl called Mary Anning was a fossil collecter and a paleontologist in the 1800's. Don't you know what that means?
                    I didn't either, but apparently it is someone who studies the fossils of the past. At the age of 12, she discovered the first
                    Temnodontosaurus platyodon skeleton. Apparently, it is some kind of ichthyosaur from Jurassic times! It looks kind of like a 
                    dolphin, don't you think?
                    </p>
                    <img className = "fact" src = {fact1}/>
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
                        <p className = "book-text"> That wasn't her only discovery though! When she turned 24, she discovered the first Plesiosaurus skeleton.
                        I like to think of them as big, angry turtles, with big teeth. How cool!
                        </p>
                        <img className = "fact2" src = {fact2}/>
                        <p className = "book-text"> Unfortunately nobody recognised her much in her day, but now two species of fish are named after Mary!
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
                        <img className = "ardash-popup" src={ardash} />
                        <p className="Snake-text">'I've been researching some scientists from your world, and I thought I'd share what I found with you guys.' 
                        </p>
                        <div className = "popup-btn-container">
                            <img className = "popup-btn" src={Continue} onClick = {() => setModalState(false)} onMouseOver = {e => e.currentTarget.src = Continueglow} onMouseOut={e => e.currentTarget.src = Continue}/>
                        </div>
                    </div>
            </Popup>
            </div>
       
    )
}

export default CrazyFacts