# Core concepts in Redux

## One-Way Data Flow

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