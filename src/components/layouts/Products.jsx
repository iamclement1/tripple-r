import { products } from '@/utils/Utils'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Autoplay } from "swiper";
import img1 from '../../assets/images/image73.svg'
import img2 from '../../assets/images/image71.svg'
import img3 from '../../assets/images/image76.svg'
import img4 from '../../assets/images/image75.svg'
import img5 from '../../assets/images/image77.svg'
import img6 from '../../assets/images/image72.svg'
import img7 from '../../assets/images/image74.svg'



const Products = () => {
    return (
        <React.Fragment>
            <h1 className='mx-4 md:mx-0 text-center text-2xl lg:text-4xl font-bold text-[#333333] '>
                Products We <span className='text-[#E27D60] '>Use</span>
            </h1>

            <main className='mx-36 mt-16'>
                <Swiper
                    modules={[Autoplay]}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        stopOnLastSlide: false
                    }}
                    spaceBetween={10}
                    slidesPerView={7}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>
                        <Image src={img1}
                            alt='product-logo'
                            width={100}
                            height={100}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={img2}
                            alt='product-logo'
                            width={100}
                            height={100}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={img3}
                            alt='product-logo'
                            width={100}
                            height={100}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={img4}
                            alt='product-logo'
                            width={100}
                            height={100}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={img5}
                            alt='product-logo'
                            width={100}
                            height={100}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={img6}
                            alt='product-logo'
                            width={100}
                            height={100}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={img7}
                            alt='product-logo'
                            width={100}
                            height={100}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={img1}
                            alt='product-logo'
                            width={100}
                            height={100}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={img2}
                            alt='product-logo'
                            width={100}
                            height={100}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={img3}
                            alt='product-logo'
                            width={100}
                            height={100}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={img4}
                            alt='product-logo'
                            width={100}
                            height={100}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={img5}
                            alt='product-logo'
                            width={100}
                            height={100}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={img6}
                            alt='product-logo'
                            width={100}
                            height={100}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={img7}
                            alt='product-logo'
                            width={100}
                            height={100}
                        />
                    </SwiperSlide>

                </Swiper>
            </main>
        </React.Fragment>
    )
}

export default Products