import React from 'react';
import Snake from '../images/characters/Snake.png';
import Back from '../images/btn-Back.png';
import Blackboard from '../images/Blackboard.png';
import { useHistory } from 'react-router-dom';
import '../assets/css/modal.css';
import '../assets/css/spinner.css';
import ThemeButton from '../components/Button';
import ClosePop from '../images/close-popup.png';
import styled from 'styled-components';

const ContactInfo = styled.div`
	font-family: museo sans;
	position: absolute;
	top: 30%;
	left: 0;
	right: 0;
	margin: 0 auto;
	color: white;
	font-size: 3vh;
	display: flex;
	justify-content: center;
`;

const Title = styled.h1`
	font-family: Polaris;
	text-transform: uppercase;
	font-size: 5vh;
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;
	top: 20%;
	color: #fff;
	display: flex;
	justify-content: center;
`;

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
				<Title className='Contact-Title'> Contact us </Title>
				<ContactInfo>
					<div>
						<p style={{ marginBottom: 20 }}>
							<b>EMAIL:</b> info@dreggadventures.com{' '}
						</p>
						<p style={{ marginBottom: 20 }}>
							<b>ADDRESS:</b> Dr Egg Adventures,
							<p>Macquarie University Incubator,</p>
							<p>8 Hadenfeld Ave, NSW, 2109, Australia</p>
						</p>
						<p>
							<b>WEBSITE:</b>{' '}
							<a href='www.dreggadventures.com'>
								{' '}
								www.dreggadventures.com
							</a>{' '}
						</p>
					</div>
				</ContactInfo>
				<ThemeButton
					fontSize={5}
					bottom={10}
					onClick={() => history.push('/contact-form')}>
					Form
				</ThemeButton>
				<img
					className='Back-Button characters'
					src={Back}
					onClick={BackEventHandler}
					alt='Back'
				/>
				<label htmlFor='chat'>
					<div className='StoreSnake' />
				</label>
				<input className='InputStyle' type='checkbox' id='chat' />
				<div className='ChatBoxContainer'>
					<label htmlFor='chat'>
						<img className='chatClose' src={ClosePop} alt='Close' />
					</label>
					<div className='chatHBox'>
						<img className='chatbotImg' src={Snake} alt='Snake' />
					</div>
					<div className='chatQBox'>What do you need help with?</div>
					<div className='chatABox'>
						<input className='InputStyle' type='checkbox' id='Q1' />
						<div className='chatCont' id='QCont'>
							<label htmlFor='Q1'>
								<div className='chatContactQ1' />
							</label>
						</div>
						<div className='chatCont' id='A1'>
							<div className='chatContactA1' />
							<div className='chatATxt'>
								human, human, what else are you suppose to do on
								this page? Do YOU have any questions? Find any
								errors? Well do the deed human and contact Dr
								Egg Adventures using the contact form! sksk...
								I???ll see you on the other side.
							</div>
							<label htmlFor='Q1'>
								<div className='chatBackBtn' />
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
