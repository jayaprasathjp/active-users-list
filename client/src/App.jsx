import { useState } from 'react'
import Landing from './pages/Landing'
import UserLogin from './pages/UserLogin'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { Routes, Route, useLocation,Link,useNavigate } from 'react-router-dom';
import Profile from './pages/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/userLogin" element={<UserLogin/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
      
    </>
  )
}

export default App
