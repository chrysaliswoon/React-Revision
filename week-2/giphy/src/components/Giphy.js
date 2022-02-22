import axios from 'axios'


export default function Giphy() {
    axios
    .get('http://api.giphy.com/v1/gifs/random?api_key=70QSlJM7VQ0zl5jEjnuAF7ig9zcki3Xu&tag=dog')
    .then(response => {
        const imageURL = response.data.data.title
        console.log(imageURL)
    })

    return (
      <div className="Giphy">
        <p>{imageURL}</p> 
      </div>
    );
  }
  
  