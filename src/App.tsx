import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Forum from './pages/Forum';

const App: React.FC = () => {
  return (
    // <div>App</div>
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/forum" Component={Forum} />
      </Routes>
    </Router>
  )
}

export default App;
