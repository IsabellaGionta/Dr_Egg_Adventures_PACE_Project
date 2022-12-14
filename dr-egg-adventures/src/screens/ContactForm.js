import React, { useState } from 'react';
import {
	Form,
	FormGroup,
	Label,
	Input,
	Modal,
	ModalBody,
	ModalHeader,
} from 'reactstrap';
import Back from '../images/btn-Back.png';
import Blackboard from '../images/Blackboard.png';
import { useHistory } from 'react-router-dom';
import axios from '../axios';
import '../assets/css/modal.css';
import '../assets/css/spinner.css';
import LoadScreen from '../components/LoadScreen';
import styled from 'styled-components';
import ThemeButton from '../components/Button';
import CorneliaFace from '../assets/images/CorneliaFace.png';

const ErrorMsg = styled.span`
	display: block;
	color: red;
	margin-top: 5px;
`;

const FixedWrapper = styled.div`
	position: absolute;
	top: 12%;
	left: 14%;
	right: 13%;
	bottom: 10%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;

const ContactTitle = styled.h1`
	font-family: Polaris;
	text-transform: uppercase;
	left: 14%;
	right: 13%;
	font-size: 5vh;
	text-align:center;
	color: #fff;
`;

export const ContactForm = () => {
	let history = useHistory();

	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [modal, setModal] = useState(false);
	const [response, setResponse] = useState({
		status: 0,
		msg: '',
	});
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({
		name: '',
		email: '',
		message: '',
	});

	const toggleModal = () => setModal(!modal);

	const BackEventHandler = () => {
		history.go(-1);
	};

	const validateForm = (field, form) => {
		const errors = {};
		if (!form.name && field === 'name') {
			errors.name = 'Name cannot be empty.';
		}

		if (field === 'email') {
			if (!form.email) {
				errors.email = 'Email cannot be empty.';
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)
			) {
				errors.email = 'Email format is wrong.';
			}
		}

		if (!form.message && field === 'message') {
			errors.message = 'Message cannot be empty.';
		}
		setErrors(errors);

		return errors;
	};

	const handleFieldChange = (e, name) => {
		const newValue = {
			...form,
			[name]: e.target.value,
		};
		setForm(newValue);

		validateForm(name, newValue);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		console.log({ form });

		// if there is no errors
		if (!Object.keys(errors).length) {
			setLoading(true);

			const { data } = await axios.post('/send-form', form);
			console.log({ data });
			setResponse(data);
			setLoading(false);
			toggleModal();

			// reset the form
			setForm({
				name: '',
				email: '',
				message: '',
			});
		}
	};

	return (
		<>
			<div className='Contact-Background-Container'>
				<div className='Contact-Container'>
					<img
						className='Blackboard'
						src={Blackboard}
						alt='Blackboard'></img>

					<FixedWrapper>
						<ContactTitle>Contact Form</ContactTitle>
						<Form
							className='Contact-Form'
							onSubmit={handleSubmit}
							>
							{/* <h1 className="Contact-Title"> Dr Egg Adventures </h1> */}
							<div className='Contact-FormGroup'>
								<FormGroup>
									<div className='Contact-Label'>
										{' '}
										<Label className = "MLabel"> Full Name </Label>{' '}
									</div>
									<div className='input-wrapper'>
										<Input
											type='FullName'
											required
											value={form['name']}
											onChange={e =>
												handleFieldChange(e, 'name')
											}
										/>
										{errors && errors.name && (
											<ErrorMsg>{errors.name}</ErrorMsg>
										)}
									</div>
								</FormGroup>
							</div>
							<div className='Contact-FormGroup'>
								<FormGroup>
									<div className='Contact-Label'>
										{' '}
										<Label className = "MLabel">Email</Label>{' '}
									</div>
									<div className='input-wrapper'>
										<Input
											type='email'
											name='email'
											id='Email'
											required
											value={form['email']}
											onChange={e =>
												handleFieldChange(e, 'email')
											}
										/>
										{errors && errors.email && (
											<ErrorMsg>{errors.email}</ErrorMsg>
										)}
									</div>
								</FormGroup>
							</div>

							<div className='Contact-FormGroup'>
								<FormGroup>
									<div className='Contact-Label'>
										<Label className = "MLabel">Message</Label>
									</div>
									<div className='input-wrapper'>
										<Input
											className='Contact-MessageBox'
											type='textarea'
											name='text'
											id='message'
											required
											value={form['message']}
											onChange={e =>
												handleFieldChange(e, 'message')
											}
										/>
										{errors && errors.message && (
											<ErrorMsg>
												{errors.message}
											</ErrorMsg>
										)}
									</div>
								</FormGroup>
							</div>

							{/* <Button
							className='Contact-Button'
							disabled={
								Object.keys(errors).length ? true : false
							}>
							<span className='text'> SUBMIT </span>
						</Button> */}
						<ThemeButton
							fontSize={5}
							bottom = {0}
							disabled={
								Object.keys(errors).length ? true : false
							}>
							Submit
						</ThemeButton>
					</Form>
					</FixedWrapper>

					<img
						className='Back-Button characters'
						src={Back}
						onClick={BackEventHandler}
						alt='Back'
					/>
				</div>
			</div>
			<LoadScreen visible={loading} />
			<Modal
				isOpen={modal}
				toggle={toggleModal}
				className='contact-modal'>
				<ModalHeader toggle={toggleModal}></ModalHeader>
				<ModalBody className='body'>
					<img src={CorneliaFace} width='200' height='auto' alt = "Cornelia"/>
					<h2>{response.status ? 'Oops!' : 'Thank you!'}</h2>
					<p>
						{response.status
							? 'Something went wrong.'
							: 'Your form has been submitted.'}
					</p>
				</ModalBody>
			</Modal>
		</>
	);
};

export default ContactForm;
