import SingleWorld from '../components/SingleWorld';
import styled from 'styled-components';
import SlumWorld from '../assets/images/SlumWorld.png';
import UpperBoardImg from '../assets/images/upperBoard.png';
import LowerBoardImg from '../assets/images/lowerBoard.png';
import Vivi from '../images/characters/Vivi.png';

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
	position: absolute;
	right: 30%;
	bottom: 0;
`;

const SlumWorldSingle = () => {
	return (
		<SingleWorld
			bgSrc={SlumWorld}
			heading={<Heading>SLUM-LANES</Heading>}
			left={
				<>
					<UpperBoard>
						<p>
							In sprawled out, windy slum world, starvation and
							food shortages are everyday occurrences. The poor
							inhabitants suffer as Dr Mole ruthlessly seeks to
							control the food supplies. In the scary backstreets,
							roam gangs of "dumped" mutant thugs, the result of
							Dr Mole's experiments on children and animals.
							Anyone can become the thugs' unsuspecting quarry,
							and be kidnapped for auction at the notorious and
							scary Mutant and Body Parts Black Market.
						</p>
					</UpperBoard>
					<LowerBoard>
						<p>
							<SubHeading>Inhabitants:</SubHeading> Vivi and her
							dad Kane.
						</p>
						<p>
							<SubHeading>Dangers:</SubHeading> Mutant thugs. Dr
							Mole’s Hybrid Helpers. Kidnapping. Starvation.
							Mutant and Body Parts Market.
						</p>
						<p>
							<SubHeading>Landscape Features:</SubHeading> Dumped
							biohazard drums. Rusty pipes. Missing Children
							Posters. Seedcorp Advertising Billboards.
						</p>
					</LowerBoard>
					<Figure>
						<img src={Vivi} width='400' />
					</Figure>
				</>
			}></SingleWorld>
	);
};

export default SlumWorldSingle;
