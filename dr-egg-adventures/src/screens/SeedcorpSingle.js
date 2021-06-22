import SingleWorld from '../components/SingleWorld';
import styled from 'styled-components';
import WorldConcept from '../assets/images/WorldConceptSingle.png';
import UpperBoardImg from '../assets/images/upperBoard.png';
import LowerBoardImg from '../assets/images/lowerBoard.png';
import DrMole from '../assets/images/DrMole.png';

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
	left: 0;
	bottom: 0;
	z-index: 10;
`;

const SeedcorpSingle = () => {
	return (
		<SingleWorld
			bgSrc={WorldConcept}
			heading={<Heading>SEEDCORP INDUSTRIAL LAB</Heading>}
			right={
				<>
					<UpperBoard>
						<p>
							SEEDCORP industrial laboratories are owned by Dr
							Mole and form the headquarters of his vast
							totalitarian empire. The huge complex, located high
							on a windy hill overlooking the lanes of Slum World,
							includes Dr Mole's seedhouse and testing
							laboratories. It is from here that Dr Mole
							dispatches his army of Hybrid Helpers in their
							menacing black SEEDCORP vans. Here the insatiable Dr
							Mole ruthlessly collects every living organic seed
							on the planet, as well as creating and experimenting
							on genetically modified and mutant creatures.
						</p>
					</UpperBoard>
					<LowerBoard>
						<p>
							<SubHeading>Inhabitants:</SubHeading> Dr Mole,
							Hybrid Helpers.
						</p>
						<p>
							<SubHeading>Dangers:</SubHeading> Hybrid Helpers.
						</p>
						<p>
							<SubHeading>Landscape Features:</SubHeading>{' '}
							Seedhouse.
						</p>
					</LowerBoard>
					<Figure>
						<img src={DrMole} width='600' />
					</Figure>
				</>
			}></SingleWorld>
	);
};

export default SeedcorpSingle;
