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
import Snake from '../images/Snake.png';
import Back from '../images/btn-Back.png';
import Blackboard from '../images/Blackboard.png';
import { useHistory } from 'react-router-dom';
import axios from '../axios';
import '../assets/css/modal.css';
import '../assets/css/spinner.css';
import LoadScreen from '../components/LoadScreen';
import styled from 'styled-components';

const ErrorMsg = styled.span`
	display: block;
	color: red;
	margin-top: 5px;
`;

export const Contact = () => {
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
		history.push('/map');
	};

	const validateForm = form => {
		const errors = {};
		if (!form.name) {
			errors.name = 'Name cannot be empty.';
		}

		if (!form.email) {
			errors.email = 'Email cannot be empty.';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)
		) {
			errors.email = 'Email format is wrong.';
		}

		if (!form.message) {
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

		validateForm(newValue);
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
					{/* <h1 className="Contact-Title"> Dr Egg Adventures </h1> */}

					<Form className='Contact-Form' onSubmit={handleSubmit}>
						<h2 className='Contact-Title'> Contact Form </h2>

						{/* <h1 className="Contact-Title"> Dr Egg Adventures </h1> */}
						<div className='Contact-FormGroup'>
							<FormGroup>
								<div className='Contact-Label'>
									{' '}
									<Label> Full Name </Label>{' '}
								</div>
								<Input
									type='FullName'
									required
									value={form['name']}
									onChange={e => handleFieldChange(e, 'name')}
								/>
								{errors && errors.name && (
									<ErrorMsg>{errors.name}</ErrorMsg>
								)}
							</FormGroup>
						</div>
						<div className='Contact-FormGroup'>
							<FormGroup>
								<div className='Contact-Label'>
									{' '}
									<Label>Email</Label>{' '}
								</div>
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
							</FormGroup>
						</div>

						<div className='Contact-FormGroup'>
							<FormGroup>
								<div className='Contact-Label'>
									<Label>Message</Label>
								</div>
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
									<ErrorMsg>{errors.message}</ErrorMsg>
								)}
							</FormGroup>
						</div>

						<Button
							className='Contact-Button'
							disabled={
								Object.keys(errors).length ? true : false
							}>
							<span className='text'> SUBMIT </span>
						</Button>
					</Form>

					<div className='Contact-Info'>
						<p> MOBILE NUMBER: +61 0415 442 209 </p>
						<p> PHONE NUMBER: +61 02 9314 5121</p>
						<p>
							{' '}
							ADDRESS: Dr Egg Digital - The Dr Egg Adventures
							Project{' '}
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

					<img
						className='Back-Button characters'
						src={Back}
						onClick={BackEventHandler}
						alt='Back'
					/>
					<a href='/chatbot'>
						<img
							className='Chatbot-Snake'
							src={Snake}
							alt='Snake'
						/>
					</a>
				</div>
			</div>
			<LoadScreen visible={loading} />
			<Modal isOpen={modal} toggle={toggleModal}>
				<ModalHeader toggle={toggleModal}>
					{response.status ? 'Oops!' : 'Thank you!'}{' '}
				</ModalHeader>
				<ModalBody>{response.msg}</ModalBody>
				<ModalFooter>
					<Button color='primary' onClick={toggleModal}>
						Confirm
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default Contact;
