import { useState, useEffect } from 'react';
import './features.css';
import { ai } from '../../assets/index';

const Features = () => {
  const [opacities, setOpacities] = useState([0.3, 0.3, 0.3, 0.3, 0.3, 0.3]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacities((prevOpacities) => {
        const newOpacities = prevOpacities.map((opacity, index) =>
          index === currentIndex ? 1 : 0.3
        );
        setCurrentIndex((prevIndex) => (prevIndex + 1) %6);
        return newOpacities;
      });
    }, 5000); // Change opacity every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentIndex]); // Include currentIndex as a dependency

  return (
    
    <section className='features__section'>
      <div className='features__container'>
        
        <div className='right-side column'>
          <article className='column-content'>
            <div className="icon"></div>
            <h3>Lorem ipsum dolor sit</h3>
            <p style={{ opacity: opacities[5] }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab
              assumenda ut illum, dolorum reprehenderit!
            </p>
          </article>
          <article className='column-content'>
            <div className="icon"></div>
            <h3>Lorem ipsum dolor sit</h3>
            <p style={{ opacity: opacities[3] }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab
              assumenda ut illum, dolorum reprehenderit!
            </p>
          </article>
        </div>
        <div className='mid-side column'>
          <h2>Features</h2>
          <article className='column-content'>
            <div className="icon"></div>
            <h3>Lorem ipsum dolor sit</h3>
            <p style={{ opacity: opacities[1] }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab
              assumenda ut illum
            </p>
          </article>
          <div className='column-content-image'>
            <img src={ai} alt='an ai head image' />
          </div>
          <article className='column-content'>
            <div className="icon"></div>
            <h3>Lorem ipsum dolor sit</h3>
            <p  style={{ opacity: opacities[1] }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab
              assumenda ut illum
            </p>
          </article>
        </div>
        <div className='left-side column'>
          <article className='column-content'>
            <div className="icon"></div>
            <h3>Lorem ipsum dolor sit</h3>
            <p  style={{ opacity: opacities[3] }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab
              assumenda ut illum, dolorum reprehenderit!
            </p>
          </article>
          <article className='column-content'>
            <div className="icon"></div>
            <h3>Lorem ipsum dolor sit</h3>
            <p  style={{ opacity: opacities[5] }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab
              assumenda ut illum, dolorum reprehenderit!
            </p>
          </article>
        </div>
        
      </div>
        {/* <Statistics/> */}
    </section>
  );
};

export default Features;
