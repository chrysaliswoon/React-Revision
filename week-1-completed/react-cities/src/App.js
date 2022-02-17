import './App.css';
import {useState} from 'react'
import CityImage from './image'


export default function App() {

  const [bigImage, setBigImage] = useState(CityImage[0])
  const handleClick = (imageUrl) => setBigImage(imageUrl)
  
  const images = CityImage.map((image => (
    <img className="thumb" src={image.img} alt={image.city} onClick={()=> handleClick(image)}/>
  ))) 

  return (
    <div className="App">
      <h1>React Cities</h1>
      <div id="thumbnails">{images}</div>
      <img id="bigImage" src={bigImage.img} alt={bigImage.city}></img>
      </div>
  );
}

