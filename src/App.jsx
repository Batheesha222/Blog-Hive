import { Routes, Route } from "react-router-dom";
import PrivateLayout from "./components/layout/PrivateLayout";
import CategoryList from "./pages/category/CategoryList";
import Home from "./pages/Home";
import PostList from "./pages/post/PostList";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import PublicLayout from "./components/layout/PublicLayout";

function App() {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="categories" element={<CategoryList />}></Route>
        <Route path="posts" element={<PostList />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="setting" element={<Setting />}></Route>
      </Route>

      <Route element={<PublicLayout />}>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />F
      </Route>
    </Routes>
  );
}

export default App;
