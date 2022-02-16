
import './App.css';

function App() {

  const now = new Date()
  const bornYear = 1993
  const currentYear = now.getFullYear()
  const age = currentYear - bornYear

  const Hello = (props) => {
    return (
      <div>
        <p>Hello {props.name} , it is {now.toString()} and you are {props.age} years old this year.</p>
      </div>
    )
  }

  const Footer = () => {
    return (
      <div>
        Greeting app created by <a href="https://github.com/chrysaliswoon/">Chrysalis</a>
      </div>
    )
  }

  return (
    <div class="App">
      <p>
        <Hello name="Chrys" age={age}/>
      </p>

      <Footer />
    </div>
  );
}

export default App;
