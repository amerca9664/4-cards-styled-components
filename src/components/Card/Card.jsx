import { StyledDiv, StyledH2, StyledP, StyledIcon } from './card.styles';
import { COLORS } from '../../styles/colors';

const Card = ({ title, iconPath, children, top, buttom, left, right }) => {
	return (
		<StyledDiv
			$title={COLORS[title]}
			$top={top}
			$buttom={buttom}
			$left={left}
			$right={right}
		>
			<StyledH2>{title}</StyledH2>
			<StyledP>{children}</StyledP>
			<StyledIcon src={iconPath}></StyledIcon>
		</StyledDiv>
	);
};

export default Card;
