import SingleWorld from '../components/SingleWorld';
import styled, { css } from 'styled-components';
import WorldConcept from '../assets/images/WorldConceptSingle.png';
import Bg from '../assets/images/Dboard.png';
import DrMole from '../assets/images/DrMole.png';

const Flexbox = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;

	${props =>
		props.reverse &&
		css`
			flex-direction: row-reverse;
		`}
`;

const InnerWrapper = styled.div`
	width: 50%;

	@media (max-width: 1366px) {
		width: 80%;
		margin-left: 300px;
	}
`;

const BoardWrapper = styled.div`
	width: 100%;
	position: relative;

	img {
		width: 100%;
	}
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0;
	justify-content: space-between;
	height: 70%;

	@media (max-width: 1366px) {
		height: 70%;
	}

	@media (max-width: 1024px) {
		height: 75%;
	}
`;

const UpperBoard = styled.div`
	padding: 30px;
`;

const LowerBoard = styled.div`
	padding: 2em 6em;

	@media (max-width: 1366px) {
		padding: 30px 80px;
	}
`;

const Heading = styled.h1`
	color: black;
	text-align: center;
	font-size: 3em;
	text-transform: uppercase;
`;

const SubHeading = styled.span`
	font-weight: 800;
	text-transform: uppercase;
`;

const Figure = styled.div`
	width: 30%;
	position: absolute;
	left: 0;

	@media (max-width: 1366px) {
		width: 40%;
	}
`;

const SeedcorpSingle = () => {
	return (
		<SingleWorld
			bgSrc={WorldConcept}
			heading={<Heading>SEEDCORP INDUSTRIAL LAB</Heading>}
			right={
				<Flexbox reverse>
					<InnerWrapper>
						<BoardWrapper>
							<img src={Bg} />
							<ContentWrapper>
								<UpperBoard>
									<p>
										SEEDCORP industrial laboratories are
										owned by Dr Mole and form the
										headquarters of his vast totalitarian
										empire. The huge complex, located high
										on a windy hill overlooking the lanes of
										Slum World, includes Dr Mole's seedhouse
										and testing laboratories. It is from
										here that Dr Mole dispatches his army of
										Hybrid Helpers in their menacing black
										SEEDCORP vans. Here the insatiable Dr
										Mole ruthlessly collects every living
										organic seed on the planet, as well as
										creating and experimenting on
										genetically modified and mutant
										creatures.
									</p>
								</UpperBoard>
								<LowerBoard>
									<p>
										<SubHeading>Inhabitants:</SubHeading> Dr
										Mole, Hybrid Helpers.
									</p>
									<p>
										<SubHeading>Dangers:</SubHeading> Hybrid
										Helpers.
									</p>
									<p>
										<SubHeading>
											Landscape Features:
										</SubHeading>{' '}
										Seedhouse.
									</p>
								</LowerBoard>
							</ContentWrapper>
						</BoardWrapper>
					</InnerWrapper>
					<Figure>
						<img src={DrMole} width='100%' />
					</Figure>
				</Flexbox>
			}></SingleWorld>
	);
};

export default SeedcorpSingle;
