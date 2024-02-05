/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
const Landing = lazy(()=>import('./components/Landing'));

// Correct usage of React.lazy
const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
      <Route path='/' element={<Suspense fallback={<div>Loading...</div>}>
          {<Landing />}
          </Suspense>}  />
          {/* Wrap Dashboard with Suspense for lazy loading */}
          <Route
            path='/dashboard'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          border: '2px solid red',
          height: '50px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <button
          onClick={() => {
            navigate('/dashboard');
          }}
        >
          Dashboard
        </button>

        <button
          onClick={() => {
            navigate('/');
          }}
        >
          Landing page
        </button>
      </div>
    </div>
  );
}

export default App;
