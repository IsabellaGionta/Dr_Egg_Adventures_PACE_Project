import React from 'react';
import Back from '../images/btn-Back.png';
import Snake from '../images/Snake.png';
import { Button} from 'reactstrap';
import Blackboard from '../images/Blackboard.png';
import { useHistory } from "react-router-dom";



export const OnlineStore = () => {

    let history = useHistory();


    const BackEventHandler = () => {
        history.push('/map')

      }

    return (
            <div className="OnlineStore-Background-Container">
              <div className="OnlineStore-Container">
                <img class="Blackboard" src={Blackboard} />
                <Button className="OnlineStore-Button" onClick={() => { alert('Redirecting to Dr Egg Adventures Online Store Page!')}} >ENTER OUR ONLINE STORE </Button>
          
                <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
                <a href="/chatbot">
                  <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
                </a>
              </div>
            </div>
    )
}
export default OnlineStore

