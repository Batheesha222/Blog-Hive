import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const PrivateNavbar = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    window.localStorage.removeItem("blogData");
    toast.success("Logout successful");
    navigate("/login");
  };
  return (
    <nav className="primary-link">
      <NavLink to="/">Home</NavLink>
      {(auth.role === 1 || auth.role === 2) && (
        <NavLink to="/categories">categories</NavLink>
      )}
      <NavLink to="/posts">posts</NavLink>
      <NavLink to="/profile">profile</NavLink>
      <NavLink to="/setting">setting</NavLink>
      <NavLink to="/login" onClick={handleLogout}>
        Logout
      </NavLink>
    </nav>
  );
};

export default PrivateNavbar;
