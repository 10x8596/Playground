import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Grid from './components/Grid.jsx';
import MailForm from './components/MailForm.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Grid />
      <MailForm />
    </div>
  );
}

export default App;
