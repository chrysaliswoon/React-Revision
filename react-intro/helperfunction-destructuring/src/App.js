
import './App.css';

const Hello = (props) => {
  // return (
  //   <div>
  //     <p>
  //       Hello {props.name}, you are {props.age} years old
  //     </p>
  //   </div>
  // )

  // const bornYear = () => {
  //   const yearNow = new Date().getFullYear()
  //   return yearNow - props.age
  // }
  // return (
  //   <div>
  //     <p>
  //       Hello {props.name}, you are {props.age} years old
  //     </p>
  //     <p>So you were probably born in {bornYear()}</p>
  //   </div>
  // )
  // const name = props.name
  // const age = props.age

  const {name, age} = props

  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

function App() {
  const name = 'Peter'
  const age = 10

  return (
    <div className="App">
      <h1>Greetings!</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
}

export default App;
