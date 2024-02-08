import './about.css';
import { Link } from 'react-router-dom';


const About = () => {
  return <div id='about'>
    About
    <Link to='/about'>Our Story</Link>
  </div>;
};

export default About;
