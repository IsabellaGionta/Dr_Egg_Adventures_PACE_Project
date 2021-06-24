import SingleWorld from '../components/SingleWorld';
import styled, { css } from 'styled-components';
import SlumWorld from '../assets/images/SlumWorld.png';
import Bg from '../assets/images/Dboard.png';
import Vivi from '../images/characters/Vivi.png';
import SwitchBoard from '../components/SwitchBoard';
import { useState } from 'react';

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
		width: 90%;
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
	height: 75%;

	@media (max-width: 1366px) {
		height: 75%;
	}

	@media (max-width: 1024px) {
		height: 85%;
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

	@media (max-width: 1366px) {
		width: 40%;
	}
`;

const SlumWorldSingle = () => {
	const [info] = useState({
		STORY:
			'In sprawled out, windy slum world, starvation and food shortages are every day occurrences. The poor inhabitants suffer as Dr Mole ruthlessly seeks to control the food supplies. \nIn the scary backstreets, roam gangs of “dumped” mutant thugs, the result of Dr Mole’s experiments on children and animals. Anyone can become the thugs’ unsuspecting quarry, and be kidnapped for auction at the notorious and scary Mutant and Body Parts Black Market.',
		INHABITANTS: 'Vivi and her dad Kane.',
		DANGERS:
			'Mutant thugs. Dr Mole’s Hybrid Helpers. Kidnapping. Starvation. Mutant and Body Parts Market. ',
		LANDSCAPE:
			'Dumped biohazard drums. Rusty pipes. Missing Children Posters. Seedcorp Advertising Billboards.',
	});
	return (
		<SingleWorld
			bgSrc={SlumWorld}
			heading={<Heading>SLUM-LANES</Heading>}
			mobileLayout={<SwitchBoard info={info} />}
			left={
				<Flexbox>
					<InnerWrapper>
						<BoardWrapper>
							<img src={Bg} alt = "Sign Board"/>

							<ContentWrapper>
								<UpperBoard>
									<p>
										In sprawled out, windy slum world,
										starvation and food shortages are
										everyday occurrences. The poor
										inhabitants suffer as Dr Mole ruthlessly
										seeks to control the food supplies. In
										the scary backstreets, roam gangs of
										"dumped" mutant thugs, the result of Dr
										Mole's experiments on children and
										animals. Anyone can become the thugs'
										unsuspecting quarry, and be kidnapped
										for auction at the notorious and scary
										Mutant and Body Parts Black Market.
									</p>
								</UpperBoard>
								<LowerBoard>
									<p>
										<SubHeading>Inhabitants:</SubHeading>{' '}
										Vivi and her dad Kane.
									</p>
									<p>
										<SubHeading>Dangers:</SubHeading> Mutant
										thugs. Dr Mole’s Hybrid Helpers.
										Kidnapping. Starvation. Mutant and Body
										Parts Market.
									</p>
									<p>
										<SubHeading>
											Landscape Features:
										</SubHeading>{' '}
										Dumped biohazard drums. Rusty pipes.
										Missing Children Posters. Seedcorp
										Advertising Billboards.
									</p>
								</LowerBoard>
							</ContentWrapper>
						</BoardWrapper>
					</InnerWrapper>
					<Figure>
						<img src={Vivi} width='100%' alt = "Vivi"/>
					</Figure>
				</Flexbox>
			}></SingleWorld>
	);
};

export default SlumWorldSingle;
