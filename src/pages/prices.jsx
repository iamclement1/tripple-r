import { Client, Products, Team } from '@/components/layouts'
import React from 'react'

const Price = () => {
    return (
        <React.Fragment>
            <h1 className=' bg-[#F2F2F2] text-center ml-4 lg:ml-36 p-6 
            text-[#E27D60] font-semibold text-2xl'>
                Prices
            </h1>


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