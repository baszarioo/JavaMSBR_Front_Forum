import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/Auth/SignUp/SignUp';
import LoginComp from './components/Auth/Login/LoginComp';

const App: React.FC = () => {
  return (
    // <div>App</div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/forum" Component={Forum} />
        <Route path="/sign-up" Component={SignUp} />
        <Route path="/login" Component={LoginComp} />
      </Routes>
    </Router>
  )
}

export default App;
