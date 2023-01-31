import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Article from './Article';
import Articles from './Articles';
import Navbar from './Navbar';
import Home from './Home';
import Team from './Team';
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
          <Route path="/Teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
          </Route>
          <Route path="/:teamId" element={<TeamPage />} />
          <Route path="/:teamId/articles" element={<Articles />}>
            <Route path=":articleId" element={<Article />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
