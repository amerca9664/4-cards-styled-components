import styled from "styled-components";


const StyledDiv = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledSpan = styled.span`
    font-size: 1.9rem;
    color: ${({color}) => color};
    font-weight: 200;
`

const StyledP = styled.p`
`

export {StyledDiv, StyledSpan, StyledP}