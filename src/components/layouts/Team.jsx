import { teamCard } from '@/utils/Utils'
import Image from 'next/image'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Team = () => {
    return (
        <React.Fragment>
            <h1 className='text-center text-3xl md:text-4xl font-bold text-[#333333] mt-12 '>
                Meet our <span className='text-[#E27D60]'>Team</span>
            </h1>
            <p className='lg:w-[54rem] mx-8 md:mx-14 lg:mx-auto my-3 text-center text-[18x] text-[#767676]'>
                {"At Triple R, we think beauty should be presented in a beautiful way. As a result, we give our clients feelings just as much consideration as the treatments we offer. All of our team members are committed to providing each and every client they serve with the entire Triple R experience because they recognize the value of Triple R’s people-focused approach to beauty."}
            </p>

            <section>
                <div className=' lg:mx-36 grid grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3
                gap-2 md:gap-4 lg:gap-4'>
                    {
                        teamCard && teamCard.map((team, id) => {
                            return (
                                <>
                                    <Fade direction='up' triggerOnce cascade>
                                        <div
                                            key={id}
                                            className=' items-center mb-4 rounded-lg p-4 mt-2 md:mt-4 lg:mt-4'>
                                            <Image src={team.image}
                                                alt='team photograph'
                                                width={500}
                                                height={500} />

                                            <h1 className='text-[#333] font-semibold text-xl mt-5 '>
                                                {team.name}
                                            </h1>
                                            <span className='text-[#333333] mt-2'>
                                                {team.role}
                                            </span>
                                            <p className='my-3 text-sm text-gray-500'>
                                                {team.description}
                                            </p>
                                        </div>
                                    </Fade>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </React.Fragment>
    )
}

export default Team