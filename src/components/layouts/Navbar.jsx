import React, { useState } from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Head>
                <title>Triple R</title>
                <meta
                    name="description"
                    content="At Triple R unisex salon, we are committed to going above and beyond at every turn."
                />
                <link rel="icon" href="/favicon.jpg" />
            </Head>
            <nav className="w-full bg-white">
                <div className=" md:space-x-24 lg:space-x-64 px-4 py-3 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href='/'>
                                <Image src="/favicon.svg" alt="brand-logo"
                                width={150} height={100} />
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setOpen(!open)}
                                >
                                    {open ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-[#E27D60]"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-[#E27D60]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block 
                            md:pb-0 md:mt-0 
                            ${open ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex 
                            md:space-x-6 lg:space-x-8 md:space-y-0">
                                <li className="text-[#333333]/50 hover:underline hover:duration-300 
                                hover:ease-in-out hover:decoration-[#E27D60]
                                hover:underline-offset-8">
                                    <Link href="/services">
                                        Our Services
                                    </Link>
                                </li>
                                <li className="text-[#333333]/50 hover:underline hover:duration-300 
                                hover:ease-in-out hover:decoration-[#E27D60]
                                hover:underline-offset-8">
                                    <Link href="/prices">
                                        Prices
                                    </Link>
                                </li>
                                <li className="text-[#333333]/50 hover:underline hover:duration-300 
                                hover:ease-in-out hover:decoration-[#E27D60]
                                hover:underline-offset-8">
                                    <Link href="/gallery">
                                        Gallery
                                    </Link>
                                </li>
                                <li className="text-[#333333]/50 hover:underline hover:duration-300 
                                hover:ease-in-out hover:decoration-[#E27D60]
                                hover:underline-offset-8">
                                    <Link href="/about">
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex justify-center items-center mt-8">
                {children}
            </div>
        </div>
    )
}

export default Navbar