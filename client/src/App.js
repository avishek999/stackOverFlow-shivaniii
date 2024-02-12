
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { isDocument } from '@testing-library/user-event/dist/utils';
import { Component } from 'react';
function App() {
  return (
    <div className="App">
      <Router>  
        <Navbar/> 
      </Router>
    </div>
  )
}
export default App;