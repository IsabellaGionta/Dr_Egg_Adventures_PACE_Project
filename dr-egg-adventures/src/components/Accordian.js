import React, {useState, useRef} from 'react';
import './Accordian.css';
import {Button} from 'reactstrap';
import Chevron from './Chevron.js';

export const Accordian = (props) => {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordian_icon");

    const content = useRef(null);


    const toggleAccordian = () => {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setRotateState(setActive === "active" ? "accordian_icon" : "accordian_icon rotate");
    }
  
    return (
        <div classname="accordian_section" >
            <Button className={`accordian ${setActive}`} onClick={toggleAccordian}> 
                <p className="accordian_title"> {props.title} </p>
                <Chevron className={`${setRotate}`} width={10} fill={'#777'} />
            </Button>

            <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordian_content">
                <div className="accordian_text"
                    dangerouslySetInnerHTML={{__html: props.content }} >
                </div>
            
            </div>
        </div>

    )
}

export default Accordian