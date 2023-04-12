import { Products } from '@/components/layouts'
import React from 'react'

const Gallery = ({ children }) => {
    return (
        <React.Fragment>
            <h1 className=' bg-[#F2F2F2] text-center ml-4 lg:ml-36 p-6 
            text-[#E27D60] font-semibold text-2xl'>
                Tripple R Gallery
            </h1>


            <main className='my-14'>
                <Products />
            </main>
        </React.Fragment>
    )
}

export default Gallery