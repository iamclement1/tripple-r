import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img1 from '../../assets/images/image66.png'


const Luxury = () => {
    return (
        <React.Fragment>
            <section className='bg-[#F8E2D3] mr-4 lg:mr-96 p-6 mt-28 md:mt-0'>
                <div className='relative mx-28 md:flex border'>
                    <div className=' my-8'>
                        <h1 className='text-[#333] text-4xl font-bold md:w-5/6'>
                            Luxury <span className='text-[#E27D60]' >Redefined</span>
                        </h1>
                        <p className='text-[#333] font-semibold my-2'>
                            Bespoke Beauty Treatments
                        </p>
                        <p className='my-6 text-[#333] md:w-5/6 text-sm'>
                            Tripple R is a full-service beauty salon that exudes quality and delivers luxury. Our focus is on ensuring your Tripple R experience is second to none – leaving you feeling fully refreshed and completely satisfied with your visit to our contemporary and comfortable saloon conveniently situated in the heart of Offa Kwara State. For more on how we deliver our service, view our About Us page.
                        </p>
                        <button className='bg-[#E27D60] p-3 rounded-md text-white'>
                            <Link href={"https://wa.me/07047460396"}>
                                Book a session
                            </Link>
                        </button>
                    </div>

                    <Image src={img1}
                        alt='image'
                        width={400}
                        height={400}
                        className='my-5 relative '
                    />
                </div>
            </section>

        </React.Fragment>
    )
}

export default Luxury