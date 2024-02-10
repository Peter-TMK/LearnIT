import { Homepage, AboutUs, Library, Courses } from './containers';
import { Navbar, Footer } from './components'
import './App.css';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div  className='App'>
        <Navbar />   
        <Routes>
        {/* recall to put an id==about statement in every container and the aboutUs link */}
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/library' element={<Library />} />
        </Routes>
        <Footer />
    </div>
  );
};

export default App;
