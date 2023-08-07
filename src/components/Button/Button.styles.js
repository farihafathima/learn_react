import styled, { keyframes } from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #4caf50;
  background-color: ${props=>(props.variant==='outline'? 'white':'#4caf50')};
  color:${props=>(props.variant==='outline'? '#4caf50':'white')};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  transition: 0.5s all ease-out;
  &:hover{
    background-color: ${props=>(props.variant!=='outline'? 'white':'#4caf50')};
  color:${props=>(props.variant!=='outline'? '#4caf50':'white')};
  }
`
export const FancyButton=styled(StyledButton)`
background: linear-gradient(to right, #ffafbd, #ffc3a0);
border:none;
`
export const SubmitButton=styled(StyledButton).attrs({
  type:'submit'
})`
box-shadow:0 9px #999;
&active{
    background-color:${props=>props.variant!=='outline'?'white':'#4acf50'}
}
`
const rotate=keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`
export const AnimatedLogo=styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;

`
export const DarkButton=styled(StyledButton)`
  border:2px solid ${props=>props.theme.dark.primary};
  color:${props=>props.theme.dark.text};
  background-color:${props=>props.theme.dark.primary}

`