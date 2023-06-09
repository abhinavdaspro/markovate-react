import React from 'react'
import { Route, Routes } from 'react-router';
import { SignUp } from './pages/SignUp';
import Error from './pages/Error';
import SelectHire from './pages/SelectHire';
import SelectSkill from './pages/SelectSkill';
import Layout from './components/Layout/Layout';
import Protected from './components/Protected';
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route element={<Protected><Layout /></Protected>}>
        <Route path="/hire" element={<SelectHire />} />
        <Route path="/skills" element={<SelectSkill />} />
      </Route>
      <Route path="*" element={<Error />} />

    </Routes>
  );
}

export default App;
