import React from 'react'
import Navbar from './sections/navbar'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <h1 className='text-2xl text-white underline'>
        <Navbar/>
      </h1>
    </main>
  )
}

export default App