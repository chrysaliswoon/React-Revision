// import './App.css';
import {Routes} from 'react-router-dom'
import { Route } from 'react-router';
import {BrowserRouter} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import RandomCard from "./pages/RandomCard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/random" element={<RandomCard />} />
      </Routes>
    </BrowserRouter>
  )
}