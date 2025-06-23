import styled from "styled-components";

const StyledDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;



`
const StyledCardsDiv = styled.div`
    position: relative;
    width: 1250px;
    height: 585px;
    margin-top:40px;
    @media screen and (max-width: 1255px){
        &{
            width: 100vw;

        }
        
    }

`

export {StyledDiv, StyledCardsDiv}