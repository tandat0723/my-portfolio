import React from 'react'

const HeroSection = () => {
    return (
        <section>
            <div className='gird grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7'>
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                        Hello, I'm Jun
                    </h1>
                    <p className='text-gray-400 text-lg lg:text-xl mb-6'>
                        I'm Front-End Developer, welcome to my website!
                    </p>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[240px] h-[240px] lg:w-[400px] lg:h-[400px] relative'>
                        <img className='absolute transform -translate-y-1/2 top-1/2' src='/assets/ban-dev.png' alt='banner' width={300}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection