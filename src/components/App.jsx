import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Teams from './Teams';
import Players from './Players';
import Player from './Player';
import TeamPage from './TeamPage';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Players" element={<Players />}>
            <Route path=":playerId" element={<Player />} />
          </Route>
          <Route path="/Teams" element={<Teams />} />
          <Route path="/:teamId" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
}
