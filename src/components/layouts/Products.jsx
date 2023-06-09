import { products } from '@/utils/Utils'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Autoplay, Navigation, Pagination]);



const Products = () => {
    return (
        <React.Fragment>
            <h1 className='block mx-4 md:mx-0 text-center text-2xl lg:text-4xl font-bold text-[#333333] '>
                Products We <span className='text-[#E27D60] '>Use</span>
            </h1>

            <main className="md:mx-36 mt-12">
                <div className="px-8 py-2 w-full ">
                    <Swiper
                    slidesPerView={5}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true} 
                        loopAdditionalSlides={2}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        className="mySwiper w-full"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id} className='flex'>
                                <Image src={product.image} alt="Product_logo" width={150} height={150} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </main>

        </React.Fragment>
    )
}

export default Products