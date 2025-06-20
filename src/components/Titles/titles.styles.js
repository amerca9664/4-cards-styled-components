import styled from "styled-components";


const StyledDiv = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledSpan = styled.span`
    font-size: 1.9rem;
    color: ${({$color}) => $color};
    font-weight: ${({$weight}) => $weight};
`

const StyledP = styled.p`
    padding-left: 250px;
    padding-right: 250px;
    text-align: center;
    font-size: 0.8rem;
    color: ${({$color}) => $color};
    font-weight: ${({$weight}) => $weight};
`

export {StyledDiv, StyledSpan, StyledP}