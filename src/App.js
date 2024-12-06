import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';

import Main from './pages/Main';
import Study from './pages/Study';
import White from './pages/White';
import Heart from './pages/Heart';
import Trace from './pages/Trace';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to="/main" />} />
        <Route path="main" element={<Main />} />
        <Route path="study" element={<Study />} />
        <Route path="white" element={<White />} />
        <Route path="heart" element={<Heart />} />
        <Route path="trace" element={<Trace />} />
      </Routes>
    </Router>
  );
}

export default App;
