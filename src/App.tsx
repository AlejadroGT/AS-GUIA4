import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './page/login';
import Dashboard from './page/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redireccionar la raíz "/" a "/login" */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

