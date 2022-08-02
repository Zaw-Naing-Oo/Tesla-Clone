import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = ({title, description, leftButton, rightButton,  backgroundImage, id, logoSvg}) => {
  return (
    <Wrap bgImage = {backgroundImage} >
        <Fade bottom>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>{ leftButton }</LeftButton>
                    { rightButton && <RightButton>{ rightButton }</RightButton> }
                </ButtonGroup>
            </Fade>
            { logoSvg && <DownArrow src='/images/down-arrow.svg'></DownArrow>}
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
   width: 100vw;
   height: 100vh;
   padding: 0 20px;
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   background-image: ${props => `url("/images/${props.bgImage}")`}
`;

const ItemText = styled.div`
   padding-top: 15vh;
   text-align: center;
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
   background-color: rgba(23, 26, 32, 0.8);
   color: white;
   width: 256px;
   height: 40px;
   border-radius: 100px;
   display: flex;
   justify-content: center;
   align-items: center;
   text-transform: uppercase;
   font-size: 12px;
   opacity: 0.85;
   cursor: pointer;
   margin: 8px;

`;

const RightButton = styled(LeftButton)`
   background-color: white;
   color: black;
   opacity: 0.65;
`;

const DownArrow = styled.img`

    margin-bottom: 15px;
    margin-top: 0;
    width: 100%;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
    
`;