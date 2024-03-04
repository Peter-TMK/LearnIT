import { Hero, About, Features, Statistics, Benefits, Newsletter, Cta, Contact } from '../../components/index.js'
import './homepage.css'

const Homepage = () => {
  return (
    <>
      <main className='main__container'>
          <Hero />
          <About /> 
          <Features />
          <Statistics/>
          <Contact/>
          <Newsletter/>
          <Benefits/>
          <Cta/>
      </main>
    </>
  )
}

export default Homepage