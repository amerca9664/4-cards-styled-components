import styled from "styled-components";


const StyledDiv = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    max-width: 400px;
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 50px;
`

const StyledSpan = styled.span`
    font-size: 1.9rem;
    color: ${({$color}) => $color};
    font-weight: ${({$weight}) => $weight};

    @media screen and (max-width: 1255px){
        &{
            font-size: 1.8rem;

    }
    
}
`

const StyledP = styled.p`

    text-align: center;
    font-size: 0.8rem;
    color: ${({$color}) => $color};
    font-weight: ${({$weight}) => $weight};
`

export {StyledDiv, StyledSpan, StyledP}