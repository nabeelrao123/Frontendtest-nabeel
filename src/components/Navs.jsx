import React, { useState } from 'react';

const Navs = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Find Jobs', href: '#' },
        { name: 'Top Companies', href: '#' },
        { name: 'Job Tracker', href: '#' },
        { name: 'My Calender', href: '#' },
        { name: 'Documents', href: '#' },
        { name: 'Messages', href: '#' },
        { name: 'Notifications', href: '#' },
    ];

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
                <div className="flex justify-between items-center  h-16">

                    {/* LEFT: Hamburger + Logo */}
                    <div className="flex items-center justify-center gap-1">

                        {/* Mobile Hamburger (LEFT) */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                        >
                            {!isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>

                        {/* Logo */}
                        <span className="text-2xl font-bold text-indigo-600">Logo</span>

                        {/* Desktop Navigation */}
                        <div className="hidden md:ml-3 md:flex md:space-x-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 hover:text-indigo-600 px-2 py-2 text-sm font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Button */}
                    <div className='flex items-center justify-center ' >
                        <div className="hidden lg:block md:mr-4 lg:mr-6">
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="h-4 w-4 text-[#737A91]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    className="block w-40 lg:w-56 rounded-md border-0 bg-[#F6F9FF] py-1.5 pl-10 pr-3 text-white placeholder:text-gray-400 focus:bg-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                    placeholder="Search..."
                                />
                            </div>
                        </div>

                        <div className="hidden md:flex items-center">
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">
                                Resume Builder
                            </button>
                        </div>





                    </div>

                </div>
            </div>

            {/* Mobile Menu (NEECHAY HI OPEN HOGA — SAME AS BEFORE) */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
                        >
                            {item.name}
                        </a>
                    ))}

                    <div className="pt-3 border-t">
                        <button className="w-full bg-indigo-600 text-white py-2 rounded-md">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navs;
