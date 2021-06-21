import SingleWorld from '../components/SingleWorld';
import styled, { css } from 'styled-components';
import EggLab from '../assets/images/EggLab.png';
import DrEgg from '../assets/images/DrEgg.png';
import Bg from '../assets/images/Dboard.png';
import DrMoon from '../assets/images/DrMoon.png';

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
	width: 55%;

	@media (max-width: 1366px) {
		width: 80%;
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
	height: 72%;

	@media (max-width: 1366px) {
		height: 78%;
		p {
			font-size: 14px;
		}
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

const FigureWrapper = styled.div`
	width: 45%;
	display: flex;

	@media (max-width: 1366px) {
		width: 50%;
	}
`;

const Figure = styled.div`
	width: 100%;
	position: relative;
	z-index: 10;
	right: -150px;

	@media (max-width: 1366px) {
		// width: 40%;
		right: -20%;
	}
`;

const FigureRight = styled.div`
	width: 100%;

	@media (max-width: 1366px) {
		// width: 40%;
	}
`;

const LabWorldSingle = () => {
	return (
		<SingleWorld
			bgSrc={EggLab}
			heading={<Heading>DR EGG’S LAB</Heading>}
			right={
				<Flexbox reverse>
					<InnerWrapper>
						<BoardWrapper>
							<img src={Bg} />
							<ContentWrapper>
								<UpperBoard>
									<p>
										Dr Eggs Interactive Laboratory is a
										place of marvellous miracles. Next to
										the monstrous SEEDCORP industrial
										complex, in this tiny laboratory, Dr Egg
										sits tinkering away on small, often
										therapeutic biological inventions, such
										as the handy square tomato and the
										famous glow-in-the-dark fishes bottom.
										Dr Egg is positioned to act like “a
										thorn on the side of SEEDCORP”, and the
										three kid-heroes are keen to have his
										help. He has created a spying, flying
										hybrid tomato to track the inventions Dr
										Mole has stolen from him.
									</p>
								</UpperBoard>
								<LowerBoard>
									<p>
										<SubHeading>Inhabitants:</SubHeading> Dr
										Egg, Dr Moon, The Snake, Tank Child.
									</p>
									<p>
										<SubHeading>Dangers:</SubHeading>{' '}
										Bio-goo and Biohazardous waste.
									</p>
									<p>
										<SubHeading>
											Landscape Features:
										</SubHeading>{' '}
										Creation Tanks, Petri Dishes,
										Test-tubes, Bio-goo, Tank Child, The
										Famous Square tomato plant, Glow In The
										Dark Creatures (including Fish and
										Mouse), Experiment Record Books.
									</p>
								</LowerBoard>
							</ContentWrapper>
						</BoardWrapper>
					</InnerWrapper>
					<FigureWrapper>
						<Figure>
							<img src={DrEgg} width='100%' />
						</Figure>
						<FigureRight>
							<img src={DrMoon} width='100%' />
						</FigureRight>
					</FigureWrapper>
				</Flexbox>
			}></SingleWorld>
	);
};

export default LabWorldSingle;
