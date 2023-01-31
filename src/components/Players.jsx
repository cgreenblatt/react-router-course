import { Outlet, useSearchParams } from 'react-router-dom';
import usePlayerNames from '../hooks/usePlayerNames';
import Loading from './Loading';
import Sidebar from './Sidebar';

export default function Players() {
  const [sp] = useSearchParams();
  const team = sp.get('teamId');
  const { response: names, loading } = usePlayerNames(team);

  if (loading) return <Loading />;

  return (
    <div className="container two-column">
      <Sidebar title="Players" list={names} />
      <Outlet />
    </div>
  );
}
