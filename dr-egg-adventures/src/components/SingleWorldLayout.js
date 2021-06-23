import Back from '../images/btn-Back.png';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router';

const Wrapper = styled.div`
	${props =>
		props.bgSrc &&
		css`
			width: 100%;
			height: 100vh;
			padding: 2.5em 10em 5em 10em;
			background: url(${props.bgSrc});
			background-size: cover;
			background-position: center;
		`}
	@media (max-width: 1024px) {
		padding: 2.5em 5em 5em 5em;
	}
`;

const BigScreenWrapper = styled.div`
	@media (max-width: 823px) {
		display: none;
	}
`;

const SingleWorldLayout = ({ children, bgSrc }) => {
	const history = useHistory();

	const BackEventHandler = () => {
		history.go(-1);
	};

	return (
		<Wrapper bgSrc={bgSrc}>
			<img
				className='Back-Button characters'
				src={Back}
				onClick={BackEventHandler}
				alt='Back'
			/>
			<BigScreenWrapper>{children}</BigScreenWrapper>
		</Wrapper>
	);
};

export default SingleWorldLayout;
