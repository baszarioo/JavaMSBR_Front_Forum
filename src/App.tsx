import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    // <div>App</div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/forum" Component={Forum} />
      </Routes>
    </Router>
  )
}

export default App;
