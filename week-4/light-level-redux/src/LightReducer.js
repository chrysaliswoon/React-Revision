// import React, {useReducer} from "react";
// import { connect } from 'react-redux';

let intitialState = {
    lightValues: [
      { name: 'off', color: 'rgba(0,0,0,1)', action: 'SET_OFF' },
      { name: 'low', color: 'rgba(0,0,0,.6)', action: 'SET_LOW' },
      { name: 'med', color: 'rgba(0,0,0,.4)', action: 'SET_MED' },
      { name: 'high', color: 'rgba(0,0,0,.1)', action: 'SET_HIGH' }
    ], 
    activeLight:{name: 'off', color: 'rgba(0,0,0,1)'},
    numberOfClicks: 0
  }
  
const lightReducer = (state, action) => {
    const [state, dispatch] = useReducer(lightReducer,intitialState)

    switch (action.type) {
      case 'SET_OFF':
        return {
          ...state,
          activeLight: state.lightValues[0],
          numberOfClicks: state.numberOfClicks += 1
        };
      case 'SET_LOW':
        return {
          ...state,
          activeLight: state.lightValues[1],
          numberOfClicks: state.numberOfClicks += 1
        };
      case 'SET_MED':
        return {
          ...state,
          activeLight: state.lightValues[2],
          numberOfClicks: state.numberOfClicks += 1
        };
      case 'SET_HIGH':
        return {
          ...state,
          activeLight: state.lightValues[3],
          numberOfClicks: state.numberOfClicks += 1
        };
      case 'RESET':
        return {
          ...state,
          activeLight: state.lightValues[0],
          numberOfClicks: state.numberOfClicks = 0
        };
      default:
        return {
          ...state,
          activeLight: state.lightValues[0],
          numberOfClicks: state.numberOfClicks
        };
    }
  }

export default function lightReducer()