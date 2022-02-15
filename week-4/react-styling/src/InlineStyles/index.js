import React from 'react';
import {white, primary, secondary, warning, success, danger, info } from '../colors'

export default function InlineStyle(props) {
  // const buttonStyles = {
  //   backgroundColor: props.primary,
  //   color: "#fff",
  //   padding: "7px 14px",
  //   margin: "0 5px",
  //   borderRadius: "5px",
  //   border: "1px solid transparent",
  // };
  const containerStyle = { color: secondary}

  const colors = [white, primary, secondary]

  const primaryButtonStyle = {
    backgroundColor: props.isPrimary ? primary : primary, 
    color: colors[props.color]
  }

  const secondaryButtonStyle = {
    backgroundColor: secondary, 
    color: white
  }

  const sucessButtonStyle = {
    backgroundColor: success, 
    color: white
  }

  const dangerButtonStyle = {
    backgroundColor: danger, 
    color: white
  }
  
  const warningButtonStyle = {
    backgroundColor: warning, 
    color: white
  }

  const infoButtonStyle = {
    backgroundColor: info, 
    color: white
  }

  const whiteButtonStyle = {
    backgroundColor: white, 
    color: secondary
  }


  return (
    <div style={containerStyle}>
      <h2>Inline Styles</h2>
      <button style = {primaryButtonStyle}>Primary</button>
      <button style = {secondaryButtonStyle}>Secondary</button>
      <button style = {sucessButtonStyle}>Success</button>
      <button style = {dangerButtonStyle}>Danger</button>
      <button style = {warningButtonStyle}>Warning</button>
      <button style = {infoButtonStyle}>Info</button>
      <button style = {whiteButtonStyle}>White</button>

    </div>
  );
}