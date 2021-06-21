import SingleWorldLayout from './SingleWorldLayout';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
`;

const SingleWorld = ({ heading, left, right, bgSrc }) => {
	return (
		<SingleWorldLayout bgSrc={bgSrc}>
			{heading}
			<div>
				{left && <Wrapper>{left}</Wrapper>}
				{right && <Wrapper right>{right}</Wrapper>}
			</div>
		</SingleWorldLayout>
	);
};

export default SingleWorld;
