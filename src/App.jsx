import './App.css'
import Hero from '~/components/Hero'
import Navbar from '~/components/Navbar'
import Particle from '~/components/Particle'
import About from '~/components/About'

function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <Hero />
      <About />
    </>
  )
}

export default App
