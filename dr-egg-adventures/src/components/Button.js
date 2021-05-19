import styled, { css } from 'styled-components';
import Img from '../assets/images/paper_texture_04.jpg';

const TButton = styled.button`
	font-family: 'quagmire';
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;
	border: 5px solid #00bfa5;
	border-radius: 25px;
	padding: 5px 50px;
	color: #367771;
	cursor: pointer;
	text-transform: uppercase;
	background-image: url(${Img});

	${props =>
		props.fontSize &&
		css`
			font-size: ${props.fontSize}vh;
		`}

	${props =>
		props.top &&
		css`
			top: ${props.top}%;
		`}

    &:disabled {
		cursor: not-allowed;
	}
`;

const ThemeButton = ({ children, fontSize, top, onClick, disabled }) => {
	return (
		<TButton
			fontSize={fontSize}
			top={top}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</TButton>
	);
};

export default ThemeButton;
