
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slider.scss'
export const Slider = () => {
    return (
        <div className='home-slider'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
            // pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className='slider'></div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='slider2'></div>
                </SwiperSlide>
                
            </Swiper>

            <div className='home'>
             <div className="container">
                 
             </div>
                <section className='home-1'>
                    <div className="text-home">
                        <h2>2,769 online courses from the best <br /> tutors</h2>
                        <input type="text" placeholder='What do you want to learn?' />
                    </div>
                </section>
            </div>
        </div>
    )

}
export default Slider
