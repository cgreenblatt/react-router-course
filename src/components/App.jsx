import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Teams from './Teams';
import Players from './Players'

export default function App () {
  return (
    <Router>
      <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Players" element={<Players />} />
            <Route path="/Teams" element={<Teams />} />
            </Routes>
      </div>
    </Router>
  )
}