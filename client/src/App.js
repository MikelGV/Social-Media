import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Register from "./pages/register/register";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {user} = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register/> }/>
        <Route path="/login" element={ user ? <Navigate to="/"/> : <Login />}/>
        <Route path="/profile/:username" element={<Profile />}/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
