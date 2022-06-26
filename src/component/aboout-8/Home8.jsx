import React from 'react'
import './home8.scss'
import nailimg from '../../image/left-quote.png'

const Home8 = () => {
  return (
   <section className='home-8'> 
     <div className="container">
         <div className="row">
             <div className="col-md-12">
                 <div className="review">
                 <div className="nail-ico">
                     <img className='img-fluid' src={nailimg} alt="" />
                 </div>
                 <p>An enim nullam tempor sapien gravida donec eTreeks - enim ipsum porta justo integer at odio velna and vitae auctor integer congue magna at pretium purus pretium ligula rutrum luctus risus ultrice luctus blandit congue magna. Sagittis congue augue egestas volutpat egestas magna consequat posuere nunc, eu porttitor neque</p>
                 <div className="review-autho">
                     <h5>Jeniffer S.</h5>
                     <p>Online Stident(Public Relations)</p>
                 </div>
                 </div>
            

             </div>
         </div>
     </div>
   </section>
  )
}

export default Home8