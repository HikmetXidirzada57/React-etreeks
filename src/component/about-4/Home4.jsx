import React from 'react'
import { Link } from 'react-router-dom'
import './home4.scss'
import imgblock from '../../image/image-02.png'

const Home4 = () => {
  return (
    <>
    <section className='home4 mt-5'>
   <div className="container">
       <div className="row">
           <div className="col-md-6">
               <div className="txt-block">
                   <h3>Learn new personal & professional skills online</h3>
                   <p>An enim nullam tempor sapien gravida donec porta and blandit ipsum enim justo integer velna vitae auctor integer congue magna and purus pretium risus ligula rutrum luctus ultrice</p>
                   <ul className='txt-ul'>
                       <li>
                           Nullam rutrum eget nunc varius etiam mollis risus undo
                       </li>
                       <li>
                       Integer congue magna at pretium purus pretium ligula at rutrum risus luctus dolor auctor ipsum blandit purus
                       </li>
                       <li>
                       Risus at congue etiam aliquam sapien egestas posuere
                       </li>
                   </ul>
                    <Link to="/">
                      <button className='btn btn-rose'>Start Learning Now </button>
                   </Link>
               </div>
           </div>
           <div className="col-md-6">
               <div className="img-block">
                   <img className='img-fluid' src={imgblock} alt="" />
               </div>
           </div>
       </div>
   </div>
    </section>
        
    </>
  )
}

export default Home4