import React from 'react'
import MernStack from '~/assets/mernstack.png'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Js from '../assets/JS.png'
import Bootstrap from '../assets/Bootstrap.png'
import ReactLogo from '../assets/react.png'
import ReduxLogo from '../assets/redux.png'
import TailwindcssLogo from '../assets/tailwindcss.png'
import NodeJs from '../assets/NodeLogo.png'
import NextJs from '../assets/NextJs.png'

const About = () => {
    return (
        <div className='relative' id='about'>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-red-500 font-semibold tracking-wide uppercase'>
                            Giới Thiệu bản thân
                        </h2>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                            Xin chào, mình là Trần Tấn Đạt - Lập trình viên Web (Web Developer)
                        </p>
                        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                            Mình thích tạo các website tương tác bằng React và NextJS. Ngoài ra, tôi luôn học hỏi các công nghệ
                            mới để hoàn thiện thêm về bản thân.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                            <div>
                                <h3 className='text-2xl font-semibold text-gray-900'>Chia sẻ</h3>
                                <p className='mt-4 text-lg text-gray-600'>
                                    Mình luôn cố gắng học hỏi và phát triển bản thân mỗi ngày. Việc không ngừng học hỏi và thử thách bản thân
                                    sẽ giúp mình trở thành một lập trình viên giỏi hơn. Bên cạnh đó, mình cũng rất hứng thú với việc chia sẻ kiến
                                    thức và kinh nghiệm. Mình tin rằng việc chia sẻ sẽ giúp mình học hỏi nhiều hơn và cũng giúp người khác học hỏi
                                    được nhiều điều.
                                </p>
                                <img src={MernStack} alt='' className='p-2 rounded-full w-52 mt-4' />
                            </div>
                            <div className='border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
                                <h3 className='text-2xl font-semibold text-red-600'>Kỹ năng</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Html} alt='' className='w-10' />
                                        <span className='font-semibold'>HTML</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Css} alt='' className='w-10' />
                                        <span className='font-semibold'>CSS</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Js} alt='' className='w-10' />
                                        <span className='font-semibold'>JavaScript</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Bootstrap} alt='' className='w-10' />
                                        <span className='font-semibold'>Bootstrap</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={ReactLogo} alt='' className='w-10' />
                                        <span className='font-semibold'>React</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={NextJs} alt='' className='w-10' />
                                        <span className='font-semibold'>NextJS</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={TailwindcssLogo} alt='' className='w-10' />
                                        <span className='font-semibold'>TailwindCSS</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={NodeJs} alt='' className='w-10' />
                                        <span className='font-semibold'>NodeJS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About