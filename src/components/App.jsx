import * as React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
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

function Instructions({ item }) {
  return <div className="sidebar-instruction">Select {item}</div>;
}

function Routes() {
  return useRoutes([
    { path: '/', element: <Home /> },
    {
      path: '/players',
      element: <Players />,
      children: [
        { path: ':playerId', element: <Player /> },
        { path: '', element: <Instructions item="a player" /> },
      ],
    },
    {
      path: '/Teams',
      element: <Teams />,
      children: [
        { path: '', element: <Instructions item="a team" /> },
        { path: ':teamId', element: <Team /> },
      ],
    },
    { path: '/:teamId', element: <TeamPage /> },
    {
      path: '/:teamId/articles',
      element: <Articles />,
      children: [
        { path: '', element: <Instructions item="an article" /> },
        { path: ':articleId', element: <Article /> },
      ],
    },
  ]);
}

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <React.Suspense fallback={<Loading />}>
          <Routes />
        </React.Suspense>
      </div>
    </Router>
  );
}
