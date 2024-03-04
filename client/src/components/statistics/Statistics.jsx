import { blog02 } from '../../assets/index';
import './statistics.css';

const Statistics = () => {
  return (
    <section className='statistics__container'>
      <div className='stats__header'>
        <h2>Achievements</h2>
      </div>
      <div className='stats__content'>
        <div className='stats__content-image'>
          <img src={blog02} alt='' />
        </div>
        <article className='stats__content-data'>
          <div className="data__container">
            <div className='content__data'>
              <div className='data'>
                <h3>1</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className='data'>
                <h3>2+</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className='content__data'>
              <div className='data'>
                <h3>3+</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className='data'>
                <h3>4</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Statistics;
