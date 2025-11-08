import React from 'react'
import './hero.css'
import { ReactTyped } from 'react-typed'

const Hero = () => {
    return (
        <section id='hero' className='d-flex flex-column justify-content-center'>
            <div className='container'>
                <h1>Tran Tan Dat</h1>
                {/* <p>
                    I'm{' '}
                    <ReactTyped 
                        strings={[Designe]}
                    />
                </p> */}
            </div>
        </section>
    )
}

export default Hero