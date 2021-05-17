import SingleWorld from '../components/SingleWorld';
import styled from 'styled-components';
import WorldConcept from '../assets/images/WorldConcept.png';
import UpperBoardImg from '../assets/images/upperBoard.png';
import LowerBoardImg from '../assets/images/lowerBoard.png';
import Ardash from '../assets/images/Ardash.png';

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

const TechnoWorldSingle = () => {
	return (
		<SingleWorld
			bgSrc={WorldConcept}
			heading={<Heading>TECHNO WORLD</Heading>}
			right={
				<>
					<UpperBoard>
						<p>
							A place of extreme wealth and privilege, the
							highways of the Techno World are a far cry from the
							alleys of Slum World. Children from the techno-pods
							are genetically modified to have special qualities,
							such glow-in-the-dark bottoms, super eyesight,
							incredibly increased mathematical abilities or a
							special gene, which means that they will like eating
							brussel sprouts. The prosperous residents of Techno
							World are the consumers of SEEDCORP products. They
							can eat all the SEEDCORP GM food they like,
							remaining unaffected by genetic modification of
							foods due to their superior modified genes. Food
							shortages are unthought of in Techno World. Not
							gangs of mutant thugs, but scores of snobby young
							brat packs rove the malls and department store
							skyscrapers on their hoverboards, purchasing
							whatever SEEDCORP is advertising on its ever-present
							billboards week-to-week.
						</p>
					</UpperBoard>
					<LowerBoard>
						<p>
							<SubHeading>Inhabitants:</SubHeading> Ardash and his
							mother Prudence and her genetically modified
							Chihuahua.
						</p>
						<p>
							<SubHeading>Dangers:</SubHeading> Brat packs of
							spoiled children.
						</p>
						<p>
							<SubHeading>Landscape Features:</SubHeading> High
							flying highways and super sized
						</p>
					</LowerBoard>
					<Figure>
						<img src={Ardash} width='400' />
					</Figure>
				</>
			}></SingleWorld>
	);
};

export default TechnoWorldSingle;
