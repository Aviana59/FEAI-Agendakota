import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./views/Home"
import Hotel from "./views/Hotel"
import Event from "./views/Event"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotel" element={<Hotel/>} />
        <Route path="/event" element={<Event/>} />
      </Routes>
    </Router>
  )
}

export default App
