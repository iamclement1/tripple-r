import { MobileServices, services } from '@/utils/Utils'
import Image from 'next/image'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const OurServices = () => {
    return (
        <section>
            <div className=' lg:mx-36 hidden md:grid md:grid-cols-3 lg:grid lg:grid-cols-3
                gap-2 md:gap-4 lg:gap-4'>
                {
                    services && services.map((service, index) => {
                        return (
                            <>
                                <Fade direction='up' triggerOnce cascade>
                                    <div
                                        key={index}
                                        className=' items-center mb-4 rounded-lg p-4 mt-2 md:mt-4 lg:mt-4'>
                                        <Image src={service.image}
                                            alt='team photograph'
                                            width={500}
                                            height={500} />

                                        <h1 className='text-[#333] text-center font-semibold text-xl mt-2 '>
                                            {service.name}
                                        </h1>
                                    </div>
                                </Fade>
                            </>
                        )
                    })
                }
            </div>
            <div className=' lg:mx-36 grid grid-cols-1 md:hidden md:grid-cols-3 lg:hidden lg:grid-cols-3
                gap-2 md:gap-4 lg:gap-4'>
                {
                    MobileServices && MobileServices.map((service, item) => {
                        return (
                            <>
                                <Fade direction='up' triggerOnce cascade>
                                    <div
                                        key={item}
                                        className=' items-center mb-4 rounded-lg p-4 mt-2 md:mt-4 lg:mt-4'>
                                        <Image src={service.image}
                                            alt='team photograph'
                                            width={500}
                                            height={500} />

                                        <h1 className='text-[#333] text-center font-semibold text-xl mt-2 '>
                                            {service.name}
                                        </h1>
                                    </div>
                                </Fade>
                            </>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default OurServices