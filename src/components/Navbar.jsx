import { useNavigate } from 'react-router-dom'

export default function Navbar({ breadcrumb, title, icon, closed, setClosed, className = 'Navbar' }) {
  const navigate = useNavigate()

  return (
    <div className={className}>
      <div className="navbar-title">
        <p>
          {breadcrumb} / <i className={icon}></i>
        </p>
        <h1>{title}</h1>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="...Type here" />
        </div>

        <div className="logout" onClick={() => navigate('/')}>
          <i className="fa-solid fa-user"></i>
          <span>Log out</span>
        </div>

        <i
          className="fa-solid fa-bars navbar-menu-icon"
          id="sidebarToggle"
          onClick={() => setClosed(!closed)}
        ></i>

        <i className="fa-solid fa-gear navbar-icon"></i>
        <i className="fa-solid fa-bell navbar-icon"></i>
      </div>
    </div>
  )
}
