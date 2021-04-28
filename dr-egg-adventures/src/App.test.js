import { render } from '@testing-library/react';
import Contact from './screens/Contact';
import Map from './screens/Map';

test('Navigate to the Contact screen from Map screen', () => {
	render(<Map />);

	// click contact button
	const contactBtn = document.getElementsByTagName('area')[4];
	const mockClickEvent = jest.fn();
	contactBtn.onclick = mockClickEvent;
	contactBtn.click();

	// check if button has been clicked
	expect(mockClickEvent.mock.calls.length).toEqual(1);

	// https://github.com/facebook/jest/issues/5124
	history.replaceState({}, 'Contact', contactBtn.href);

	// check if url matches
	expect(window.location.pathname).toEqual('/contact');
});

test('Submit form - Enter an incorrect email', () => {
	render(<Contact />);

	// get three form fields
	const inputs = document.querySelectorAll('input');
	const name = inputs[0];
	const email = inputs[1];
	const msg = document.querySelector('textarea');

	name.value = 'abc';
	email.value = 'tester1';
	msg.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';

	const form = document.querySelector('form');
	const mockSubmitEvent = jest.fn();
	form.onsubmit = mockSubmitEvent;

	expect(mockSubmitEvent.mock.calls.length).toEqual(0);
});
