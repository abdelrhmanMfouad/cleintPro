import { NavLink } from 'react-router-dom';

const links = [
  { to: '/',        label: 'الرئيسية', end: true },
  { to: '/clients', label: 'العملاء' },
  { to: '/about',   label: 'عن النظام' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">ClientPro</NavLink>
      <ul className="navbar-links">
        {links.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}