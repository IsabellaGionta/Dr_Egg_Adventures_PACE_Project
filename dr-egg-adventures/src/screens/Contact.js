import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Snake from '../images/Snake.png';
import Back from '../images/btn-Back.png';
import Blackboard from '../images/Blackboard.png';
import { useHistory } from "react-router-dom";





export const Contact = () => {

    let history = useHistory();


    const BackEventHandler = () => {
        history.push('/map')
      }

      return (
        <div className="Contact-Background-Container">
          <div className="Contact-Container">
            <img className="Blackboard" src={Blackboard} alt="Blackboard"></img>
            {/* <h1 className="Contact-Title"> Dr Egg Adventures </h1> */}

 
            <Form className="Contact-Form">
            <h2 className="Contact-Title"> Contact Form </h2>

              {/* <h1 className="Contact-Title"> Dr Egg Adventures </h1> */}
              <div className="Contact-FormGroup">
                <FormGroup>
                  <div className="Contact-Label"> <Label> Full Name </Label> </div>
                    <Input  type="FullName" />
                  </FormGroup>
              </div>
              <div className="Contact-FormGroup">
                <FormGroup>
                  <div className="Contact-Label"> <Label>Email</Label> </div>
                    <Input  type="email" name="email" id="Email" />
                </FormGroup>
              </div> 

              <div className="Contact-FormGroup">
                <FormGroup>
                  <div className="Contact-Label"><Label>Message</Label></div>
                    <Input className="Contact-MessageBox" type="textarea" name="text" id="message" />
                </FormGroup>
              </div>
                
              <Button className="Contact-Button"><span className="text"> SUBMIT </span></Button>
            </Form>

            <div className="Contact-Info" >
              <p> MOBILE NUMBER: +61 0415 442 209 </p>
              <p> PHONE NUMBER: +61 02 9314 5121</p>
              <p> ADDRESS: Dr Egg Digital - The Dr Egg Adventures Project </p>
              <p className="indent"> City of Sydney Cultural Precint Office </p>
              <p className="indent"> Suite, 1, Level 22, 66 Oxford Street </p>
              <p className="indent"> East Sydney, NSW, Australia, 2010 </p>
              <p> WEBSITE: <a href="www.dreggadventures.com"> www.dreggadventures.com </a> </p>
            </div>

            <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
            <a href="/chatbot">
             <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
            </a>          
          </div>
        </div>
      );
    }
    
export default Contact