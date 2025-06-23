import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledDiv = styled.div`

    position: absolute;
    top: ${({$top}) => $top};
    bottom: ${({$buttom}) => $buttom};
    left: ${({$left}) => $left};
    right: ${({$right}) => $right};
    
    width:400px;
    height: 280px;
    padding: 10px 35px;
    box-shadow: 0px 10px 20px hsla(234, 12.10%, 33.90%, 0.28);
    border-radius: 10px;
    background: linear-gradient(${({$title}) => $title} 5px, white 5px);

    @media screen and (max-width: 1255px){
        &{
            position:static;
            width:350px;
            height:260px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 20px;

        }
        
    }
`

const StyledH2 = styled.h2`
    color: ${COLORS.Grey500};

`

const StyledP= styled.p`
    font-size: 0.9rem;
    color: ${COLORS.Grey400};
    font-weight: 400;
`

const StyledIcon = styled.img`
    margin-left: auto;
    margin-top: 50px;
`

export {StyledDiv, StyledH2, StyledP, StyledIcon}