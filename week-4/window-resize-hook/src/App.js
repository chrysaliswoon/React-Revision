import './App.css';
import React, {useEffect, useState} from 'react'

export default function App() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])


  return (
    <div className="App">
      Window Size Dimensions are: <b>{size.width}px / {size.height}px</b>
    </div>
  );
}