import React from 'react'

import Navigation from './Navigation';
import Socials from './Socials';

export const MainInfo: React.FC = () => {
    return (
        <section className=' h-auto lg:h-[calc(100vh-180px)] flex flex-col lg:justify-between justify-normal lg:w-[550px] mr-auto w-full static lg:fixed'>
            <div className='space-y-3 mb-3 lg:mb-0'>
                <h1 className='font-bold text-secondary text-4xl md:text-5xl'>Rosgen Hizer</h1>
                <h2 className='text-secondary text-xl md:text-2xl font-medium'>Computer Science</h2>
                <h3 className='max-w-[350px] text-muted'>
                    I'm passionate about web technology, and development, learning new things and solving problems.
                </h3>
                <div className='transform translate-y-20 text-secondary'>
                    <Navigation />
                </div>
            </div>
            <Socials />
        </section>
    )
}