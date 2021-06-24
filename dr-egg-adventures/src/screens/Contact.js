import React from 'react';
import Snake from '../images/characters/Snake.png';
import Back from '../images/btn-Back.png';
import Blackboard from '../images/Blackboard.png';
import { useHistory } from 'react-router-dom';
import '../assets/css/modal.css';
import '../assets/css/spinner.css';
import ThemeButton from '../components/Button';
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
				<a href='/chatbot'>
					<img className='Chatbot-Snake' src={Snake} alt='Snake' />
				</a>
			</div>
		</div>
	);
};

export default Contact;
