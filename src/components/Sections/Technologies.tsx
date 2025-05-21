import React from 'react';

import { technologies } from '../../utils/constants';

export const Technologies: React.FC = () => {

    return (
        <section id='technologies' className='my-24 sm:my-32'>
            <h2 className='section-title'>Technologies</h2>
            <ul className='inline-flex flex-wrap gap-2'>
                {technologies.map(({name, Icon}) => (
                    <li key={name}
                        className='flex items-center space-x-2 px-3 rounded-full py-2 bg-accent-muted'>
                        <Icon className='text-secondary' />
                        <span className='text-secondary text-xs'>{name}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};
