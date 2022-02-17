import Controls from './Controls'
import Light from './Light'
import lightReducer from './LightReducer'; // Import the reducer back into App
import {createStore} from 'redux' // Add Redux to our App by importing createStore from redux
import {Provider} from 'react-redux' // Wrap the child components in Provider

const store = createStore(
  lightReducer,
)

export default function App() {
  return (
    // Wrap the child components in Provider
    <Provider store={store}> 
          <div className="App">
      <Controls 
        clicks={state.numberOfClicks} 
        controls={state.lightValues} 
        dispatch={dispatch}
      />
      <Light color={state.activeLight.color}/>
    </div>
    </Provider>
  );
}
