import Card from '../Card/Card.jsx';
import Titles from '../Titles/TItles';
import { StyledDiv, StyledCardsDiv } from './content.styles';
import { INFOCARDS } from '../data.js';
import { v4 } from 'uuid';

const Content = () => {
	return (
		<StyledDiv>
			<Titles></Titles>
			<StyledCardsDiv>
				{INFOCARDS.map(item => (
					<Card
						key={v4()}
						title={item.title}
						iconPath={item.iconPath}
						top={item.top}
						buttom={item.buttom}
						left={item.left}
						right={item.right}
					>
						{item.text}
					</Card>
				))}
			</StyledCardsDiv>
		</StyledDiv>
	);
};

export default Content;
