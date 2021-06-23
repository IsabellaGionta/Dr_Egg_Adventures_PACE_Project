import { useState } from 'react';
import styled, { css } from 'styled-components';
import TabImage from '../assets/images/mobileTabBoard.png';
import ActiveTabImage from '../assets/images/mobileSelectedTab.png';
import BoardImage from '../assets/images/mobileBoard.png';

const BoardWrapper = styled.div`
	position: absolute;
	top: 20%;
	width: 100%;
	display: flex;
	justify-content: center;
`;

const TabsWrapper = styled.div`
	max-width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-height: 230px;
`;

const Tab = styled.div`
	max-width: 100%;
	width: 150px;
	height: 54px;
	background: url(${TabImage});
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 600;

	${props =>
		props.active &&
		css`
			background: url(${ActiveTabImage});
			background-repeat: no-repeat;
			background-size: cover;
			color: #fff;
		`}
`;

const Board = styled.div`
	max-width: 100%;
	width: 569.6px;
	height: 395.2px;
	background: url(${BoardImage});
	background-repeat: no-repeat;
	background-size: contain;
	padding: 2em;
	font-size: 13px;
	line-height: 16px;
	font-weight: 600;

	p {
		margin-bottom: 10px;
	}
`;

const SwitchBoard = ({ info }) => {
	const [tabContent, setTabContent] = useState(info[Object.keys(info)[0]]);
	const [activeKey, setActiveKey] = useState(Object.keys(info)[0]);

	const handleSelect = tabKey => {
		setTabContent(info[tabKey]);
		setActiveKey(tabKey);
	};
	return (
		<BoardWrapper>
			<TabsWrapper>
				{Object.keys(info).map(tabKey => (
					<Tab
						active={activeKey === tabKey}
						key={tabKey}
						onClick={() => handleSelect(tabKey)}>
						{tabKey}
					</Tab>
				))}
			</TabsWrapper>

			<Board>
				{tabContent.split('\n').map(text => (
					<p>{text}</p>
				))}
			</Board>
		</BoardWrapper>
	);
};

export default SwitchBoard;
