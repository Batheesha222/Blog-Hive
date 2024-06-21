import { NavLink } from "react-router-dom";


const PrivateNavbar = () => {
  return (
    <nav className="primary-link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">categories</NavLink>
        <NavLink to="/posts">posts</NavLink>
        <NavLink to="/profile">profile</NavLink>
        <NavLink to="/setting">setting</NavLink>
        <NavLink to="/login">Logout</NavLink>
    </nav>
  )
}

export default PrivateNavbar