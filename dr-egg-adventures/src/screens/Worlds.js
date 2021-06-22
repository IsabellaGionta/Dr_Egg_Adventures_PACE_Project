import {useState, React}from 'react'
import techno from '../images/technoworld.png';
import farm from '../images/farmworld.png';
import slum from '../images/slumworld.png';
import button from '../images/btn-Back.png';
import Snake from '../images/characters/Snake.png';
import { useHistory } from "react-router-dom";

import farmworld from '../images/farmworld.png';
import slumworld from '../images/slumworld.png';
import technoworld from '../images/technoworld.png';
import egglab from '../images/egglab.png';
import seedcorp from '../images/seedcorp.png';
import Popup from '../components/SnakePopup.js';
import Back from '../images/btn-Back.png';
import LandscapePopup from '../components/Landscape.js';




import Card from '../components/Card.js';

export const Worlds = () => {

const [modalState, setModalState] = useState(true);
const [modalState2, setModalState2] = useState(true);



const history = useHistory();

const homeNav = () => {
    history.push('/map');
}

const technoNav = () => {
    history.push('/TechnoWorld');
}

const farmNav = () => {
    history.push('/FarmWorld');
}

const slumNav = () => {
    history.push('/SlumWorld');
}

    return (
        <div  className="Background-Container"> 
        <a href="/map">
         <img className="Back-Button characters" src={Back} alt="Back"/>
        </a>
            <a href="/farmworld1">
             <div className="card-container">
                <img className="farmworld1 world" src={farmworld} />

            </div>
            </a>

            <a href="/slumworld1">
                <div className="card-container">
 
                    <img className="slumworld1 world" src={slumworld} />

                </div>
            </a>
            
            <a href="/seedcorp1">
                <div className="card-container">

                    <img className="seedcorp1 world" src={seedcorp} />

                </div>
            </a>

            <a href="/egglab1">
                <div className="card-container">

                    <img className="egglab1 world" src={egglab} />

                </div>
            </a>


            <a href="/technoworld1">
                <div className="card-container">

                    <img className="technoworld1 world" src={technoworld} />

                </div>

            </a>

            {/* <a href="/farmworld1">
             <div className="farmworld world">
                <Card 
                imageUrl= {farmworld}
                /> 
            </div>
            </a>

            <a href="/slumworld1">
                <div className="slumworld world">
                    <Card className="slumworld-img"
                    imageUrl= {slumworld}
                    /> 
                </div>
            </a>
            
            <a href="/seedcorp1">
                <div className="seedcorp world">
                    <Card className="seedcorp"
                    imageUrl= {seedcorp}
                    /> 
                </div>
            </a>

            <a href="/egglab1">
                <div className="egglab world">
                    <Card className="egglab"
                    imageUrl= {egglab}
                    /> 
                </div>
            </a>


            <a href="/technoworld1">
                <div className="technoworld world">
                    <Card className="technoworld"
                    imageUrl= {technoworld}
                    /> 
                </div>

            </a> */}


                <Popup trigger={modalState} setTrigger = {setModalState}>
                    <div className = "popup-background">
                        <img className = "SnakePopup" src={Snake} />
                        <p className="Snake-text"> In sprawled out, windy slum world, starvation and food shortages are every day occurences. The poor inhabittants suffer as Dr Mole ruthlessly seeks to control the food supplies. In the scary backstreets, roam gangs of "dumped" mutant thugs, the result of Dr Mole's experiments on children and animals. Anyone can become the thugs' unsuspecting quarry, and be kidnapped for auction at the notorious and scary Mutant and Body Parts Black Market. </p>
                    </div>
                </Popup>

                {/* <LandscapePopup trigger={modalState2} setTrigger = {setModalState2}>
                    <div className = "popup-background">
                        <p className="Landscape-text"> For a better viewing experience, turn device to Landscape view. </p>
                    </div>
                </LandscapePopup> */}
                <a href="/chatbot">
           <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
        </a> 
        </div>
    )
}
export default Worlds
