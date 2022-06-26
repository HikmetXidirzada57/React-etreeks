import React from 'react'
import './home11.scss'
import imgcenter from '../../image/image-03.jpg'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import TabletMacIcon from '@mui/icons-material/TabletMac';

const Home11 = () => {
  return (
    <section className='home-11'>
  <div className="container-mini">
      <div className="row justify-content-center">
          <div className="col-lg-10">
              <div className="text-center">
              <h5>Our goal is to make online education work for everyone</h5>
              <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis and cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus libero mauris donec ociis and neque. Phasellus blandit tristique justo ut aliquam. Aliquam vitae molestie nunc sapien justo, aliquet non molestie augue tempor sapien</p>
              </div>
             </div>
      </div>
      <div className="row">
          <div className="col-lg-12">
              <div className="img-center">
                  <img className='img-fluid' src={imgcenter} alt="" />
              </div>
          </div>
      </div>
    
      <div className="icon-boxes">
      <div className="row">
       <div className="col-md-4">
      <div className="a4-boxes">
          <div className="d-flex">
          <span> 
              < MenuBookIcon className='menu-icon'/> 
          </span>
          <div className="abox-text">
              <h4>Trusted Content</h4>
              <p>Congue augue egestas magna volutpat dictum suscipit ipsum egestas magna vitae purus</p>
          </div>
          </div>
     
      </div>
       </div>
       <div className="col-md-4">
      <div className="a4-boxes">
          <div className="d-flex">
          <span> 
              < LocalLibraryIcon className='menu-icon'/> 
          </span>
          <div className="abox-text">
              <h4>Trusted Content</h4>
              <p>Congue augue egestas magna volutpat dictum suscipit ipsum egestas magna vitae purus</p>
          </div>
          </div>
     
      </div>
       </div>
       <div className="col-md-4">
      <div className="a4-boxes">
          <div className="d-flex">
          <span> 
              < TabletMacIcon className='menu-icon'/> 
          </span>
          <div className="abox-text">
              <h4>Trusted Content</h4>
              <p>Congue augue egestas magna volutpat dictum suscipit ipsum egestas magna vitae purus</p>
          </div>
          </div>
     
      </div>
       </div>
   </div>
      </div>
 
  </div>

    </section>
  )
}

export default Home11