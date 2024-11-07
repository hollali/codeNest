import Navbar from './sections/navbar'
import Hero from './sections/hero'
import About from './sections/about'
import Projects from './sections/project'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
    </main>
  )
}

export default App