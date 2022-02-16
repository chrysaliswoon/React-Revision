import './App.css';
import CityImage from './image'

function App() {
  
  const images = CityImage.map((image => (
    <img className="thumb" src={image.img} alt={image.city}/>
  ))) 

  return (
    <div className="App">
      <h1>React Cities</h1>
      <div id="thumbnails">{images}</div>
      </div>
  );
}

export default App;
