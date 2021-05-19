// import React from 'react';
// import techno from '../images/technoworld-dark.png';
// import farm from '../images/farmworld-dark.png';
// import slum from '../images/slumworld.png';
// import button from '../images/btn-Back.png';
// import worldText from '../images/world-text.png';
// import exit from '../images/back-icon.png';
// import lab from '../images/lab-button.png';
// import snake from '../images/Snake.png';
// import { useHistory } from 'react-router-dom';
// import styled from 'styled-components';

// const Table = styled.table`
// 	border-collapse: collapse;
// 	border: 1px solid #000;
// 	td,
// 	th {
// 		padding: 5px;
// 	}
// 	td {
// 		text-align: left;
// 	}
// `;

// export const SlumWorld = () => {
// 	const history = useHistory();

// 	const homeNav = () => {
// 		history.push('/map');
// 	};

// 	const handleLeave = () => {
// 		history.push('/worlds');
// 	};

// 	const handleLabs = () => {
// 		history.push('/lab');
// 	};

// 	return (
// 		<div>
// 			<div className='world-image'>
// 				<img className='technoworld' src={techno} alt='techno world' />
// 				<img className='farmworld' src={farm} alt='farm world' />
// 				<img className='slumworld' src={slum} alt='slum world' />
// 				<div className='hb-container'>
// 					<img
// 						className='home-button'
// 						src={button}
// 						alt='home button'
// 						onClick={homeNav}
// 					/>
// 				</div>
// 				<div className='snake-container'>
// 					<img className='chatbot' src={snake} alt='chatbot' />
// 				</div>
// 				<div className='slum-text-container'>
// 					<img
// 						className='world-text'
// 						src={worldText}
// 						alt='text box'
// 					/>
// 					<div className='slum-text'>
// 						<h3 className='world-title'>SLUMWORLD</h3>
// 						<p className='info-text'>
// 							In sprawled out, windy slum world, starvation and
// 							food shortages are everyday occurrences. The poor
// 							inhabitants suffer as Dr Mole ruthlessly seeks to
// 							control the food supplies.{' '}
// 						</p>
// 						<br></br>
// 						<p className='info-text'>
// 							In the scary backstreets, roam gangs of "dumped"
// 							mutant thugs, the result of Dr Mole's experiments on
// 							children and animals. Anyone can become the thugs'
// 							unsuspecting quarry, and be kidnapped for auction at
// 							the notorious and scary Mutant and Body Parts Black
// 							Market.
// 						</p>
// 						<br></br>
// 						<Table>
// 							<tr>
// 								<th>Inhabitants</th>
// 								<td>Vivi and her dad Kane.</td>
// 							</tr>
// 							<tr>
// 								<th>Dangers</th>
// 								<td>
// 									Mutant thugs. Dr Mole's Hybrid Helpers.
// 									Kidnapping. Starvation. Mutant and Body
// 									Parts Market.
// 								</td>
// 							</tr>
// 							<tr>
// 								<th>Landscape Features</th>
// 								<td>
// 									Dumped biohazard drums. Landscape Rusty
// 									pipes. Missing Features Children Posters.
// 									SeedCorp Advertising Billboards.
// 								</td>
// 							</tr>
// 						</Table>
// 					</div>
// 					<div className='slum-exit' onClick={handleLeave}>
// 						<img className='back-icon' src={exit} alt='back icon' />
// 					</div>
// 				</div>
// 				<div className='lab-button'>
// 					<img
// 						className='lab-button'
// 						src={lab}
// 						alt='lab button'
// 						onClick={handleLabs}
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default SlumWorld;
