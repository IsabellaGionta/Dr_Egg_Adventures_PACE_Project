import React from 'react';
import Snake from '../images/characters/Snake.png';
import Back from '../images/btn-Back.png';
import Blackboard from '../images/Blackboard.png';
import { useHistory } from 'react-router-dom';
import '../assets/css/modal.css';
import '../assets/css/spinner.css';
import ThemeButton from '../components/Button';
import ClosePop from "../images/close-popup.png"

export const Contact = () => {
	let history = useHistory();

	const BackEventHandler = () => {
		history.push('/map');
	};

	return (
		<div className='Contact-Background-Container'>
			<div className='Contact-Container'>
				<img
					className='Blackboard'
					src={Blackboard}
					alt='Blackboard'></img>
				<h1 className='Contact-Title'> Contact us </h1>
				<div className='Contact-Info'>
					<p>
						<b>EMAIL:</b> info@dreggadventures.com{' '}
					</p>
					<p>
						<b>ADDRESS:</b> Dr Egg Adventures
					</p>
					<p className='indent'> Macquarie University Incubator, </p>
					<p className='indent'>
						{' '}
						8 Hadenfeld Ave, NSW, 2109, Australia
					</p>
					<p>
						<b>WEBSITE:</b>{' '}
						<a href='www.dreggadventures.com'>
							{' '}
							www.dreggadventures.com
						</a>{' '}
					</p>
				</div>
				<ThemeButton
					fontSize={5}
					top={65}
					onClick={() => history.push('/contact-form')}>
					Form
				</ThemeButton>
				<img
					className='Back-Button characters'
					src={Back}
					onClick={BackEventHandler}
					alt='Back'
				/>
				<label htmlFor = "chat">
                  <div className="StoreSnake"/>  
              </label>
              <input className = "InputStyle" type="checkbox" id = "chat"/>
              <div className = "ChatBoxContainer">
                <label htmlFor = "chat">
                  <img className = "chatClose" src = {ClosePop} alt = "Close"/>
                </label>
                <div className = "chatHBox">
                  <img className="chatbotImg" src={Snake} alt="Snake"/>
                </div>
                <div className = "chatQBox">
                  What do you need help with?
                </div>
                <div className = "chatABox">
                <input className = "InputStyle" type="checkbox" id = "Q1"/>
                  <div className = "chatCont" id = "QCont">
                    <label htmlFor = "Q1">
                      <div className = "chatContactQ1"/>
                    </label>
                  </div>
                  <div className = "chatCont" id = "A1">
                    <div className = "chatContactA1"/>
                    <div className = "chatATxt">
					human, human, what else are you suppose to do on this page? Do YOU have any questions? Find any errors? Well do the deed human and contact Dr Egg Adventures using the contact form! sksk... I’ll see you on the other side.
					</div>                     
                    <label htmlFor = "Q1">
                      <div className = "chatBackBtn"/>
                    </label>
                  </div>
                </div>
              </div>
			</div>
		</div>
	);
};

export default Contact;
