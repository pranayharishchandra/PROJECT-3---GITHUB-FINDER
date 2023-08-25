import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Pagenotfound from './components/pages/Pagenotfound';
import { GithubProvider } from './components/context/github/GithubContext';




import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className='container'>
          <Navbar />
          <div>
            <Routes>
              <Route path='/home'         element={<Home />} />
              <Route path='/about'        element={<About />} />
              <Route path='/pagenotfound' element={<Pagenotfound />} />
              <Route path='/*'            element={<Pagenotfound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
