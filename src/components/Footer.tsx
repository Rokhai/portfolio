import React from 'react';

export const Footer: React.FC = () => {

    return (
        <footer className='text-muted text-sm'>
            <p>
                Built with <span className='highlight'>React.js</span> and{' '}
                <span className='highlight'>Tailwind CSS</span>, deployed with{' '}
                <span className='highlight'>Vercel</span>.
            </p>
            <p>
                Higly inspired by {''}
                <span className='highlight'>
                    <a href="https://github.com/zomeru/zoms/">
                        Zomer Gregorio
                    </a>
                </span>
                {' '} in his {' '}
                <span className='highlight'>
                    <a href="https://zoms.vercel.app/">
                        portfolio
                    </a>
                </span>
            </p>
            <p>
                &copy; 2025{' '}
                <a className='btn-primary' href='https://github.com/Rokhai' target='_blank' rel='noreferrer noopener'>
                    Rosgen Hizer
                </a>
                . All rights reserved.
            </p>
        </footer>
    )
}