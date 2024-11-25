import Navbar from './sections/navbar'
import Hero from './sections/hero'
import About from './sections/about'
import Projects from './sections/project'
import Clients from './sections/Clients'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Clients/>
    </main>
  )
}

export default App