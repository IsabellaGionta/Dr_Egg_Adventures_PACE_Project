import SingleWorldLayout from './SingleWorldLayout';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
	width: 50%;

	${props =>
		props.right &&
		css`
			float: right;
		`}
`;

const SingleWorld = ({ heading, left, right, bgSrc }) => {
	return (
		<SingleWorldLayout bgSrc={bgSrc}>
			{heading}
			{left && <Wrapper>{left}</Wrapper>}
			{right && <Wrapper right>{right}</Wrapper>}
		</SingleWorldLayout>
	);
};

export default SingleWorld;
