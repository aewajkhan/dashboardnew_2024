
import './App.css'
import Contactpage from './pages/contactpage/Contactpage';
import Dashboard from './pages/dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/contact" element={<Contactpage />} />

    </Routes>
  </Router>
  )
}

export default App
