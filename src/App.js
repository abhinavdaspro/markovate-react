import React from 'react'
import { Route, Routes } from 'react-router';
import { SignUp } from './pages/SignUp';
import Error from './pages/Error';
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="*" element={<Error />} />

    </Routes>
  );
}

export default App;
