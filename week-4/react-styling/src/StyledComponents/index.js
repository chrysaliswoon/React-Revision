import React from 'react';
import { white, primary, secondary, warning } from '../colors';
import styled, {css, keyframes} from 'styled-components';

export default function StyledComponents(props) {
  console.log('StyledComonents - props', props)

  const sharedStyles = css`
    color: #fff;
    padding: 7px 14px;
    margin: 0 5px;
    border: 1px solid transparent;
    &:hover {
      background-color: red;
    }
  `

  const fadeIn = keyframes`
   0% { opacity: 0;}
   100% { opacity: 1}
  `

   const animate = (props) => props.animate ? css` ${fadeIn} 3s ease-out;`: '';

  const Container = styled.div`
    /* color: pink; */
    color: ${warning};
  `;

  const Button = styled.button`
    ${props => sharedStyles}
    animation: ${animate}
    /* animation: ${ props => props.animate ? css`${fadeIn} 3s ease-out` : ''}; */
    /* animation: 3s ${fadeIn} ease-out; */
    background-color: ${props.primary ? primary : secondary};
    /* background-color: ${secondary}; */
    border-radius: ${props => {
      console.log('Button - props', props)
      return props.rounded ?  '20px' : '0'
    }};

  `;

  return (
    <Container>
      <h2>Styled Components</h2>
      <Button rounded animate>Primary</Button>
      <Button animate>Secondary</Button>
    </Container>
  );
}
