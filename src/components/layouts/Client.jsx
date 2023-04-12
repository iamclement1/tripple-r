import { clients } from '@/utils/Utils'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion';

const Client = () => {
    return (
        <React.Fragment>
            <h1 className='mx-4 md:mx-0 text-center text-2xl lg:text-4xl font-bold text-[#333333] '>
                What Our Clients <span className='text-[#E27D60]'>Say</span>
            </h1>

            <section>
                <div className=' lg:mx-36 grid grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3
                gap-2 md:gap-4 lg:gap-4'>
                    {
                        clients && clients.map((client, index) => {
                            return (
                                <div
                                    key={index}
                                    className=' items-center mb-4 rounded-lg p-4 mt-2 md:mt-4 lg:mt-4 mx-4'>
                                    <p className='my-3 text-sm text-gray-500'>
                                        {client.statement}
                                    </p>
                                    <div className="flex items-center space-x-3">
                                        <Image src={client.image}
                                            alt='team photograph'
                                            width={50}
                                            height={50} />
                                        <div>
                                            <h1 className='text-[#333] font-semibold text-xl'>
                                                {client.name}
                                            </h1>
                                            <span className='text-gray-400 mt-2'>
                                                {client.address}
                                            </span>
                                        </div>



                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </section>
        </React.Fragment>
    )
}

export default Client