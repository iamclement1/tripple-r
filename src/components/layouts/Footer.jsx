import Link from 'next/link'
import React from 'react'
import { GoLocation } from 'react-icons/go';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
    return (
        <footer className='w-full bg-black'>
            <div className=" lg:flex lg:text-start items-center lg:space-x-38 lg:my-4 p-8 md:p-2 lg:p-2
            md:mx-8 lg:mx-24 md:py-8 lg:py-12 text-white">

                {/* beginning subscribe to our newletter */}
                <section>
                    <h1 className='text-2xl font-medium '>
                        Get in Touch
                    </h1>
                    <p className='lg:w-4/6 text-gray-500 text-sm my-3'>
                        Get exclusive news about our available packages by subscribing
                        to receive our monthly newsletter.
                    </p>

                    <form action="" method='POST' className=' '>
                        <input className='bg-transparent text-white border border-[#E27D60] 
                        shadow-inner rounded-l p-2 md:p-5 md:flex-1 flex-1'
                            id='email'
                            type='email'
                            aria-label='email address'
                            placeholder='Enter email' />
                        <button className='border border-[#E27D60] bg-[#E27D60] duration-300 text-white
                        shadow px-2 md:px-4 py-2 md:py-5 rounded-r text-base md'
                            type='submit'>
                            Subscribe
                        </button>
                    </form>
                </section>
                {/* end subscribe to our newletter */}

                <section className='lg:flex md:flex lg:space-x-8 md:space-x-4 my-6 lg:my-0 '>

                    <div className='flex space-x-12'>

                        {/* beginning of quick links */}
                        <div>
                            <h1 className='font-semibold text-xl'>
                                Quick Links
                            </h1>
                            <ul className='text-sm my-3 space-y-2 text-gray-500'>
                                <li className="hover:underline hover:duration-300 
                                hover:ease-in-out hover:decoration-[#E27D60]
                                hover:underline-offset-8">
                                    <Link href='/services'>
                                        Our Services
                                    </Link>
                                </li>
                                <li className="hover:underline hover:duration-300 
                                hover:ease-in-out hover:decoration-[#E27D60]
                                hover:underline-offset-8">
                                    <Link href='/prices'>
                                        Prices
                                    </Link>
                                </li>
                                <li className="hover:underline hover:duration-300 
                                hover:ease-in-out hover:decoration-[#E27D60]
                                hover:underline-offset-8">
                                    <Link href='/gallery'>
                                        Gallery
                                    </Link>
                                </li>
                                <li className="hover:underline hover:duration-300 
                                hover:ease-in-out hover:decoration-[#E27D60]
                                hover:underline-offset-8">
                                    <Link href='/about'>
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* end of the quick links */}

                        {/* begging of useful link */}
                        <div>
                            <h1 className='font-semibold text-xl'>
                                Useful
                            </h1>
                            <ul className='text-sm my-3 space-y-2 text-gray-500'>
                                <li className="hover:underline hover:duration-300 
                                hover:ease-in-out hover:decoration-[#E27D60]
                                hover:underline-offset-8">
                                    <Link href='/'>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="hover:underline hover:duration-300 
                                hover:ease-in-out hover:decoration-[#E27D60]
                                hover:underline-offset-8">
                                    <Link href='/'>
                                        Legal
                                    </Link>
                                </li>
                                <li className="hover:underline hover:duration-300 
                                hover:ease-in-out hover:decoration-[#E27D60]
                                hover:underline-offset-8">
                                    <Link href='/'>
                                        FAQs
                                    </Link>
                                </li>
                                <li className="hover:underline hover:duration-300 
                                hover:ease-in-out hover:decoration-[#E27D60]
                                hover:underline-offset-8">
                                    <Link href='/'>
                                        Blogs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* end of useful link */}
                    </div>

                    <div>
                        <h1 className='font-semibold text-xl mb-3 items-center'>
                            Contact Us
                        </h1>
                        <div className='flex space-x-2  text-gray-500'>
                            <GoLocation />
                            <h2 className='text-sm'>
                                No 22, opposite Total filling station, Offa Kwara State
                            </h2>
                        </div>
                        <div className="flex items-center space-x-2 my-3 text-gray-500">
                            <BsTelephoneFill />
                            <a href="tel:07047460396">07047460396</a>
                        </div>
                        <div className="flex items-center space-x-2 my-3 text-gray-500">
                            <MdOutlineMailOutline />
                            <a href="mailto:TrippleRunisexsaloon@yahoo.com">
                                TrippleRunisexsaloon@yahoo.com
                            </a>
                        </div>
                    </div>

                </section>

            </div>

            <div className='border border-b-2 border-white mb-8 '></div>
            <div className='pb-8 md:flex lg:flex justify-between mx-8 lg:mx-36 '>
                <div></div>
                <p className='text-white '>
                    Copyright - Tripple R unisex salon &copy; 2023
                </p>
                <div className='text-white flex space-x-5 text-xl mt-4 lg:mt-0'>
                    <AiFillInstagram className='cursor-pointer' />
                    <FaTwitterSquare className='cursor-pointer' />
                    <FaFacebookSquare className='cursor-pointer' />
                </div>
            </div>
        </footer>
    )
}

export default Footer