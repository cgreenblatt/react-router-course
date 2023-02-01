import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './Loading';
const Article = React.lazy(() => import('./Article'));
const Articles = React.lazy(() => import('./Articles'));
const Navbar = React.lazy(() => import('./Navbar'));
const Home = React.lazy(() => import('./Home'));
const Team = React.lazy(() => import('./Team'));
const Teams = React.lazy(() => import('./Teams'));
const Players = React.lazy(() => import('./Players'));
const Player = React.lazy(() => import('./Player'));
const TeamPage = React.lazy(() => import('./TeamPage'));

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Players" element={<Players />}>
              <Route path=":playerId" element={<Player />} />
              <Route
                path=""
                element={
                  <div className="sidebar-instruction">Select a player</div>
                }
              />
            </Route>
            <Route path="/Teams" element={<Teams />}>
              <Route
                path=""
                element={
                  <div className="sidebar-instruction">Select a team</div>
                }
              />
              <Route path=":teamId" element={<Team />} />
            </Route>
            <Route path="/:teamId" element={<TeamPage />} />
            <Route path="/:teamId/articles" element={<Articles />}>
              <Route
                path=""
                element={
                  <div className="sidebar-instruction">Select an article</div>
                }
              />
              <Route path=":articleId" element={<Article />} />
            </Route>
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
}
