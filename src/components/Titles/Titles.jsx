import { StyledDiv, StyledSpan, StyledP } from './titles.styles';
import { COLORS } from '../../styles/colors.js';
const Titles = () => {
	return (
		<StyledDiv>
			<StyledSpan color={COLORS.Grey400}>
				Realible, efficient delivery
			</StyledSpan>
			<StyledSpan>Powered by Technology</StyledSpan>
			<StyledP>
				Our Artificial Intelligence powered tools use millions of project data
				points to ensure that your project is successful
			</StyledP>
		</StyledDiv>
	);
};

export default Titles;
