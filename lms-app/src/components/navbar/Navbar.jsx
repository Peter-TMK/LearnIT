import { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import '../../App.css';
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
    <p>
      <Link to='/'>Home</Link>
    </p>
    <p>
      <a href='#about'>About</a>
    </p>
    <p>
      <a href='#contact'>Contact</a>
    </p>
    <p>
      <Link to='/courses'>Courses</Link>
    </p>
    <p>
      <Link to='/library'>Library</Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const addNavbar = () => {
      navbarElement.classList.add('gradient__bg');
    };

    const remNavbar = () => {
      navbarElement.classList.remove('gradient__bg');
    };

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollTop;
      if (scrollHeight >= 118) {
        addNavbar();
      } else {
        remNavbar();
      }
    };

    const navbarElement = document.querySelector('.lms__navbar');
    document.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup the event listener when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='lms__navbar'>
      <div className='lms__navbar-links'>
        <div className='lms__navbar-links_logo'>
          <h1 className='logo'>PKtech</h1>
        </div>
        <div className='lms__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='lms__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='lms__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='lms__navbar-menu_container scale-up-center'>
            <div className='lms__navbar-menu_container-links'>
              <Menu />
            </div>
            <div className='lms__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
