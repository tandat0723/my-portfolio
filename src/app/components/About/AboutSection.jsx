'use client'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';

const tab_data = [{
    title: 'Skills',
    id: 'skills',
    content: (
        <ul className='list-disc pl-2'>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Sequelize</li>
            <li>JavaScript</li>
            <li>React</li>
        </ul>
    )
}, {
    title: "Education",
    id: "education",
    content: (
        <ul className="list-disc pl-2">
            <li>Front-end Academy of Code</li>
            <li>Ho Chi Minh City Open University</li>
        </ul>
    ),
}, {
    title: "Certification",
    id: "certification",
    content: (
        <ul className="list-disc pl-2">
            <li>AWS Cloud Practitioner</li>
            <li>Google Professional Cloud Developer</li>
        </ul>
    )
},]

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, transition] = useTransition();

    const handleTabChange = (id) => {
        transition(() => {
            setTab(id);
        })
    }

    return (
        <section className='text-white' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <img className='w-[500px] rounded-3xl' src='/assets/about.jpg' alt='about' />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I am a front-end developer and is aiming for full-stack developer with a passion
                        for creating interactive and responsive web applications. I have experience
                        working with JavaScript, React, Node.js, MySQL,
                        HTML, CSS and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
                            {' '}Skills{' '}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
                            {' '}Education{' '}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('certification')} active={tab === 'certification'}>
                            {' '}Certification{' '}
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {tab_data.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection