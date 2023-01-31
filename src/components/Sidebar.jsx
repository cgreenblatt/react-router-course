import { Link, useLocation } from 'react-router-dom';
import { slugify } from '../utils';

function CustomLink({ to, children }) {
  const { pathname, search } = useLocation();
  const split = pathname.split('/');
  const id = split[split.length - 1];
  const match = id === to;

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

export default function Sidebar({ title, list }) {
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
