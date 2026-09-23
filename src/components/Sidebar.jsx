import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  ['fa-solid fa-house', 'Dashboard', '/dashboard.html'],
  ['fa-regular fa-calendar-days', 'Appointments', '#'],
  ['fa-solid fa-user-doctor', 'Find Doctor', '/find-doctor.html'],
  ['fa-solid fa-hospital', 'Find Clinic', '/find-clinic.html'],
  ['fa-solid fa-comments', 'Chat', '#'],
  ['fa-solid fa-shop', 'Find MarketPlace', '#'],
  ['fa-solid fa-tablets', 'Find Pharmacy', '#'],
  ['fa-solid fa-children', 'My Dependents', '#'],
  ['fa-solid fa-circle-user', 'My Account', '#'],
  ['fa-solid fa-gear', 'Settings', '#'],
]

export default function Sidebar({ closed, active: initialActive }) {
  const [active, setActive] = useState(initialActive)

  const handleClick = (label) => {
    setActive(label)
  }

  return (
    <aside className={`sidebar${closed ? ' closed' : ''}`}>
      <div className="logo">
        <img src="/images/logo.jpeg" alt="PatientHUB logo" />
        <span>PatientHUB</span>
      </div>
      <div className="sidebar-divider"></div>
      <nav className="sidebar-menu">
        {links.map(([icon, label, href]) =>
          href === '#' ? (
            <a
              key={label}
              className={`menu-item${active === label ? ' active' : ''}`}
              href="#"
              onClick={(event) => { event.preventDefault(); handleClick(label) }}
            >
              <i className={icon}></i>
              <span>{label}</span>
            </a>
          ) : (
            <Link
              key={label}
              className={`menu-item${active === label ? ' active' : ''}`}
              to={href}
              onClick={() => handleClick(label)}
            >
              <i className={icon}></i>
              <span>{label}</span>
            </Link>
          )
        )}
      </nav>
      <button className="help-button" type="button">
        <span>?</span>
      </button>
      <div className="sidebar-resizer"></div>
    </aside>
  )
}
