import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./views/Home"
import Hotel from "./views/Hotel"
import Event from "./views/Event"
import  ResultPage  from "./components/ResultPage"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
  )
}

export default App
