import React from 'react'
import { Link } from 'react-router-dom'
import './home14.scss'

const Home14 = () => {
  return (
    <section className='home-14'>
    <div className="container">
    <div className="title-sec">
        <div className="d-flex justify-content-between">
          <div className="texts">
            <h3>Our Stories & Latest News</h3>
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
        <div className="row justify-content-between">
            <div className="col-lg-3">
            <div className="article">
                <p>March 11, 2020</p>
             
                <h5>
                   <a href="link">Integer congue magna at pretium purus pretium</a>
                </h5>
                <p>An enim nullam tempor sapien gravida donec enim blandit ipsum porta justo integer odio velna vitae <br />
                 auctor integer</p>
                <span className='author'>By Joel Peterson</span>
            </div>
            </div>
            <div className="col-lg-3">
            <div className="article">
                <p>March 11, 2020</p>
             
                <h5>
                   <a href="link">Integer congue magna at pretium purus pretium</a>
                </h5>
                <p>An enim nullam tempor sapien gravida donec enim blandit ipsum porta justo integer odio velna vitae <br />
                 auctor integer</p>
                <span className='author'>By Joel Peterson</span>
            </div>
            </div>
            <div className="col-lg-3">
            <div className="article">
                <p>March 11, 2020</p>
             
                <h5>
                   <a href="link">Integer congue magna at pretium purus pretium</a>
                </h5>
                <p>An enim nullam tempor sapien gravida donec enim blandit ipsum porta justo integer odio velna vitae <br />
                 auctor integer</p>
                <span className='author'>By Joel Peterson</span>
            </div>
            </div>
            <div className="col-lg-3">
            <div className="article">
                <p>March 11, 2020</p>
             
                <h5>
                   <a href="link">Integer congue magna at pretium purus pretium</a>
                </h5>
                <p>An enim nullam tempor sapien gravida donec enim blandit ipsum porta justo integer odio velna vitae <br />
                 auctor integer</p>
                <span className='author'>By Joel Peterson</span>
            </div>
            </div>
        </div>

    </div>

    </section>
  )
}

export default Home14