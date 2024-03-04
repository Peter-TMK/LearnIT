import PropTypes from 'prop-types';

import './signUp.css';
import { Link } from 'react-router-dom';
import { google, github, facebook, closeEye, openEye } from '../../assets';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoIosClose } from 'react-icons/io';
import { useState } from 'react';
import axios from 'axios'; // Import Axios

// eslint-disable-next-line react/prop-types
const SignUp = ({ onClose }) => {
  const [toggleSignupCard, setToggleSignupCard] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/api/auth/signup',
        {
          email,
          password,
        }
      );
      console.log(response.data); // Handle successful signup
    } catch (error) {
      setError(error.response.data.message); // Handle error
    }
  };

  return (
    <div className='sign__up-container'>
      {toggleSignupCard && (
        <div className='signup__card '>
          <form id='signup__form' onSubmit={handleSignUp}>
            <div className='closeBtn'>
              <IoIosClose
                className='close__btn'
                onClick={() => {
                  setToggleSignupCard(false);
                  onClose();
                }}
              />
            </div>
            <h1>REGISTER</h1>
            {error && <div className="error">{error}</div>}
            <div className='email'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='password__card'>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                id='password'
                placeholder='Password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
              />
              <LazyLoadImage
                id='open__eye'
                src={showPassword ? openEye : closeEye}
                alt='close__eye'
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
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
        </div>
      )}
    </div>
  );
};

SignUp.propTypes = {
  onClose: PropTypes.func.isRequired, // Validate onClose prop as a function
};

export default SignUp;
