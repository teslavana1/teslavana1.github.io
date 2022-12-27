import './App.css';
import Resume from './ResumeMui';
import Portfolio from './Portfolio';
import Nav from './Nav';
import { Route, Routes, Navigate } from 'react-router-dom';
import UseRedirectToHttps from './hooks/useRedirectToHttps';
import AppAbout from './AppAbout';
import Footer from './Footer';


function App() {
  // UseRedirectToHttps()
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Navigate replace to='/sw/resume' />} />
        <Route path='/sw/resume' element={<Resume />} />
        <Route path='/sw/portfolio' element={<Portfolio />} />
        <Route path='/sw/portfolio/teslamartv2' element={<AppAbout />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
