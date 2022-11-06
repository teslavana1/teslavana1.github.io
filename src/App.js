import './App.css';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Nav from './Nav';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Navigate replace to='/sw/resume' />} />
        <Route path='/sw/resume' element={<Resume />} />
        <Route path='/sw/portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
