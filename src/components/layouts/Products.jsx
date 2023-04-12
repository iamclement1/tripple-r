import { products } from '@/utils/Utils'
import Image from 'next/image'
import React from 'react'

const Products = () => {
    return (
        <React.Fragment>
            <h1 className='mx-4 md:mx-0 text-center text-2xl lg:text-4xl font-bold text-[#333333] '>
                Products We <span className='text-[#E27D60]'>Use</span>
            </h1>

            <section>
                <div className=' mx-12 lg:mx-36 grid grid-cols-1 md:flex'>
                    {
                        products && products.map((product, index) => {
                            return (
                                <div
                                    key={index}
                                    className=' items-center mb-4 rounded-lg p-4 mt-2 md:mt-4 lg:mt-4 mx-auto'>
                                    <Image src={product.image}
                                        alt='team photograph'
                                        width={100}
                                        height={100} />

                                </div>

                            )
                        })
                    }
                </div>
            </section>
        </React.Fragment>
    )
}

export default Products