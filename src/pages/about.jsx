import Image from 'next/image'
import React from 'react'
import img1 from '../assets/images/image55.png'
import img2 from '../assets/images/image68.png'
import img3 from '../assets/images/image78.png'
import { Fade } from 'react-awesome-reveal'
import { Client, Products, Team } from '@/components/layouts'

const About = () => {
    return (
        <section>
            <main>
                <h1 className=' bg-[#F2F2F2] text-center ml-4 lg:ml-36 p-6 
                text-[#E27D60] font-semibold text-2xl'>
                    About Us
                </h1>
                <p className='lg:w-[49rem] mx-12 lg:mx-auto my-3 text-center text-[18x] text-[#767676] '>
                    At Tripple R unisex salon, we are committed to going above and beyond at every turn. For us, providing outstanding service is only one part of providing an extraordinary experience. With us having an
                    amazing experience is guaranteed.
                </p>
            </main>

            <main className=' md:flex lg:flex mx-6 md:mx-6 lg:mx-36 md:space-x-8 lg:space-x-12'>
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

            <main className='my-14'>
                <Team />
            </main>

            <main className='my-14'>
                <Client />
            </main>

            <main className='my-14'>
                <Products />
            </main>
        </section>
    )
}

export default About