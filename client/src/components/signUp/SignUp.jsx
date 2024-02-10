import './signUp.css';
import { Link } from 'react-router-dom';
import { openEye, google, github, facebook } from '../../assets';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoIosClose } from 'react-icons/io';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const SignUp = ({ onClose }) => {
  const [toggleSignupCard, setToggleSignupCard] = useState(true);
  return (
    <div className='sign__up-container'>
      {toggleSignupCard && (
        <div className='signup__card '>
          <form id='signup__form'>
            <div className='closeBtn'>
              <IoIosClose className='close__btn' onClick={()=>{
                setToggleSignupCard(false);
                onClose();
              }} />
            </div>
            <h1>REGISTER</h1>
            <div className='email'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                required
              />
            </div>
            <div className='password__card'>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                required
              />
              <LazyLoadImage src={openEye} alt='open__eye' />
            </div>
            <div className='submit__btn'>
              <button type='submit'>SIGN UP</button>
            </div>
          </form>
          <div className='sign__up--text'>
            <p>or</p>
            <p>sign up with</p>
          </div>
          <div className='social__icons'>
            <div className='google'>
              <Link to='#'>
                <LazyLoadImage src={google} alt='google thumbnail' />
              </Link>
            </div>
            <div className='github'>
              <Link to='#'>
                <LazyLoadImage src={github} alt='github thumbnail' />
              </Link>
            </div>
            <div className='facebook'>
              <Link to='#'>
                <LazyLoadImage src={facebook} alt='facebook thumbnail' />
              </Link>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default SignUp;
