import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Landscapes from './Pages/Landscapes';
import Portraits from './Pages/Portraits';
import Prints from './Pages/Prints';
import Contact from './Pages/Contact';
// import Lightbox from './comps/Lightbox';

function App() {
  return (
    <Router>
      <nav className='links'>
        <Link to='/'> Home </Link>
        <Link to='/landscapes'> Landscapes </Link>
        <Link to='/portraits'> Portraits </Link>
        <Link to='/prints'> Prints </Link>
        <Link to='/contact'> Contact </Link>
      </nav>
      <div className='header'>
        <h1>Ryan Andersen Photography</h1>
        <div className='sub-heading'>
          <h2>Love For The West</h2>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/landscapes' element={<Landscapes />} />
        <Route path='/portraits' element={<Portraits />} />
        <Route path='/prints' element={<Prints />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
