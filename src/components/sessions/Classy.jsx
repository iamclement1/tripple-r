import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img2 from '../assets/images/image63.png'
import img3 from '../assets/images/image54.png'

const Classy = () => {
    return (
        <React.Fragment>
            {/* stay classy */}
            <section className='hidden lg:flex lg:space-x-14 xl:space-x-24 my-28 lg:mx-36'>
                <div className='grid grid-cols-2 gap-5 mx-6 md:mx-0'>
                    <Image src={img2}
                        alt='Image'
                        width={300}
                        height={300}
                        className='mt-6'
                    />

                    <Image src={img3}
                        alt='Image'
                        width={300}
                        height={300}
                    />
                </div>
                <div className=' my-8 lg:w-3/5 xl:w-2/5 '>
                    <h1 className='text-[#333] text-4xl font-bold md:w-5/6'>
                        Stay <span className='text-[#E27D60]' >Classy</span>
                    </h1>
                    <p className='text-[#333]/70 font-semibold my-2'>
                        Bespoke Beauty Treatments
                    </p>
                    <p className='my-6 text-[#333]/70 xl:w-full text-md'>
                        A new haircut can give you a renewed sense of energy and a boost of confidence. You might find yourself standing taller, smiling more, and feeling more outgoing than before. It is amazing how something as simple as a haircut can make such a big difference in how you feel about yourself.
                    </p>
                    <a href="https://wa.me/+2347047460396?text=Hello,%20my%20name%20is " target='_blank'>
                        <button className='bg-[#E27D60] px-8 py-3 rounded-md text-white'>
                            Contact Us
                        </button>
                    </a>
                </div>
            </section>

            {/* classy sesstion mobile */}
            <section className='mt-12 block md:block lg:hidden my-8'>
                <h1 className='text-[#333] text-2xl md:text-3xl items-center text-center font-bold '>
                    Stay <span className='text-[#E27D60]' >Classy</span>
                </h1>
                <p className='text-[#333] text-md text-center mb-2 font-semibold '>
                    Bespoke Beauty Treatments
                </p>
                <main className='md:block'>
                    <div className='grid grid-cols-2 md:flex md:items-center 
                    md:justify-center md:space-x-8 gap-5 p-5'>
                        <Image src={img2}
                            alt='Image'
                            width={300}
                            height={300}
                            className='mt-6'
                        />

                        <Image src={img3}
                            alt='Image'
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className='mx-6 flex flex-col'>
                        <p className='my-6 text-[#333]/70  text-sm text-center'>
                            A new haircut can give you a renewed sense of energy and a boost of confidence. You might find yourself standing taller, smiling more, and feeling more outgoing than before. It is amazing how something as simple as a haircut can make such a big difference in how you feel about yourself.
                        </p>
                        <a href="https://wa.me/+2347047460396?text=Hello,%20my%20name%20is " target='_blank'>
                            <button className='bg-[#E27D60] p-3 rounded-md text-white md:w-6/12 mx-auto'>
                                Book a session
                            </button>
                        </a>
                    </div>

                </main>
            </section>
        </React.Fragment>
    )
}

export default Classy