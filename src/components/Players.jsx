import { Link, useSearchParams, useLocation } from 'react-router-dom';
import usePlayerNames from '../hooks/usePlayerNames';
import { slugify } from '../utils';

function CustomLink({ to, children }) {
  const { pathname, search } = useLocation();
  const playerId = pathname.split('/')[2];
  const match = playerId === to;

  const styles = match ? { fontWeight: 900, color: 'var(--white)' } : {};

  return (
    <li>
      <Link
        style={styles}
        to={{
          pathname: to,
          search,
        }}
      >
        {children}
      </Link>
    </li>
  );
}

function Sidebar({ title, list }) {
  return (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {list.map((item) => (
          <CustomLink key={item} to={slugify(item)}>
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
}

export default function Players() {
  const [sp] = useSearchParams();
  const team = sp.get('teamId');
  const { response: names, loading } = usePlayerNames(team);

  if (loading) return null;

  return (
    <div className="container">
      <Sidebar title="Players" list={names} />
    </div>
  );
}
