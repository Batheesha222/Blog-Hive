import { NavLink } from "react-router-dom";


const PublicNavbar = () => {
  return (
    <nav className="primary-link">
        <NavLink to="/login">Logout</NavLink>
        <NavLink to="/signup">Signup</NavLink>
    </nav>
  )
}

export default PublicNavbar