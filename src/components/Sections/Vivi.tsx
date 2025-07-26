export const Vivi = (): React.JSX.Element => {

    return (
        <div className='absolute right-0 bottom-0 transform translate-y-20 pb-10 sm:pb-10'>

            <div className='relative group'>
                <button
                    className='relative w-[148px] h-[140px] hover:-translate-y-3 transition-transform duration-200'
                    type='button'
                    onClick={() => window.open('https://rokhai.itch.io/', '_blank')}
                >
                    <img
                        src="/assets/gif/vivi-unscreen.gif"
                        alt="Vivi"
                        className='h-full w-auto object-contain'
                        sizes='(max-width: 768px) 100vw'
                        loading='lazy'
                    />
                </button>
                <span className="
                    absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3  py-1 rounded 
                    bg-primary text-white text-xs opacity-0 
                    w-auto whitespace-nowrap
                    group-hover:opacity-100 transition-opacity pointer-events-none z-10"
                >

                    You'll be redirected to itch.io page.
                    <span className='text-accent mx-1'>
                        Made by @mr_pxls
                    </span>
                </span>
            </div>
 
        </div>
    );
};

