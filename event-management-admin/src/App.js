import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import AdminDashboard from './pages/AdminDashboard';
import { Container } from './styles';

const App = () => {
  const handleLoginSuccess = () => {
    window.location.href = '/admin';
  };

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
