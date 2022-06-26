import React from 'react'
import './home12.scss';
import playImg from '../../image/video-3-img.jpg'
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import { Swiper,SwiperSlide } from 'swiper/react';
import brandimg from '../../image/brand-5.png'
import brandimg1 from '../../image/brand-7.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home12 = () => {
    return (

        <>
         <section className='home-12'>
            <div className="container-mini">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="center-info">
                            <h3>Find the right instructor for you from over 10,000 teachers</h3>
                            <p>Feugiat primis ligula risus auctor laoreet augue egestas</p>
                        </div>
                    </div>
                </div>
                <div className="center-play">
                <div className="row jsutify-content-center">
                    <div className="col-lg-12">
                        <div className="playe-video">
                            <a href='blob:https://www.youtube.com/539f20d3-e171-43e5-8fb5-caba276cef50' iframe="">
                                <span className='popup'>
                                    <PlayCircleFilledOutlinedIcon className='popup-icon'/>
                                </span>
                            </a>
                            <img className='img-gluid' src={playImg} alt="" />
                        </div>
                    </div>
                </div>
                </div>
          
            </div>
          
          
        </section>
         <div className="container">
         <div className="brand-division">
        <div className="text-brand text-center">
            <p>Trusted by companies of all sizes:</p>
        </div>
                 <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    loop={true}
                    autoplay={{delay:1000}}
                 >
                 <SwiperSlide>
                   <img className='img-fluid' src={brandimg} alt="" />
                 </SwiperSlide>
                 <SwiperSlide>
                   <img className='img-fluid' src={brandimg1} alt="" />
                 </SwiperSlide>
                 <SwiperSlide>
                   <img className='img-fluid' src={brandimg} alt="" />
                 </SwiperSlide>
                 <SwiperSlide>
                   <img className='img-fluid' src={brandimg1} alt="" />
                 </SwiperSlide>
                 <SwiperSlide>
                   <img className='img-fluid' src={brandimg} alt="" />
                 </SwiperSlide>
                 <SwiperSlide>
                   <img className='img-fluid' src={brandimg1} alt="" />
                 </SwiperSlide>
                 </Swiper>
             
            </div>
         </div>
    
        </>
       
    )
}

export default Home12