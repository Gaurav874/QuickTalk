import './App.css'
import { useEffect } from 'react';
import { useAuthStore } from './store/useAuthStore';
import {useThemeStore} from './store/useThemeStore';
import {Route , Routes , Navigate} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SettingPage from './pages/SettingPage'
import  ProfilePage from './pages/ProfilePage'
import './index.css'


function App() {
  const {authUser,checkAuth} = useAuthStore();
  const {theme} = useThemeStore();

  // useEffect(()=>{
  //   document.documentElement.setAttribute("data-theme",theme);
  // },[theme]);

  useEffect(() => {
  checkAuth();
}, []);

console.log({ authUser });

  return (
    <div data-theme={theme}>
      <Navbar/>

      <Routes>
          <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  )
}

export default App
