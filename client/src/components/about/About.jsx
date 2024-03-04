import './about.css';
import { Link } from 'react-router-dom';
import { blog01, blog02, blog03 } from '../../assets';


const About = () => {
  return (
  <div className='main__container'>
    <div id='about'></div>
    <div className='about__container'>
      <div className="about__us-header">
        <h2>About Us</h2>
      </div>
      <div className="containers">
        <div className='left__container'>
          <div className='left__container-text'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur adipisicing.</p> 
          </div>
          <div className="left__container-image">
            <Link to='/about'><button className='heartbeat vibrate-1'>Read More</button></Link> 
            <img src={blog01} alt="" />
          </div>
        </div>
        <div className="mid container">
          <div className="mid__container-image">
              <img src={blog02} alt="" />
          </div>
          <div className='container-text'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem, ipsum dolor sit amet consectetur adipisicing.</p> 
          </div>
        </div>
        <div className="right container">
          <div className='container-text'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.</p> 
          </div>
          <div className="right__container-image">
              <img src={blog03} alt="" />
          </div>
        </div>
      </div>     
    </div>
  </div>
  )};

export default About;
