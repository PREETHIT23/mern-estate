import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Header from "./components/Header.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/sign-in' element={<SignIn />} />
    <Route path='/sign-up' element={<SignUp />} />
    <Route path='/about' element={<About />} />
    <Route element={
      <PrivateRoute />
    }>
    <Route path='/profile' element={<Profile />} />
    </Route>
  </Routes>
  </BrowserRouter>
 
}
