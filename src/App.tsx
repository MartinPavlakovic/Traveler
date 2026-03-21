import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Nav from './components/Nav';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Chats from './pages/Chats';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Page404 from './pages/Page404';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/chats" element={<Chats />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
