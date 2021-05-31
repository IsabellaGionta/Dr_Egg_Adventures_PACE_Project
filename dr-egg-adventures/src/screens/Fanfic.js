import {useState, React}from 'react'
import btnback from '../images/btn-Back.png';
import btnbackglow from '../images/btn-Back-hover.png';
import book from '../images/Book.png';
import arrowleft from '../images/btn-left.png';
import arrowright from '../images/btn-right.png';
import { useHistory } from "react-router-dom";
import Popup from '../components/SnakePopup.js';
import Snake from '../images/characters/Snake.png';
import submit from '../images/btn-submit.png';
import fanfic from '../images/btn-fanfiction2.png';

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
        <div className = "Lab-Background-Container">
            <div className = "book-container">
                <img className = "book" src = {book} alt = "book" />
                <div className = "page1">
                    <h1 className = "book-heading">
                        Fanfiction 1
                    </h1>
                    <p className = "book-text">
                        [Stories written by kids, submitted.]
                    </p>
                </div>
                <div className = "page2">
                    <h1 className = "book-heading">
                        Fanfiction 2
                    </h1>
                    <p className = "book-text">
                        [Stories written by kids, submitted.]
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
                        <img className = "SnakePopup" src={Snake} />
                        <p className="Snake-text">I have heard you enjoyed the world of Dr Eggs and want to write fanfictionssss.
                        Read some of the stories or submit your own. 
                        </p>
                        <div className = "popup-btn-container">
                            <img className = "popup-btn" src={submit} onClick = {submitNav} />
                            <img className = "popup-btn" src={fanfic} onClick = {() => setModalState(false)}/>
                        </div>
                    </div>
            </Popup>
        </div>
    )
}
export default Fanfic