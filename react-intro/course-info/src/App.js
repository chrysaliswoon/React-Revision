
import './App.css';

function App() {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div className="App">
      <h1>{course}</h1>
      <p>
        {part1}, Excercises:{exercises1}
      </p>
      <p>
        {part2}, Excercises:{exercises2}
      </p>
      <p>
        {part3}, Excercises:{exercises3}
      </p>
      <p>
        Number of exercises to be completed: {exercises1 + exercises2 + exercises3}
      </p>
    </div>
  );
}

export default App;
