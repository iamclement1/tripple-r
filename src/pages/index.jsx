import Image from 'next/image'
import { Client, Navbar, Products, Team } from '@/components/layouts'
import React, { useRef, useState } from 'react'
import img1 from '../components/assets/images/image66.png'
import img2 from '../components/assets/images/image48.png';
import Link from 'next/link'
import { Classy } from '@/components/sessions'
import { personalized } from '@/utils/Utils'
import { Fade } from 'react-awesome-reveal'


export default function Home() {

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };
  return (
    <React.Fragment>

      <main>
        <div className="relative mb-8">
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover"
              src="/background.mp4"
              autoPlay
              loop
              ref={videoRef}
              muted={isMuted}
            />
            <div
              className="absolute inset-0 bg-black opacity-50"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
          <div className="h-screen relative max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 py-20
          flex flex-col justify-center text-center">
        <button
          className="absolute top-4 right-4 bg-gray-800 text-white px-2 py-1 rounded-md"
          onClick={toggleMute}
        >
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
      </div>
        </div>
      </main>
      <session>
        <h1 className='mx-auto text-center text-2xl md:text-4xl font-bold text-[#333333] md:w-3/6 lg:w-2/6'>
          Personalized Beauty  <span className='text-[#E27D60]'>Treatment</span>
        </h1>
        <p className='lg:w-[56rem] mx-8 md:mx-14 lg:mx-auto my-3 text-center text-[18x] text-[#767676]'>
          You have full control at Triple R, unisex salon. In addition to choosing your own beauty specialist, you can select from a range of services, such as eyebrow threading, waxing, nails, nail extensions, pedicures, manicures, eyelash extensions, facials, massages, and eyebrow and lash tinting. Then you can modify your treatment to match your preferred appearance and preferences.
        </p>

        <div className=' md:mx-24 xl:mx-36 grid grid-cols-1 md:grid md:grid-cols-1 lg:grid lg:grid-cols-3
                gap-2 md:gap-4 lg:gap-4'>
          {
            personalized && personalized.map((index, id) => {
              return (
                <>
                  <Fade direction='up' triggerOnce cascade>
                    <div key={id}
                      className='flex flex-col items-center mb-4 rounded-lg p-4 mt-2 md:mt-4 lg:mt-4'>
                      <Image src={index.image}
                        alt='team photograph'
                        width={500}
                        height={500} />
                      <p className='my-3 text-[12px] lg:text-[12px] xl:text-[18px] text-center text-gray-500'>
                        {index.description}
                      </p>
                      <button className='bg-[#E27D60] p-3 rounded-md text-white'>
                        <Link href={"https://wa.me/07047460396"}>
                          {index.btn}
                        </Link>
                      </button>
                    </div>
                  </Fade>
                </>
              )
            })
          }
        </div>
      </session>

      <section className='bg-[#F8E2D3] lg:mr-96 mt-28 lg:mt-0'>
        <div className='relative bottom-18 md:bottom-0 lg:bottom-0 lg:left-44 lg:flex'>

          <div className='lg:mr-44 my-8 w-4/6'>
            <h1 className='text-[#333] text-4xl font-bold'>
              Luxury <span className='text-[#E27D60]' >Redefined</span>
            </h1>
            <p className='text-black mt-4'>
              {"Bespoke Beauty Treatments"}
            </p>
            <p className='my-8 text-[#333]/70  text-sm w-full'>
              {"Triple R is a full-service beauty salon that exudes quality and delivers luxury. Our focus is on ensuring your Triple R experience is second to none – leaving you feeling fully refreshed and completely satisfied with your visit to our contemporary and comfortable saloon conveniently situated in the heart of Offa Kwara State. For more on how we deliver our service, view our About Us page."}
            </p>
            <button className='bg-[#E27D60] px-8 py-3 rounded-md text-white'>
              <Link href={"https://wa.me/07047460396"}>
                Book a session
              </Link>
            </button>
          </div>
          <Image src={img2}
            alt='image'
            width={600}
            height={200}
            className='my-14 h-80'
          />
        </div>
      </section>


      <main className='my-14'>
        <Classy />
      </main>

      <section className='bg-[#F2F2F2] ml-4 lg:ml-96 p-6 mt-28 lg:mt-0'>
        <div className='relative bottom-28 md:bottom-0 lg:bottom-0 lg:right-60 lg:flex'>
          <Image src={img1}
            alt='image'
            width={400}
            height={400}
            className='my-5'
          />

          <div className='lg:ml-56 my-8'>
            <h1 className='text-[#333] text-4xl font-bold lg:w-4/6'>
              Feel Beautiful, <span className='text-[#E27D60]' >Look Great</span>
            </h1>
            <p className='my-8 text-[#333] lg:w-5/6 text-sm'>
              Braids are more than just a hairstyle, they are a form of art. Each braid can be customized to fit your unique personality and style, from simple and elegant to bold and intricate. Come and get the best experience at Triple R unisex salon
            </p>
            <button className='bg-[#E27D60] px-8 py-3 rounded-md text-white'>
              <Link href={"https://wa.me/07047460396"}>
                Book a session
              </Link>
            </button>
          </div>
        </div>
      </section>
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
