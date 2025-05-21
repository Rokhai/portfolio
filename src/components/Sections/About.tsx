import React from 'react';

export const About: React.FC = () => {
    return (
         <section id='about' className='text-muted mt-24 sm:mt-32 lg:mt-0'>
          <h2 className='section-title block lg:hidden'>About me</h2>
          <div className='space-y-4'>
            <p>
              I'm a computer science student who like to discover new technologies and develop my abilities. 
              Web development interests me a lot, along with frameworks including the MERN Stack and Laravel. 
              I am constantly seeking to pick up new skills by looking at real life projects from the industry.
            </p>
          </div>
        </section>
    )
}