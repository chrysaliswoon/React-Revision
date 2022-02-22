import axios from 'axios'
import {useState} from 'react'


export default function Giphy() {
  const [picture, setPicture] = useState()


    // axios
    // .get('http://api.giphy.com/v1/gifs/random?api_key=70QSlJM7VQ0zl5jEjnuAF7ig9zcki3Xu&tag=dog')
    // .then(response =>{
    //     setPicture(response.data.data)
        // console.log(response.data.data)
    // })

    return (
      <div className="Giphy">
        {picture && picture.title ? <img alt={picture.title} src={picture.url} /> : <div><p>"No picture request"</p></div>}
      </div>
    );
  }
  
  