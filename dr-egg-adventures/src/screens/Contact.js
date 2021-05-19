import React, { useState } from 'react';
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Modal,
	ModalBody,
	ModalHeader,
	ModalFooter,
} from 'reactstrap';
import Snake from '../images/characters/Snake.png';
import Back from '../images/btn-Back.png';
import Blackboard from '../images/Blackboard.png';
import { useHistory } from 'react-router-dom';
import axios from '../axios';
import '../assets/css/modal.css';
import '../assets/css/spinner.css';
import LoadScreen from '../components/LoadScreen';
import styled from 'styled-components';
import ThemeButton from '../components/Button';

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
					<p> MOBILE NUMBER: +61 0415 442 209 </p>
					<p> PHONE NUMBER: +61 02 9314 5121</p>
					<p>
						{' '}
						ADDRESS: Dr Egg Digital - The Dr Egg Adventures Project{' '}
					</p>
					<p className='indent'>
						{' '}
						City of Sydney Cultural Precint Office{' '}
					</p>
					<p className='indent'>
						{' '}
						Suite, 1, Level 22, 66 Oxford Street{' '}
					</p>
					<p className='indent'>
						{' '}
						East Sydney, NSW, Australia, 2010{' '}
					</p>
					<p>
						{' '}
						WEBSITE:{' '}
						<a href='www.dreggadventures.com'>
							{' '}
							www.dreggadventures.com{' '}
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
				<a href='/chatbot'>
					<img className='Chatbot-Snake' src={Snake} alt='Snake' />
				</a>
			</div>
		</div>
	);
};

export default Contact;
