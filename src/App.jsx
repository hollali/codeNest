import Navbar from './sections/navbar'
import Hero from './sections/hero'
import About from './sections/about'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
        <Navbar/>
        <Hero/>
        <About/>
    </main>
  )
}

export default App