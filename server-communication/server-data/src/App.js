import "./App.css";
import {useState, useEffect} from 'react'
import axios from 'axios'
import Note from './Note'

export default function App() {
  // // const result = notes.map(note => note.id)
  // // console.log(result)
  // The component uses the useState function to initialize the piece of state stored in notes with the array of notes passed in the props
  const [notes, setNotes] = useState([]) 
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  // Added the addNote function as an event handler to the form element that will be called when the form is submitted, by clicking the submit button.
  // event.preventDefault() method prevents the default action of submitting a form. 
  const addNote = (event) =>{ 
    event.preventDefault()
    // console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      // date: new Date().toISOString(),
      // important: Math.random() < 0.5,
      // id: notes.length + 1,
    }

    // The new note is added to the list of notes using the concat array method
    // The event handler also resets the value of the controlled input element by calling the setNewNote function of the newNote state
    setNotes(notes.concat(noteObject)) 
    setNewNote('')
  }

  // The event handler is called every time a change occurs in the input element. 
  // The event handler function receives the event object as its event parameter.
  // The target property of the event object now corresponds to the controlled input element and event.target.value refers to the input value of that element.
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)

  useEffect(() => {
    console.log('effect')
    axios
    .get('http://localhost:3001/notes')
    .then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
  }, [])
  console.log('render', notes.length, 'notes')

  return (
    <div className="App">
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important': 'all'}</button>
      <ul>
        {/* <li>{notes[0].content}</li> // This method isn't practical and your code will become bloated over time. A better an easier way to generate the list is by using map.
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li> */}
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} 
        onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

