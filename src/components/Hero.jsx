import facebook from '~/assets/facebook.png'
import instagram from '~/assets/instagram.png'
import linkedin from '~/assets/linkedin.png'
import profile_img from '~/assets/profile-img.png'
import reactlogo from '~/assets/react.png'
import reduxlogo from '~/assets/redux.png'
import tailwindcclogo from '~/assets/tailwindcss.png'

const Hero = () => {
    return (
        <section className='relative'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row items-center lg:h-[94vh] justify-between'>
                    <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
                        <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>
                            Xin chào!
                            <br />Tui là <span className='text-red-500'>Jun</span>
                        </h1>
                        <p className='md:text-2xl text-xl mb-4'>Web Developer</p>
                        <p className='mb-4'>Trang web này là nơi lưu trữ lại dự án của tui. Các dự án bản thân tui đang và đã làm trong
                            quá trình họp tập và làm việc để phát triển bản thân.</p>
                        <button className='bg-black text-white px-4 py-2 w-max rounded-full'>
                            CV của tui
                        </button>
                    </div>
                    <div className='md:w-1/2 relative flex justify-center items-end'>
                        <img src={profile_img} alt='' className='lg:w-[55vh] w-full' />
                        <img src={reactlogo} alt='' className='absolute w-10 top-36 left-0 rounded-full md:hidden' />
                        <img src={reduxlogo} alt='' className='absolute w-10 top-0 right-5 md:hidden' />
                        <img src={tailwindcclogo} alt='' className='absolute w-10 rounded-full right-0 bottom-36 md:hidden' />
                    </div>
                </div>
            </div>
            <div className='absolute top-60 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'>
                <img src={facebook} alt='' className='w-20' />
                <img src={instagram} alt='' className='w-20' />
                <img src={linkedin} alt='' className='w-20' />
            </div>
        </section>
    )
}

export default Hero