import React from "react";

const REGEX = /[/#]/g;

import { navigation } from "../utils/constants";

const Navigation: React.FC = () => {
    const [currentSection, setCurrentSection] = React.useState('about');

    React.useEffect(() => {
        const handleScroll = (): void => {
            const sections = document.querySelectorAll('section');

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionBottom = section.getBoundingClientRect().bottom;

                // Remove the projects section from the height calculation if your projects are more than 4
                const height = section.id === 'technologies' || section.id === 'projects' ? 150 : 100;

                if (sectionTop <= height && sectionBottom >= height) {
                    const hasThisSection = navigation.find((nav) => {
                        return nav.url.replace(REGEX, '') === section.id;
                    });

                    if (hasThisSection !== undefined) {
                        setCurrentSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        e.preventDefault();

        const target = e.currentTarget.getAttribute('href');

        if (target !== null) {
            const newTarget = target.replace('/', '');

            const element = document.querySelector(newTarget);
            const offset = 90;

            if (element !== null) {
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <nav className='hidden lg:block'>
            <ul className='list-none space-y-4'>
                {navigation.map(({ name, url }) => {
                    const isCurrentSection = currentSection === url.replace(REGEX, '');
                    return (
                        <li key={url}>
                            <a href={url} onClick={handleNavClick} className='group'>
                                <div
                                    className={`h-[1px] mr-3 w-full ${isCurrentSection
                                        ? 'max-w-[20px] bg-text-secondary '
                                        : 'max-w-[5px] bg-text-muted'
                                        } transition-all duration-200 ease-in-out  group-hover:bg-text-secondary inline-block transform -translate-y-1 `}
                                />
                                <span
                                    className={` uppercase text-base  ${isCurrentSection
                                        ? 'text-secondary font-bold text-xl btn-primary-active'
                                        : 'text-muted transition-all btn-primary duration-200 ease-in-out group-hover:text-secondary'
                                        }`}
                                >
                                    {name}
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Navigation;