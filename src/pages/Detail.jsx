import React from 'react'
import { useParams } from 'react-router-dom'
import Detail1 from '../component/Detailscomponents/section1/Detail1'
import Detail2 from '../component/Detailscomponents/section2/Detail2'
import './detail.scss'

const Detail = () => {
    const {id}=useParams();
    return (
        <div className="container">
            <div className='row justify-content-between'>
                <div className="col-lg-8">
                    <Detail1 />
                </div>
                <div className="col-lg-4">
                    <Detail2 id={id} />
                </div>
            </div>
          
            <div className="best-course">
              <div className="col-lg-8">
                 <div className="section-title">
                     <h3>Best Online Courses of 2019</h3>
                     <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, blandit posuere and ligula varius magna a porta</p>
                 </div>
             </div>
             <div className="row">
                 <div className="col-lg-6">
                     <div className="box5">
                         <div className="row justify-content-around">
                             <div className="col-7">
                                 <h5>English for Beginners: Intensive English Speaking Course</h5>
                                 <p>54 Total Hours - Updated 2/2020</p>
                                 <p>4.89 (331 Reviews)</p>
                             </div>
                             <div className="col-lg-3">
                                 <p>7348</p>
                             </div>
                             <div className="col-lg-2">
                                 <span className='nprice'>$44.99</span>
                                 <span className='oldPrice'>$69</span>
                             </div>
                         </div>
                     </div>
                     <div className="box5">
                         <div className="row justify-content-around">
                             <div className="col-7">
                                 <h5>English for Beginners: Intensive English Speaking Course</h5>
                                 <p>54 Total Hours - Updated 2/2020</p>
                                 <p>4.89 (331 Reviews)</p>
                             </div>
                             <div className="col-lg-3">
                                 <p>7348</p>
                             </div>
                             <div className="col-lg-2">
                                 <span className='nprice'>$55.99</span>
                                 <span className='oldPrice'>$29</span>
                             </div>
                         </div>
                     </div>
                     <div className="box5">
                         <div className="row justify-content-around">
                             <div className="col-7">
                                 <h5>English for Beginners: Intensive English Speaking Course</h5>
                                 <p>54 Total Hours - Updated 2/2020</p>
                                 <p>4.89 (331 Reviews)</p>
                             </div>
                             <div className="col-lg-3">
                                 <p>7348</p>
                             </div>
                             <div className="col-lg-2">
                                 <span className='nprice'>$66.99</span>
                                 <span className='oldPrice'>$99</span>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="col-lg-6">
                     <div className="box5">
                         <div className="row justify-content-around">
                             <div className="col-7">
                                 <h5>Install Wordpress Locally - No Monthly Web Hosting Cost</h5>
                                 <p>54 Total Hours - Updated 2/2020</p>
                                 <p>4.89 (331 Reviews)</p>
                             </div>
                             <div className="col-lg-3">
                                 <p>7348</p>
                             </div>
                             <div className="col-lg-2">
                                 <span className='nprice'>$100.99</span>
                                 <span className='oldPrice'>$69</span>
                             </div>
                         </div>
                     </div>
                     <div className="box5">
                         <div className="row justify-content-around">
                             <div className="col-7">
                                 <h5>Install Wordpress Locally - No Monthly Web Hosting Cost</h5>
                                 <p>54 Total Hours - Updated 2/2020</p>
                                 <p>4.89 (331 Reviews)</p>
                             </div>
                             <div className="col-lg-3">
                                 <p>7348</p>
                             </div>
                             <div className="col-lg-2">
                                 <span className='nprice'>$150.99</span>
                                 <span className='oldPrice'>$69</span>
                             </div>
                         </div>
                     </div>
                     <div className="box5">
                         <div className="row justify-content-around">
                             <div className="col-7">
                                 <h5>Install Wordpress Locally - No Monthly Web Hosting Cost</h5>
                                 <p>54 Total Hours - Updated 2/2020</p>
                                 <p>4.89 (331 Reviews)</p>
                             </div>
                             <div className="col-lg-3">
                                 <p>7348</p>
                             </div>
                             <div className="col-lg-2">
                                 <span className='nprice'>$100.99</span>
                                 <span className='oldPrice'>$69</span>
                             </div>
                         </div>
                     </div>

                 </div>
             </div>
        
              </div>
        </div>
    )
}

export default Detail