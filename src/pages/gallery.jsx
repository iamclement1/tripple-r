import { Products } from '@/components/layouts'
import Image from 'next/image'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import img1 from '../assets/images/image79.png'
import img2 from '../assets/images/image68.png'
import img3 from '../assets/images/image81.png'
import img4 from '../assets/images/image661.png'
import img5 from '../assets/images/image831.png'
import img6 from '../assets/images/image82.png'
import img7 from '../assets/images/image84.png'
import img8 from '../assets/images/image471.png'
import img9 from '../assets/images/image461.png'
import { AiFillInstagram } from 'react-icons/ai'

const Gallery = ({ children }) => {
    return (
        <React.Fragment>
            <h1 className=' bg-[#F2F2F2] text-center ml-4 lg:ml-36 p-6 
            text-[#E27D60] font-semibold text-2xl'>
                Tripple R Gallery
            </h1>

            <main className=' md:flex lg:flex mx-6 md:mx-6 lg:mx-36 md:space-x-8 lg:space-x-12 mt-8'>
                <Fade direction='up' triggerOnce cascade>
                    <div>
                        <Image src={img1}
                            alt='productImage'
                            width={700}
                            height={700}
                            className='mb-4 md:mb-0 lg:mb-0'
                        />
                    </div>
                </Fade>
                <div className='flex flex-col md:space-y-5 lg:space-y-7'>
                    <Fade direction='up' triggerOnce cascade>
                        <div>
                            <Image src={img2}
                                alt='productImage'
                                width={500}
                                height={500}
                                className='mb-4 md:mb-0 lg:mb-0'
                            />
                        </div>
                    </Fade>
                    <Fade direction='up' triggerOnce cascade>
                        <div>
                            <Image src={img3}
                                alt='productImage'
                                width={500}
                                height={500}
                                className='mb-4 md:mb-0 lg:mb-0'
                            />

                        </div>
                    </Fade>
                </div>
            </main>

            <main className=' md:flex lg:flex mx-6 md:mx-6 lg:mx-36 md:space-x-8 lg:space-x-12 mt-8'>
                <Fade direction='up' triggerOnce cascade>
                    <div>
                        <Image src={img4}
                            alt='productImage'
                            width={700}
                            height={700}
                            className='mb-4 md:mb-0 lg:mb-0'
                        />
                    </div>
                </Fade>
                <div className='flex flex-col md:space-y-5 lg:space-y-5'>
                    <Fade direction='up' triggerOnce cascade>
                        <div>
                            <Image src={img5}
                                alt='productImage'
                                width={500}
                                height={500}
                                className='mb-4 md:mb-0 lg:mb-0'
                            />
                        </div>
                    </Fade>
                    <Fade direction='up' triggerOnce cascade>
                        <div>
                            <Image src={img6}
                                alt='productImage'
                                width={500}
                                height={500}
                                className='mb-4 md:mb-0 lg:mb-0'
                            />

                        </div>
                    </Fade>
                </div>
            </main>

            <main className=' md:flex lg:flex mx-6 md:mx-6 lg:mx-36 md:space-x-8 lg:space-x-12 mt-8'>
                <Fade direction='up' triggerOnce cascade>
                    <div>
                        <Image src={img7}
                            alt='productImage'
                            width={700}
                            height={700}
                            className='mb-4 md:mb-0 lg:mb-0'
                        />
                    </div>
                </Fade>
                <div className='flex flex-col md:space-y-5 lg:space-y-5'>
                    <Fade direction='up' triggerOnce cascade>
                        <div>
                            <Image src={img8}
                                alt='productImage'
                                width={500}
                                height={500}
                                className='mb-4 md:mb-0 lg:mb-0'
                            />
                        </div>
                    </Fade>
                    <Fade direction='up' triggerOnce cascade>
                        <div>
                            <Image src={img9}
                                alt='productImage'
                                width={500}
                                height={500}
                                className='mb-4 md:mb-0 lg:mb-0'
                            />

                        </div>
                    </Fade>
                </div>
            </main>

            <main className="flex justify-center lg:space-x-12 md:space-x-8 space-x-2 my-8">
                <button className='lg:px-12 md:px-8 px-4 py-2 border border-[#333]/60 
                rounded-md text-[#333]/70 lg:text-md md:text-md text-sm font-semibold'>
                    Show more
                </button>
                <button className='lg:px-12 md:px-8 px-4 flex lg:space-x-5 md:space-x-5 space-x-2
                items-center bg-[#E27D60]  text-white lg:text-md md:text-md text-sm rounded-md'>
                    <AiFillInstagram className='' />
                    <p>Follow on Instagram</p>
                </button>
            </main>


            <main className='my-14'>
                <Products />
            </main>
        </React.Fragment>
    )
}

export default Gallery