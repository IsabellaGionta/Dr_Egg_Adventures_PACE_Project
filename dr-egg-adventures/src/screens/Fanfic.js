import React from 'react'
import btnback from '../images/btn-Back.png';
import btnbackglow from '../images/btn-Back-hover.png';
import snake from '../images/Snake.png';
import book from '../images/book.png';
import { useHistory } from "react-router-dom";

export const Fanfic = () => {

    const history = useHistory();

    const homeNav = () => {
        history.push('/lab');
    }

    return (
        <div className = "Lab-Background-Container">
            <div className = "book-container">
                <img className = "book" src = {book} alt = "book" />
            </div>
            <div className = "back-container"> 
                <img className = "Back-Button" 
                src = {btnback}
                onMouseOver = {e => e.currentTarget.src = btnbackglow}
                onMouseOut={e => e.currentTarget.src = btnback}
                alt = "home button" 
                onClick = {homeNav}/>  
            </div>
            <div className = "snake-container">
                <img className = "chatbot" src = {snake} alt = "chatbot" /> 
            </div> 
        </div>
    )
}
export default Fanfic