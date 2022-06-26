import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import img1 from '../../image/image-01.png'
// import img2 from '../../image/heartbeat.png';
// import img3 from '../../image/human-mind.png';
// import img4 from '../../image/design.png';
import './home6.scss'
import { useDispatch, useSelector } from 'react-redux';
import { GetCategories } from '../../Redux/Actions/CategoryActions';

const Home6 = () => {
    const categories = useSelector(state => state.categories)
    const dispatch = useDispatch()
   console.log(categories)
    useEffect(() => {
        dispatch(GetCategories()) 
    }, [dispatch])
     return (
        <section className='home-6'>
            <div className="container">
                <div className="title-sec">
                    <div className="d-flex justify-content-between">
                        <div className="texts">
                            <h3>Top Trending Categories</h3>
                            <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero <br />
                                tempus, blandit posuere and ligula varius magna a porta</p>
                        </div>
                        <div className="view-courses mt-5">
                            <button>
                                <Link to="/about">
                                    View All courses
                                </Link>

                            </button>
                        </div>
                    </div>

                </div>
                {/* <div className="row justify-content-bewteen"> */}
                <Swiper 
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={5}
                    // pagination={{ clickable: true }} 
                    navigation
                    loop={true}
                    autoplay={{ delay: 1000 }}
                >
                    {categories.category?.map(cat=>(
                        <SwiperSlide key={cat.id}>
                            <div className="col-lg-12">
                                <div className="big-box">
                                    <div className="box-icon">
                                        <img className='img-fluid' src={cat.iconUrl} alt=""/>
                                    </div>
                                    <div className="box-text">
                                        <h5>{cat.name}</h5>
                                        <p>28 Courses</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* </div> */}

        </section>
    )
}

export default Home6