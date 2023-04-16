import { Client, Products, Team } from '@/components/layouts'
import { prices } from '@/utils/Utils'
import React from 'react'

const Price = () => {
    return (
        <React.Fragment>
            <h1 className=' bg-[#F2F2F2] text-center ml-4 lg:ml-36 p-6 
            text-[#E27D60] font-semibold text-2xl'>
                Prices
            </h1>


            <main className='lg:mx-36 md:mx-6 mx-4 text-[#333] font-semibold text-sm md:text-xl lg:text-xl mt-8'>
                {
                    prices && prices.map((price, index) => {
                        return (
                            <div key={index}
                                className='flex text-start justify-between border py-6 px-6'>
                                <p>
                                    {price.name}
                                </p>
                                <p className='text-start'>
                                    {price.amount}
                                </p>
                            </div>
                        )
                    })
                }
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
        </React.Fragment>
    )
}

export default Price