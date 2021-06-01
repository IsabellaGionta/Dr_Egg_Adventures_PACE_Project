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

export const CrazyFacts = () => {

    const history = useHistory();

    const homeNav = () => {
        history.push('/lab');
    }

    const [modalState, setModalState] = useState(true);

    return (
        <div className = "Lab-Background-Container">
            <div className = "book-container">
                <img className = "book" src = {book} alt = "book" />
                <div className = "page1">
                    <h1 className = "book-heading">Science Breakthrough</h1>
                    <p className = "book-text">A young girl called Mary Anning was a fossil collecter and a paleontologist in the 1800's. Don't you know what that means?
                    I didn't either, but apparently it is someone who studies the fossils of the past. At the age of 12, she discovered the first
                    Temnodontosaurus platyodon skeleton. Apparently, it is some kind of ichthyosaur from Jurassic times! It looks kind of like a 
                    dolphin, don't you think?
                    </p>
                    <img className = "fact" src = {fact1}/>
                </div>
                <div className = "page2">
                    <p className = "book-text"> That wasn't her only discovery though! When she turned 24, she discovered the first Plesiosaurus skeleton.
                    I like to think of them as big, angry turtles, with big teeth. How cool!
                    </p>
                    <img className = "fact" src = {fact2}/>
                    <p className = "book-text"> Unfortunately nobody recognised her much in her day, but now two species of fish are named after Mary!
                    </p>
                </div>
            </div>
            <div className = "back-container"> 
                <img className = "Back-Button" 
                src = {btnback}
                onMouseOver = {e => e.currentTarget.src = btnbackglow}
                onMouseOut={e => e.currentTarget.src = btnback}
                alt = "home button" 
                onClick = {homeNav}/>  
            </div>
            <img className = "left-turn" src = {arrowleft}/>
            <img className = "right-turn" src = {arrowright}/>

            <Popup trigger={modalState} setTrigger = {setModalState}>
                    <div className = "popup-background">
                        <img className = "ardash-popup" src={ardash} />
                        <p className="Snake-text">'I've been researching some scientists from your world, and I thought I'd share what I found with you guys.' 
                        </p>
                        <div className = "popup-btn-container">
                            <img className = "popup-btn" src={Continue} onClick = {() => setModalState(false)}/>
                        </div>
                    </div>
            </Popup>
        </div>
    )
}
export default CrazyFacts