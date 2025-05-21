import React, { useState, useMemo } from 'react';

import { projects } from '../../utils/constants';

import { FiGithub } from 'react-icons/fi';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { FaAward } from "react-icons/fa6";

const numberOfProjects = 4;

export const Projects: React.FC = () => {

    const [perPage, setPerPage] = useState(numberOfProjects);

    const filteredProjects = useMemo(() => {
        return projects.slice(0, perPage);
    }, [perPage]);

    const handleShowMore = (): void => {
        if (filteredProjects.length === projects.length) return;
        setPerPage((prev) => prev + 4);
    };

    const handleShowLess = (): void => {
        setPerPage(4);
    };

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();

        if (filteredProjects.length < projects.length) {
            handleShowMore();
        } else {
            handleShowLess();
        }
    };

    return (
        <section id='projects' className='mb-24 sm:mb-32'>
            <h2 className='section-title'>Projects</h2>
            <ol className='group/list space-y-12 sm:space-y-6 mb-10'>
                {filteredProjects.map(({ name, image, alt, description, technologies, links }) => (
                    <li
                        key={name}
                        className='group lg:group-hover/list:opacity-50 lg:hover:!opacity-100 transition-all duration-300 ease-in-out hover:after:bg-[#ff4dbe0a]  after:content-[""] after:z-[-1] relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:transform after:scale-105 after:rounded-lg after:transition-colors after:duration-300 after:ease-in-out after:drop-shadow-md hover:after:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]'
                    >
                        <div className='grid grid-cols-8 z-10'>
                            <div className='col-span-8 sm:col-span-2 relative w-[200px] sm:w-full h-[100px] lg:h-[70px] mt-1 rounded-md overflow-hidden border border-gray-400 order-last sm:order-first'>
                                <img src={image} alt={alt} className='w-full h-full object-cover object-center' sizes='(max-width: 768px) 100vw' loading='lazy' />
                            </div>
                            <div className='ml-0 sm:ml-4 col-span-8 sm:col-span-6'>
                                <h3 className='text-base group-hover:text-accent mb-2'>{name}</h3>
                                <div className='mb-2 flex space-x-4'>
                                    {links.github && (
                                        <a
                                            href={links.github}
                                            className='flex items-center text-muted text-sm space-x-1 transition-colors duration-300 ease-in-out hover:text-accent'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <span>Github</span>
                                            <FiGithub />
                                        </a>
                                    )}
                                  
                                    {links.demo && (
                                        <a
                                            href={links.demo}
                                            className='flex items-center text-muted text-sm space-x-1 transition-colors duration-300 ease-in-out hover:text-accent'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <span>Demo</span>
                                            <AiOutlineArrowUp className='transform rotate-45' />
                                        </a>
                                    )}
                                    {links.award && (
                                        <a
                                            href={links.award}
                                            className='flex items-center text-muted text-sm space-x-1 transition-colors duration-300 ease-in-out hover:text-accent'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <span>Award</span>
                                            <FaAward />
                                        </a>
                                    )}
                                    
                                </div>
                                <p className='text-sm text-muted mb-3'>{description}</p>
                                <ul className='flex flex-wrap'>
                                    {technologies.map((technology) => (
                                        <li
                                            key={technology}
                                            className='mr-3 items-center mb-3 px-3 rounded-full bg-accent-muted'>
                                            <span className='text-xs text-muted text-center'>
                                                {technology}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </li>
                ))}
            </ol>
            {/* The button will only appear when @project.length is greater than the numberOfProjects */}
            {projects.length > numberOfProjects &&  (
                <button className='outline-none' type='button' onClick={handleButtonClick}>
                    <span className='btn-primary link-primary'>
                        {filteredProjects.length < projects.length ? 'Show more' : 'Show less'}
                    </span>
                </button>
            )}
        </section>
    )

}