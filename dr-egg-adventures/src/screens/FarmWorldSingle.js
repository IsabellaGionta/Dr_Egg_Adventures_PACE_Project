import SingleWorld from '../components/SingleWorld';
import styled, { css } from 'styled-components';
import FarmWorld from '../assets/images/FarmWorld.png';
import Bg from '../assets/images/Dboard.png';
import Cornelia from '../images/characters/Cornelia.png';

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
	height: 70%;

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

const FarmWorldSingle = () => {
	return (
		<SingleWorld
			bgSrc={FarmWorld}
			heading={<Heading>CORN-FARMLANDS</Heading>}
			right={
				<Flexbox reverse>
					<InnerWrapper>
						<BoardWrapper>
							<img src={Bg} />

							<ContentWrapper>
								<UpperBoard>
									<p>
										In the dusty brown fields under the
										giant SEEDCORP billboards, sit the empty
										silos and rusted tractors with their
										SEEDCORP logos. Only a few farmers, like
										Tina and Denis, who have unwittingly
										“sold” the rights to their children for
										experimentation, are provided with
										genetically modified seed from SEEDCORP.
										On those farms, corn grows tall and
										green and ears of corn act as radio
										transmitters linked to Dr Mole’s
										headquarters. As Dr Mole controls all
										the seed in Farm World, and has locked
										away all the organic seeds he can,
										farmers who are unable to afford
										SEEPCORP’s special genetically modified
										seed can’t grow anything, and experience
										severe food shortages. Most farmers
										survive by procuring what little GM seed
										they can afford off the “black market”.
									</p>
								</UpperBoard>
								<LowerBoard>
									<p>
										<SubHeading>Inhabitants:</SubHeading>{' '}
										Cornelia and her parents Tina and
										Dennis.
									</p>
									<p>
										<SubHeading>Dangers:</SubHeading> Dr
										Mole’s Hybrid Helpers. Starvation.
									</p>
									<p>
										<SubHeading>
											Landscape Features:
										</SubHeading>{' '}
										Silos, tractors, fuel tanks, all with
										the SEEDCORP logo.
									</p>
								</LowerBoard>
							</ContentWrapper>
						</BoardWrapper>
					</InnerWrapper>
					<Figure>
						<img src={Cornelia} width='100%' />
					</Figure>
				</Flexbox>
			}></SingleWorld>
	);
};

export default FarmWorldSingle;
