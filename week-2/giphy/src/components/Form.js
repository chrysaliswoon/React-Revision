import {useEffect, useState} from 'react'
// import axios from 'axios'
import Giphy from './Giphy'

export default function Form() {
  // const [image, setImage] = useState()

  // useEffect(() => {
  //   axios
  // .get('http://api.giphy.com/v1/gifs/random?api_key=70QSlJM7VQ0zl5jEjnuAF7ig9zcki3Xu&tag=dog')
  // .then(response => {
  //     setImage = response.data.data
  //     console.log(response)
  // })}, [])

    return (
      <div className="Form">
          <p>Insert form here</p>
          <Giphy />
      </div>
    );
  }
  
  