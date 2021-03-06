function Content(props) {
  const parts = [
    {
      id: 1,
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      id: 2,
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      id: 3,
      name: 'State of a component',
      exercises: 14
    }
  ]
  
    return (
      <div className="Content">
          {parts.map((part => (
        <div key={part.id}>{part.name}: {part.exercises}</div>
      )))}
      </div>
    );
  }
  
  export default Content;
  