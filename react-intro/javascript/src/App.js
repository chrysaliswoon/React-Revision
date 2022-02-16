
import './App.css';

function App() {
  const x = 1
  let y = 5
  // console.log(x, y)

  y = 'sometext'
  // console.log(x, y)
  
  const t = [1, -1, 3]
  // t.push(5)
  // console.log(t.length)
  // console.log(t[1])

  t.forEach(value => {
    // console.log(value)
  })

  const t2 = t.concat(5) // In React code, it is preferable to use the method "concat" instead of "push" which does not add the item to the array but creates a new array
  // console.log(t)
  // console.log(t2)

  const m1 = t.map(value => '<li>' + value * 2 + '</li>')
  console.log(m1)

  const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }
  
  const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }
  
  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }

  console.log(object1.name) 

  return (
    <div className="App">

    </div>
  );
}

export default App;
