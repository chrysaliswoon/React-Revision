# Core concepts in Redux
## One-Way Data Flow

![](https://d33wubrfki0l68.cloudfront.net/73bb62ebc338fcd64ee95bde18684ffe3b3bb379/dac4f/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png)

**Parts of an application:**
- State: Current data used in the app
- View: User Interface displayed 
- Actions: Events that a user can take to change the state

**Flow of Information**
- The state holds the current data used by the app's components
- View components display that state data
- When a user interacts with the view, like clicking a button, the state will be updated.
- The view is updated to display the new state.


**Actions**
- In Redux, actions are representaed as plain JS objects
- Every action must have a type property with a string value. 


**What is Redux**
Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.