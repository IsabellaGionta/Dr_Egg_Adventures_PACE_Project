import SingleWorld from '../components/SingleWorld';
import styled from 'styled-components';
import EggLab from '../assets/images/EggLab.png';
import UpperBoardImg from '../assets/images/upperBoard.png';
import LowerBoardImg from '../assets/images/lowerBoard.png';
import DrEgg from '../assets/images/DrEgg.png';
import DrMoon from '../assets/images/DrMoon.png';

const UpperBoard = styled.div`
	width: 820px;
	min-height: 400px;
	background: url(${UpperBoardImg});
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	padding: 2em 3em;
	font-weight: 600;
	font-size: 1.2em;
`;

const LowerBoard = styled.div`
	width: 820px;
	min-height: 300px;
	background: url(${LowerBoardImg});
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	padding: 2em 3em;
	font-weight: 600;
	font-size: 1.2em;
`;

const Heading = styled.h1`
	color: white;
	text-align: center;
	font-size: 3em;
	text-transform: uppercase;
`;

const SubHeading = styled.span`
	font-weight: 800;
	text-transform: uppercase;
`;

const Figure = styled.div`
	position: absolute;
	left: 20%;
	bottom: 0;
	z-index: 10;
`;

const FigureRight = styled.div`
	position: absolute;
	left: 30%;
	bottom: 0;
`;

const LabWorldSingle = () => {
	return (
		<SingleWorld
			bgSrc={EggLab}
			heading={<Heading>Egg Lab</Heading>}
			right={
				<>
					<UpperBoard>
						<p>
							Dr Eggs Interactive Laboratory is a place of
							marvellous miracles. Next to the monstrous SEEDCORP
							industrial complex, in this tiny laboratory, Dr Egg
							sits tinkering away on small, often therapeutic
							biological inventions, such as the handy square
							tomato and the famous glow-in-the-dark fishes
							bottom. Dr Egg is positioned to act like “a thorn on
							the side of SEEDCORP”, and the three kid-heroes are
							keen to have his help. He has created a spying,
							flying hybrid tomato to track the inventions Dr Mole
							has stolen from him.
						</p>
					</UpperBoard>
					<LowerBoard>
						<p>
							<SubHeading>Inhabitants:</SubHeading> Dr Egg, Dr
							Moon, The Snake, Tank Child.
						</p>
						<p>
							<SubHeading>Dangers:</SubHeading> Bio-goo and
							Biohazardous waste.
						</p>
						<p>
							<SubHeading>Landscape Features:</SubHeading>{' '}
							Creation Tanks, Petri Dishes, Test-tubes, Bio-goo,
							Tank Child, The Famous Square tomato plant, Glow In
							The Dark Creatures (including Fish and Mouse),
							Experiment Record Books.
						</p>
					</LowerBoard>
					<Figure>
						<img src={DrEgg} width='400' />
					</Figure>
					<FigureRight>
						<img src={DrMoon} width='400' />
					</FigureRight>
				</>
			}></SingleWorld>
	);
};

export default LabWorldSingle;
