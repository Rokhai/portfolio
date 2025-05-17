import React from 'react';

import { technologies } from '../../utils/constants';

const Technologies: React.FC = () => {

    return (
        <section id='technologies' className=''>
            <h2 className='text-accent font-medium text-xl mb-3'>Technologies</h2>
            <ul className='inline-flex flex-wrap gap-2'>
                {technologies.map(({name, Icon}) => (
                    <li key={name}
                        className='flex items-center space-x-2 px-3 rounded-full py-2 bg-accent/10'>
                        <Icon className='text-secondary' />
                        <span className='text-secondary text-xs'>{name}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Technologies;
