import React from 'react'
import './home2.scss'
import hm3 from '../../image/image-01 (1).png'

const Home2 = () => {
  return (
    <section className='home-2'>
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-6">
          <img className='img-fluid' src={hm3} alt="" />
        </div>
        <div className="col-md-6 mt-5">
          <div className="text-block">
            <h2>Transform your life through online education</h2>
            <p>An enim nullam tempor sapien gravida donec porta and blandit ipsum enim justo integer velna vitae auctor integer congue magna and purus pretium risus ligula rutrum luctus ultrice</p>
            <ul>
              <li>Nullam rutrum eget nunc varius etiam mollis risus undo</li>
              <li>Integer congue magna at pretium purus pretium ligula at rutrum risus luctus dolor auctor ipsum blandit purus</li>
              <li>Risus at congue etiam aliquam sapien egestas posuere</li>
              <li>At pretium purus integer congue magna pretium ligula at ipsum blandit purus rutrum risus luctus dolor auctor</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </section> 
  )
}

export default Home2