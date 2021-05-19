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


import Card from '../components/Card.js';

export const Worlds = () => {

const [modalState, setModalState] = useState(false);


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
            <a href="/farmworld">
             <div className="farmworld">
                <Card 
                imageUrl= {farmworld}
                /> 
            </div>
            </a>

            <a href="/slumworld">
                <div className="slumworld">
                    <Card className="slumworld"
                    imageUrl= {slumworld}
                    /> 
                </div>
            </a>
            
            <a href="/seedcorp">
                <div className="seedcorp">
                    <Card className="seedcorp"
                    imageUrl= {seedcorp}
                    /> 
                </div>
            </a>

            <a href="/egglab">
                <div className="egglab">
                    <Card className="egglab"
                    imageUrl= {egglab}
                    /> 
                </div>
            </a>


            <a href="/technoworld">
                <div className="technoworld">
                    <Card className="technoworld"
                    imageUrl= {technoworld}
                    /> 
                </div>

            </a>

            <img className="Snake"src={Snake} onClick={() => setModalState(true) } /> 

                {/* onClick={() => manageState() } />  */}



                <Popup trigger={modalState} setTrigger = {setModalState}>
                    <div className = "popup-background">
                        <img className = "SnakePopup" src={Snake} />
                        <p className="Snake-text"> In sprawled out, windy slum world, starvation and food shortages are every day occurences. The poor inhabittants suffer as Dr Mole ruthlessly seeks to control the food supplies. In the scary backstreets, roam gangs of "dumped" mutant thugs, the result of Dr Mole's experiments on children and animals. Anyone can become the thugs' unsuspecting quarry, and be kidnapped for auction at the notorious and scary Mutant and Body Parts Black Market. </p>
                    </div>
                </Popup>

        </div>
    )
}
export default Worlds
