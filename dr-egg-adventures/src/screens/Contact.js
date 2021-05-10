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

	const toggleModal = () => setModal(!modal);

	const BackEventHandler = () => {
		history.push('/map');
	};

	const handleFieldChange = (e, name) => {
		setForm({
			...form,
			[name]: e.target.value,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		console.log({ form });
		setLoading(true);
		const { data } = await axios.post('/send-form', form);
		console.log({ data });
		setResponse(data);
		setLoading(false);
		toggleModal();
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
							</FormGroup>
						</div>

						<Button className='Contact-Button'>
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
