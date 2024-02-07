import { possibility, people } from '../../assets'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import './hero.css';
import '../../App.css';

const HeroPage = () => {
  return (
    <div className='lms__header section__padding' id='home'>
      <div className='lms__header-content'>
        <h1 className='gradient__text'>
          Lorem ipsum dolor sit amet consect worked!
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          doloribus facilis minima exercitationem recusandae.
        </p>
        <div className='lms__header-content__input'>
          <input type='input' placeholder='choose a course' />
          <button type='button'>Get Started</button>
        </div>
        <div className='lms__header-content__people'>
          <LazyLoadImage src={people} alt='people' effect='opacity'/>
          <p>1600 people requested access</p>
        </div>
      </div>
      <div className='lms__header-image'>
        <LazyLoadImage src={possibility} alt='ai' effect='blur'/>
      </div>
      <div className='color__Tester'></div>
    </div>
  );
};

export default HeroPage;
