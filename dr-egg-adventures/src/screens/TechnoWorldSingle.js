import SingleWorld from '../components/SingleWorld';
import styled, { css } from 'styled-components';
import WorldConcept from '../assets/images/WorldConcept.png';
import Bg from '../assets/images/Dboard.png';
import Ardash from '../images/characters/Ardash.png';
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
	height: 72%;

	@media (max-width: 1366px) {
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

	@media (max-width: 1366px) {
		width: 40%;
	}
`;

const TechnoWorldSingle = () => {
	const [info] = useState({
		STORY:
			'A place of extreme wealth and privilege, the highways of the Techno World are a far cry from the alleys of Slum World. Children from the techno-pods are genetically modified to have special qualities, such glow-in-the-dark bottoms, super eyesight, incredibly increased mathematical abilities or a special gene, which means that they will like eating brussel sprouts. The prosperous residents of Techno World are the consumers of SEEDCORP products. They can eat all the SEEDCORP GM food they like, remaining unaffected by genetic modification of foods due to their superior modified genes. Food shortages are unthought of in Techno World. Not gangs of mutant thugs, but scores of snobby young brat packs rove the malls and department store skyscrapers on their hoverboards, purchasing whatever SEEDCORP is advertising on its ever-present billboards week-to-week.',
		INHABITANTS:
			'Ardash and his mother Prudence and her genetically modified Chihuahua.',
		DANGERS: 'Brat packs of spoiled children.',
		LANDSCAPE: 'High flying highways and super sized.',
	});
	return (
		<SingleWorld
			bgSrc={WorldConcept}
			heading={<Heading>TECHNO-TOWERS</Heading>}
			mobileLayout={<SwitchBoard info={info} />}
			right={
				<Flexbox>
					<InnerWrapper>
						<BoardWrapper>
							<img src={Bg} />

							<ContentWrapper>
								<UpperBoard>
									<p>
										A place of extreme wealth and privilege,
										the highways of the Techno World are a
										far cry from the alleys of Slum World.
										Children from the techno-pods are
										genetically modified to have special
										qualities, such glow-in-the-dark
										bottoms, super eyesight, incredibly
										increased mathematical abilities or a
										special gene, which means that they will
										like eating brussel sprouts. The
										prosperous residents of Techno World are
										the consumers of SEEDCORP products. They
										can eat all the SEEDCORP GM food they
										like, remaining unaffected by genetic
										modification of foods due to their
										superior modified genes. Food shortages
										are unthought of in Techno World. Not
										gangs of mutant thugs, but scores of
										snobby young brat packs rove the malls
										and department store skyscrapers on
										their hoverboards, purchasing whatever
										SEEDCORP is advertising on its
										ever-present billboards week-to-week.
									</p>
								</UpperBoard>
								<LowerBoard>
									<p>
										<SubHeading>Inhabitants:</SubHeading>{' '}
										Ardash and his mother Prudence and her
										genetically modified Chihuahua.
									</p>
									<p>
										<SubHeading>Dangers:</SubHeading> Brat
										packs of spoiled children.
									</p>
									<p>
										<SubHeading>
											Landscape Features:
										</SubHeading>{' '}
										High flying highways and super sized
									</p>
								</LowerBoard>
							</ContentWrapper>
						</BoardWrapper>
					</InnerWrapper>
					<Figure>
						<img src={Ardash} width='100%' />
					</Figure>
				</Flexbox>
			}></SingleWorld>
	);
};

export default TechnoWorldSingle;
