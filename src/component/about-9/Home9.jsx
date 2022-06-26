import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './home9.scss'
import course1 from '../../image/course-1-img.jpg'
import course2 from '../../image/course-2-img.jpg'
import course3 from '../../image/course-3-img.jpg'
import course4 from '../../image/course-4-img.jpg'

const Home9 = () => {
    return (
        <section className='home-9'>
            <div className="container">
                <div className="title-sec">
                    <div className="d-flex justify-content-between">
                        <div className="texts">
                            <h3>Best Courses of All-Time</h3>
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

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    // pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{delay:1000}}
                >
                    <SwiperSlide>
                        <div className="col-lg-12">
                            <div className="course-box">
                                <img className='img-fluid' src={course1} alt="" />

                                <div className="course-text">
                                    <p className='tags'>
                                        <span className='tt'>Language</span>
                                        <span className='tt'>English</span>
                                    </p>
                                    <h5>Beginner level English Foundations</h5>
                                    <div className="rating-course">
                                        <span>5(30 ratings)</span>
                                    </div>
                                    <span className='price-c'>
                                        <span className='old-price'>$149</span>
                                        $138.99
                                    </span>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col-lg-12">
                            <div className="course-box">
                                <img className='img-fluid' src={course2} alt="" />

                                <div className="course-text">
                                    <p className='tags'>
                                        <span className='tt'>Language</span>
                                        <span className='tt'>English</span>
                                    </p>
                                    <h5>Beginner level English Foundations</h5>
                                    <div className="rating-course">
                                        <span>5(30 ratings)</span>
                                    </div>
                                    <span className='price-c'>
                                        <span className='old-price'>$149</span>
                                        $138.99
                                    </span>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col-lg-12">
                            <div className="course-box">
                                <img className='img-fluid' src={course3} alt="" />

                                <div className="course-text">
                                    <p className='tags'>
                                        <span className='tt'>Language</span>
                                        <span className='tt'>English</span>
                                    </p>
                                    <h5>Beginner level English Foundations</h5>
                                    <div className="rating-course">
                                        <span>5(30 ratings)</span>
                                    </div>
                                    <span className='price-c'>
                                        <span className='old-price'>$149</span>
                                        $138.99
                                    </span>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col-lg-12">
                            <div className="course-box">
                                <img className='img-fluid' src={course4} alt="" />

                                <div className="course-text">
                                    <p className='tags'>
                                        <span className='tt'>Language</span>
                                        <span className='tt'>English</span>
                                    </p>
                                    <h5>Beginner level English Foundations</h5>
                                    <div className="rating-course">
                                        <span>5(30 ratings)</span>
                                    </div>
                                    <span className='price-c'>
                                        <span className='old-price'>$149</span>
                                        $138.99
                                    </span>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>


            </div>
        </section>
    )
}

export default Home9