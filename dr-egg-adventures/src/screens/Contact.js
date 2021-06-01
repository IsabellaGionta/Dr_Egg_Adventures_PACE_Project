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
				<a href='/chatbot'>
					<img className='Chatbot-Snake' src={Snake} alt='Snake' />
				</a>
			</div>
		</div>
	);
};

export default Contact;
