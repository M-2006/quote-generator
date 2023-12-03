import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import Generator from './Pages/Generator';
import Quotes from './Pages/Quotes';
import './Styles/style.css';

function Home() {
  return (
    <div>
      <NavBar />
      <Generator />
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quote' element={<Quotes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
