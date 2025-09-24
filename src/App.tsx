import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Login } from './screens/Login';
import { Dashboard } from './screens/Dashboard';

const App: React.FC = () => {
  const [token, setToken] = useState<any>(localStorage.getItem('token'));

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            token ? (
              <Navigate to='/dashboard' />
            ) : (
              <Login onLogin={(t: string) => setToken(t)} />
            )
          }
        />
        <Route
          path='/dashboard'
          element={token ? <Dashboard /> : <Navigate to='/' />}
        />
      </Routes>
    </Router>
  );
};

export default App;
