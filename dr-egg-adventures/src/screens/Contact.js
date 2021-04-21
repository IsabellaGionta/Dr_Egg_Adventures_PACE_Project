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
 
          <Form className="form">
            <h1 className="Title"> Dr Egg Adventures </h1>
            <h2 className="text-center"> Contact Form </h2>
            <div className="FormGroup">
          <FormGroup>
            <div className="label"> <Label> Full Name </Label> </div>
              <Input  type="FullName" />
            </FormGroup>
            </div>

            <div className="FormGroup">
            <FormGroup>
              <div className="label"> <Label>Email</Label> </div>
              <Input  type="email" name="email" id="Email" />
            </FormGroup>
          </div> 

          <div className="FormGroup">
            <FormGroup>
              <div className="label"><Label>Message</Label></div>
              <Input className="messageBox" type="textarea" name="text" id="message" />
            </FormGroup>
            </div>
            
            <Button className="ContactButton"><span className="text"> SUBMIT </span></Button>
          </Form>

          <img className="back characters" src={Back} onClick={BackEventHandler} alt="Back"/>
          <a href="/chatbot">
           <img className="snake" src={Snake} alt="Snake"/>  
           </a>          
           </div>

        </div>
        

      );
    }
    
export default Contact


{/* <Container className="Contact-Container">
<Row className="justify-content-md-center">
  <Col xs={12} md={6}>

<Form className="form">
<Form.Group controlid="FullName">
  <Form.Label> Full Name </Form.Label>
  <Form.Control type="FullName" placeholder="Type Your Full Name Here"> </Form.Control>
</Form.Group>

<Form.Group controlid="Email">
  <Form.Label>  Email </Form.Label>
  <Form.Control type="Email" placeholder="Type Your Email Here"> </Form.Control>
</Form.Group>

<Form.Group controlid="Message">
  <Form.Label> Message </Form.Label>
  <Form.Control type="Message" placeholder="Type Your Message Here"> </Form.Control>
</Form.Group>

<Button>Submit</Button>

</Form>
</Col>
</Row>
<img className="back characters" src={Back} onClick={BackEventHandler} alt="Back"/>
<img className="snake" src={Snake} alt="Snake"/>     
</Container> */}