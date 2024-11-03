const Hero = () => {
  return (
    <section className='min-h-screen border-2 border-blue-500 w-full flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>Hi, we are CodeNest <span className='waving-hand'>👋</span></p>
            <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
        </div>
    </section>
  )
}

export default Hero