import React from 'react'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import MenuBook from '@mui/icons-material/MenuBook';
import './home1.scss'
// import Slider from '../slider/Slider'

export const Home1 = () => {
  return (
    <div className='main-home2'>
            <section className='home-2'>
            <div className="container">
              <div className="row justify content-between align-items-center">
                <div className="col-md-4">
                  <div className="box">
                    <div className="d-flex">
                      <span className='menubook'>
                        <MenuBook className='menub' />
                      </span>
                      <div className="course-info">
                        <h5>2.769 online-courses</h5>
                        <p>Explore a variety of fresh topics</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <div className="d-flex">
                      <span className='menubook'>
                        <PeopleOutlineIcon className='menub' />
                      </span>
                      <div className="course-info">
                        <h5>Expert instruction</h5>
                        <p>Find the right instructor for you</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <div className="d-flex">
                      <span className='menubook'>
                        <PeopleOutlineIcon className='menub' />
                      </span>
                      <div className="course-info">
                        <h5>Lifetime access</h5>
                        <p>Learn on your schedule</p>
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
 export default Home1