import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import MainPage from './pages/MainPage'
import RandomCard from "./pages/RandomCard"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/card" element={<RandomCard />} />
        <Route path="/card/:id" element={<RandomCard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

