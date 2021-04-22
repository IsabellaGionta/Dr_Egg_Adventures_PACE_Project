import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Snake from '../images/Snake.png';
import Back from '../images/btn-Back.png';
import { useHistory } from "react-router-dom";





export const Contact = () => {

    let history = useHistory();


    const BackEventHandler = () => {
        history.push('/map')
      }

      return (
        <div className="Contact-Background-Container">
          <div className="Contact-Container">
 
            <Form className="Contact-Form">
              <h1 className="Contact-Title"> Dr Egg Adventures </h1>
              <h2 className="text-center"> Contact Form </h2>
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

            <img className="Back-Button characters" src={Back} onClick={BackEventHandler} alt="Back"/>
            <a href="/chatbot">
             <img className="Chatbot-Snake" src={Snake} alt="Snake"/>  
            </a>          
          </div>
        </div>
      );
    }
    
export default Contact