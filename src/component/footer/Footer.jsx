import React from 'react'
import './footer.scss'
import footlogo from "../../image/logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='footer'>
     <div className="container">
       <div className="row justify-content-between">
       <div className="col-lg-4">
         <div className="logo-foot">
           <div className="logo">
           <img className='img-fluid' src={footlogo} alt="" />
           </div>
           <p>Aliquam orci a nullam tempor sapien gravida donec enim ipsum porta justo velna an auctor undo congue magna laoreet augue sapien</p>
         </div>

       </div>
       <div className="col-lg-2">
         <div className="footer-links">
           <h5>Quick Links</h5>
           <ul className='list-unstyled'>
             <li><Link to="link">About eTreeks </Link> </li>
             <li><Link to="link"> Courses Catalog</Link> </li>
             <li><Link to="link">Our Testimonials </Link> </li>
             <li><Link to="link">Premium Learning </Link> </li>
             <li><Link to="link">From the Blog </Link> </li>
           </ul>
         </div>
       </div>
       <div className="col-lg-3">
       <div className="footer-links">
           <h5>Popular Categories</h5>
           <ul className='list-unstyled'>
             <li><Link to="link">Business English</Link> </li>
             <li><Link to="link">Software Development</Link> </li>
             <li><Link to="link">Finance & Accounting </Link> </li>
             <li><Link to="link">Health and Fitness</Link> </li>
             <li><Link to="link">Office Productivity</Link> </li>
           </ul>
         </div>
       </div>
       <div className="col-lg-3">
         <div className="footer-form">
           <h5>Stay in Touch</h5>
           <form className='newsletter-form' action="">
            <input type="Email"  autoComplete='off' placeholder='Your Email Adress'/>

            <div>
              <button className='btn' type='submit'>Subscribe</button>
            </div>
           </form>
         </div>
       </div>

       </div>
       <div className="bottom-footer">
         <div className="col-lg-8">
           <ul className='d-flex list-unstyled'>
             <li>
               <p>© Copyright eTreeks 2022</p>
             </li>
             <li>
               <Link to="">
                 508.746.9892
               </Link>
             </li>
             <li>
               <Link to="">
               hello@domain.com
               </Link>
             </li>
             </ul>
         </div>
       </div>
     </div>
    </section>
  )
}

export default Footer