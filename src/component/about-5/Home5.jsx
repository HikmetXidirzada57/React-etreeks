import React from 'react'
import { Link } from 'react-router-dom'
import './home5.scss'
import SwipeIcon from '@mui/icons-material/Swipe';
import CameraFrontIcon from '@mui/icons-material/CameraFront';
import SchoolIcon from '@mui/icons-material/School';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Home5 = () => {
    return (
        <div>
            <section className='home-5'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="services-txt">
                                <h3>Get Quality Education with eTreeks</h3>
                                <p>Integer congue magna at pretium purus pretium ligula at rutrum luctus risus eros dolor auctor ipsum blandit luctus purus vehicula magna a tempor laoreet</p>
                                <Link to="#">
                                    <button className='btn btn-rose'>Start Learning Now!</button>
                                </Link>
                            </div>
                        </div>
                    </div>


                   
                        <div className="row mt-5">
                        <div className="col-lg-12 text-center">
                            <div className="row justify-content-center">
                            <div className="col-md-2">
                                <div className="icon-trend">
                                    <span><SwipeIcon className='swipe' /></span>
                                    <h5>Trending Courses</h5>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="icon-trend">
                                    <span><CameraFrontIcon className='swipe' /></span>
                                    <h5>Trending Courses</h5>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="icon-trend">
                                    <span><SchoolIcon className='swipe' /></span>
                                    <h5>Trending Courses</h5>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="icon-trend">
                                    <span>< HeadsetMicIcon className='swipe' /></span>
                                    <h5>Trending Courses</h5>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="icon-trend">
                                    <span><MenuBookIcon className='swipe' /></span>
                                    <h5>Trending Courses</h5>
                                </div>
                            </div>
                            </div>
         
                        </div>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default Home5