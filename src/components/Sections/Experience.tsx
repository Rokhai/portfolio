import React from 'react';

import { experience } from '../../utils/constants';

export const Experience: React.FC = () => {
    return (
        <section id='experience' className='mb-24 sm:mb-32'>
            <h2 className='section-title'>Experience</h2>
            <ol className='group/list space-y-10 mb-10'>
                {experience.map(({ title, company, location, date, responsibilities }) => {
                    const id = title.replace(' ', '-').toLowerCase() + '-' + company.replace(' ', '-').toLowerCase();

                    return (
                        <li
                            key={id}
                            className='group lg:group-hover/list:opacity-50 lg:hover:!opacity-100 transition-all duration-300 ease-in-out hover:after:bg-[#ff4dbe0a]  after:content-[""] relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:transform after:scale-105 after:rounded-lg after:transition-colors after:duration-300 after:ease-in-out after:drop-shadow-md hover:after:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]'>
                            <div className='grid grid-cols-8'>
                                <div className='col-span-8 sm:col-span-2 text-muted text-sm mb-1 sm:mb-0'>
                                    {date}
                                </div>
                                <div className='ml-0 sm:ml-4 col-span-8 sm:col-span-6'>
                                    <h3 className='text-base group-hover:text-accent'>
                                        {title} - {company}
                                    </h3>
                                    <span className='text-muted text-sm'>{location}</span>
                                    <div className='mt-2'>
                                        {responsibilities.map((responsibility) => (
                                            <p key={responsibility} className='text-muted text-sm'>
                                                {'- '}
                                                {responsibility}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ol>
            <a href="assets/cv.pdf" target='_blank' rel='noopener noreferrer' className='btn-primary link-primary '>
                View CV
            </a>
        </section>
    )
}