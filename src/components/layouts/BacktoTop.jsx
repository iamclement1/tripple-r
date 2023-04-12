import React, { useState, useEffect } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`${isVisible ? 'block' : 'hidden'
                } fixed bottom-6 right-6 bg-[#E27D60] text-white rounded-md p-3 hover:bg-gray-600 transition-all duration-300 font-bold text-2xl`}
            onClick={handleClick}
        >
            <BsArrowUpShort className='font-bold text-xl' />
        </button>
    );
};

export default BackToTopButton;
