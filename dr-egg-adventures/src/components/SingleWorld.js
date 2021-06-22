import SingleWorldLayout from './SingleWorldLayout';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
`;

const MobileScreen = styled.div`
	@media (min-width: 823px) {
		display: none;
	}
`;

const SingleWorld = ({ heading, left, right, bgSrc, mobileLayout }) => {
	return (
		<>
			<SingleWorldLayout bgSrc={bgSrc}>
				{heading}
				<div>
					{left && <Wrapper>{left}</Wrapper>}
					{right && <Wrapper right>{right}</Wrapper>}
				</div>
			</SingleWorldLayout>
			<MobileScreen>{mobileLayout}</MobileScreen>
		</>
	);
};

export default SingleWorld;
