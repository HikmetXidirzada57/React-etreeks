import React from 'react'
import './detail1.scss'
// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import rvauthimg from '../../../image/review-author-1.jpg'

const Detail1 = () => {
    return (
        <>
               <section className='detail-1'>
            <div className="container">
                <div className="row">
                    <div className="breadcump">
                        <ul className='d-flex list-unstyled'>
                            <li>Home</li>
                            <li>Back to Block</li>
                            <li>Egestas valuet</li>
                        </ul>
                    </div>
                </div>

                </div>
                <div className="col-lg-12">
                    <div className="course-txt">
                        <h3>WordPress for Beginners: Create a Website Step by Step</h3>
                        <p>Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus mauris donec magnis</p>
                        <p className='date'>Created by: Kally Brooks • Last updated: 2/2020 • Languages: English, German + 7 more</p>
                        <p className='rating'>4.84 (468 Ratings) • 14,425 Students Enrolled</p>

                        <div className="what-you-learn">
                            <h5>What you'll learn</h5>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className='alt'>
                                        <li>Nullam rutrum eget nunc varius</li>
                                        <li>Integer congue magna at pretium purus pretium ligula undo rutrum</li>
                                        <li>Risus at congue etiam aliquam sapien an egestas posuere blandit</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className='alt'>
                                        <li>Pretium ligula at rutrum dolor auctor</li>
                                        <li>Ligula at rutrum risus integer congue magna at pretium purus pretium</li>
                                        <li>Congue etiam aliquam egestas sapien undo posuere auctor magna</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="requriments cd-block">
                        <h5>Requirements</h5>
                        <p>Lorem ipsum dolor sit amet, lectus laoreet impedit gestas. Aenean magna ligula eget dolor suscipit egestas viverra dolor iaculis luctus magna suscipit egestas</p>
                        <ul>
                            <li>Pretium ligula auctor nulla vitae massa aliqum blandit</li>
                            <li>Rutrum risus integer magna at pretium purus pretium cubilia laoreet</li>
                            <li>Aliquam sapien egestas posuere auctor congue magna aliquet non molestie</li>
                        </ul>
                    </div>

                    <div className="c-description cd-block">
                        <h5>Course description</h5>
                        <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo</p>
                        <p>Quisque eu tristique neque phasellus:</p>
                        <ul>
                            <li>Pretium ligula dolor auctor nulla vitae massa a purus aliqum blandit</li>
                            <li>Ligula at rutrum risus integer congue magna at pretium purus pretium gravida</li>
                            <li>Congue etiam aliquam sapien egestas posuere auctor congue magna</li>
                            <li>Suscipit egestas viverra dolor iaculis luctus magna suscipit egestas</li>
                            <li>Aliquet elementum massa vestibulum ut sagittis massa lorem</li>
                        </ul>
                    </div>
                    <div className="cs-target cd-block">
                        <h5>Who this course is for:</h5>
                        <ul>
                            <li>Quisque vel laoreet turpis urna augue, viverra a augue eget, dictum</li>
                            <li>Sagittis congue augue egestas volutpat magna suscipit egestas magna ipsum egestas vitae purus efficitur ipsum primis in cubilia laoreet augue luctus donec diam</li>
                            <li>Nullam non scelerisque lectus. In at mauris vel nisl convallis porta</li>
                        </ul>
                    </div>
                    <div className="cs-content cd-block">
                        <h5>Course content</h5>
                        <p>Level Beginner • 13 Lectures • 03:06:14 Total Hours</p>
                        {/* <div className="accordion">
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Introducion</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                        Pretium ligula auctor nulla vitae massa aliqum blandit <br />
                                         Rutrum risus integer magna at pretium purus pretium cubilia laoreet <br />
                                          Mauris donec ociis magnis sapien
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Getting Started</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography>User Generated Content</Typography>
                                    </AccordionSummary>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography>Course Assessment</Typography>
                                    </AccordionSummary>
                                </Accordion>
                            </div>
                        </div> */}
                    </div>

                    <div className="review cd-block">
                      <div className="review-txt">
                      <p>Etiam sapien a sagittis congue and augue massa varius egestas a suscipit magna undo tempus aliquet porta magna ipsum and mauris placerat feugiat primis integer an auctor cursus euismod at purus pretium efficitur ipsum laoreet augue egestas</p>
                       <div className="review-author">
                           <div className="author-avatar">
                            <img className='img-fluid' src={rvauthimg} alt="" />
                           </div>
                           <div className="review-a">
                               <h5>Jim M.</h5>
                               <span>Software Engineer</span>
                           </div>
                       </div>
                      </div>

                    </div>
                    <div className="review cd-block">
                      <div className="review-txt">
                      <p>Etiam sapien a sagittis congue and augue massa varius egestas a suscipit magna undo tempus aliquet porta magna ipsum and mauris placerat feugiat primis integer an auctor cursus euismod at purus pretium efficitur ipsum laoreet augue egestas</p>
                       <div className="review-author">
                           <div className="author-avatar">
                            <img className='img-fluid' src={rvauthimg} alt="" />
                           </div>
                           <div className="review-a">
                               <h5>Jim M.</h5>
                               <span>Software Engineer</span>
                           </div>
                       </div>
                      </div>

                    </div>
                    <div className="review cd-block">
                      <div className="review-txt">
                      <p>Etiam sapien a sagittis congue and augue massa varius egestas a suscipit magna undo tempus aliquet porta magna ipsum and mauris placerat feugiat primis integer an auctor cursus euismod at purus pretium efficitur ipsum laoreet augue egestas</p>
                       <div className="review-author">
                           <div className="author-avatar">
                            <img className='img-fluid' src={rvauthimg} alt="" />
                           </div>
                           <div className="review-a">
                               <h5>Jim M.</h5>
                               <span>Software Engineer</span>
                           </div>
                       </div>
                      </div>

                    </div>
                    <div className="review cd-block">
                      <div className="review-txt">
                      <p>Etiam sapien a sagittis congue and augue massa varius egestas a suscipit magna undo tempus aliquet porta magna ipsum and mauris placerat feugiat primis integer an auctor cursus euismod at purus pretium efficitur ipsum laoreet augue egestas</p>
                       <div className="review-author">
                           <div className="author-avatar">
                            <img className='img-fluid' src={rvauthimg} alt="" />
                           </div>
                           <div className="review-a">
                               <h5>Jim M.</h5>
                               <span>Software Engineer</span>
                           </div>
                       </div>
                      </div>

                    </div>
           
          
                </div>
          
       
        </section>
      
        </>
 
    )
}

export default Detail1