import SingleWorld from '../components/SingleWorld';
import styled from 'styled-components';
import FarmWorld from '../assets/images/FarmWorld.png';
import UpperBoardImg from '../assets/images/upperBoard.png';
import LowerBoardImg from '../assets/images/lowerBoard.png';
import Cornelia from '../images/Cornelia.png';

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
	left: 30%;
	bottom: 0;
`;

const FarmWorldSingle = () => {
	return (
		<SingleWorld
			bgSrc={FarmWorld}
			heading={<Heading>Farm World</Heading>}
			right={
				<>
					<UpperBoard>
						<p>
							In the dusty brown fields under the giant SEEDCORP
							billboards, sit the empty silos and rusted tractors
							with their SEEDCORP logos. Only a few farmers, like
							Tina and Denis, who have unwittingly “sold” the
							rights to their children for experimentation, are
							provided with genetically modified seed from
							SEEDCORP. On those farms, corn grows tall and green
							and ears of corn act as radio transmitters linked to
							Dr Mole’s headquarters. As Dr Mole controls all the
							seed in Farm World, and has locked away all the
							organic seeds he can, farmers who are unable to
							afford SEEPCORP’s special genetically modified seed
							can’t grow anything, and experience severe food
							shortages. Most farmers survive by procuring what
							little GM seed they can afford off the “black
							market”.
						</p>
					</UpperBoard>
					<LowerBoard>
						<p>
							<SubHeading>Inhabitants:</SubHeading> Cornelia and
							her parents Tina and Dennis.
						</p>
						<p>
							<SubHeading>Dangers:</SubHeading> Dr Mole’s Hybrid
							Helpers. Starvation.
						</p>
						<p>
							<SubHeading>Landscape Features:</SubHeading> Silos,
							tractors, fuel tanks, all with the SEEDCORP logo.
						</p>
					</LowerBoard>

					<Figure>
						<img src={Cornelia} width='400' />
					</Figure>
				</>
			}></SingleWorld>
	);
};

export default FarmWorldSingle;
