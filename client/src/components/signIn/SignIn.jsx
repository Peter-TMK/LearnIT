import './signIn.css';
import { Link } from 'react-router-dom';
import { openEye, google, github, facebook } from '../../assets'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SignIn = () => {
  return (
    <div className='sign__in-container'>
      <div className='signin__card'>
        <form>
          <h1>LOGIN</h1>
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
            <LazyLoadImage  src={openEye} alt='open__eye' />
          </div>
          <div className='submit__btn'>
            <button type='submit'>SIGN IN</button>
          </div>
        </form>
        <div className='sign__in--text'>
          <Link to='#'>
            <p>forgot password?</p>
          </Link>
          <p>or</p>
          <p>sign in with</p>
        </div>
        <div className='social__icons'>
          <div className='google'>
            <Link to='#'>
              <LazyLoadImage  src={google} alt='google thumbnail' />
            </Link>
          </div>
          <div className='github'>
            <Link to='#'>
              <LazyLoadImage  src={github} alt='github thumbnail' />
            </Link>
          </div>
          <div className='facebook'>
            <Link to='#'>
              <LazyLoadImage  src={facebook} alt='facebook thumbnail' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
