import React from 'react';
import Back from '../images/btn-Back.png';
import Snake from '../images/Snake.png';
import { Button} from 'reactstrap';
import Book from '../images/Book.png';
import { useHistory } from "react-router-dom";



export const OnlineStore = () => {

    let history = useHistory();


    const BackEventHandler = () => {
        history.push('/map')

      }

    return (

      <div className="OnlineStore-Background-Container">
        <img class="BookStore" src={Book} alt = "Book"/>
        <Button className="OnlineStore-Button" onClick={() => 
        { alert('Redirecting to Dr Egg Adventures Online Store Page!'); window.location.href = "https://dreggadventures.com/shop/?v=6cc98ba2045f";}} >ENTER OUR ONLINE STORE </Button>
        <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
        <a href="/chatbot">
          <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a>
      </div>
    )
}
export default OnlineStore

