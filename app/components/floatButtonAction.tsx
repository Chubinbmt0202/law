'use client';

import React, { useState, useEffect } from 'react';
import { PaperAirplaneIcon, PhoneIcon, ChatBubbleOvalLeftEllipsisIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const FloatingActionButtons = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
            <button className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300">
                <PaperAirplaneIcon className="h-6 w-6" />
            </button>
            <button className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300">
                <PhoneIcon className="h-6 w-6" />
            </button>
            <button className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300">
                <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
            </button>
            {showScroll && (
                <button onClick={scrollToTop} className="bg-gray-200 text-gray-600 p-3 rounded-full shadow-lg hover:bg-gray-300 transition-colors duration-300">
                    <ChevronUpIcon className="h-6 w-6" />
                </button>
            )}
        </div>
    );
};

export default FloatingActionButtons;