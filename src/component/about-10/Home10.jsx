import React from 'react'
import './home10.scss'
import show from  '../../image/image-04.png'
import show1 from '../../image/image-05.png'
import { Link } from 'react-router-dom'
const Home10 = () => {
  return (
    <section className='home-10'>
    <div className="container">
        <div className="row justify-content-bewteen">
            <div className="col-lg-6">
                <div className="improving-edu">
                    <div className="d-flex justify-content-bewteen">
                    <div className="show-img">
                      <img className='img-fluid' src={show} alt="" />
                    </div>
                    <div className="board-info">
                       <h4>Become a Teacher</h4>
                       <p>Feugiat primis ligula a risus auctor egestas an augue mauri and viverra tortor iaculis an eugiat viverra</p>

                       <Link to="#">
                       <button className='btn btn rose'>Find Out More</button>
                       </Link>
                    </div>
                    </div>
             
                </div>
            </div>
            <div className="col-lg-6">
            <div className="improving-edu">
                    <div className="d-flex justify-content-bewteen">
                    <div className="show-img">
                      <img className='img-fluid' src={show1} alt="" />
                    </div>
                    <div className="board-info">
                       <h4>eTreeks for Business</h4>
                       <p>Feugiat primis ligula a risus auctor egestas an augue mauri and viverra tortor iaculis an eugiat viverra</p>

                       <Link to="#">
                       <button className='btn btn rose'>Find Out More</button>
                       </Link>
                    </div>
                    </div>
             
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Home10