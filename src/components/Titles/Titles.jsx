import { StyledDiv, StyledSpan, StyledP } from './titles.styles';
import { COLORS } from '../../styles/colors.js';
const Titles = () => {
	return (
		<StyledDiv>
			<StyledSpan $color={COLORS.Grey400} $weight={200}>
				Realible, efficient delivery
			</StyledSpan>
			<StyledSpan $color={COLORS.Grey500} $weight={600}>
				Powered by Technology
			</StyledSpan>
			<StyledP $color={COLORS.Grey400} $weight={400}>
				Our Artificial Intelligence powered tools use millions of project data
				points to ensure that your project is successful
			</StyledP>
		</StyledDiv>
	);
};

export default Titles;
