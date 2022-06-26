import React from 'react'
import './home15.scss'
import bannerimg from '../../image/banner-3-img.jpg'

const Home15 = () => {
    return (
        <section className='home-15'>
            <div className="container">
                <div className="d-flex">
                    <div className="col-lg-8">
                        <div className="banner-end">
                            <img src={bannerimg} alt="" />
                        </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="banner-txt">
                            <h4>Learn something new every day <span>witheTreeks</span></h4>
                            <button className='btn'>Find Out More</button>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Home15