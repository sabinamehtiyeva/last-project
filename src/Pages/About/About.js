import React from 'react'
import './About.css'
import Tel from '../../Assets/tel.png'

function About() {
   return (
      <div className='about-page'>
         <div className="intro-part">
            <div className="container">
               <div className="left-box">
                  <p className="intro">More than 300M people use "GIFs" every month to communicate with an animated GIF that expresses their exact thoughts or feelings.
                  </p>
                  <div className="status">
                     <div className="user-num">
                        <span>100M+</span>
                        <span>monthly users</span>
                     </div>
                     <div className="searches-num">
                        <span>10B+</span>
                        <span>searches every month</span>
                     </div>
                  </div>
               </div>

               <div className="right-box">
                  {/* sekil */}
                  <img src={Tel} alt="about-phone" />
               </div>
            </div>
         </div>
         <div className="talking-about">
            <div className="container">
               <h3>People are talking about "GIFs".</h3>
               <div className="cards">
                  <a target='_blank' rel="noreferrer" href='https://www.forbes.com/' className="card">
                     <p>How "GIFs" aims to get GIF-sharing onto every mobile phone</p>
                     <img src="https://tenor.com/assets/img/about/about-us/press/forbes.png" alt="forbes" />
                  </a>
                  <a target='_blank' rel="noreferrer" href='https://edition.cnn.com/' className="card">
                     <p>The most popular GIF of 2022 actually perfectly sums up 2022</p>
                     <img src="https://tenor.com/assets/img/about/about-us/press/cnn.png" alt="cnn" />
                  </a>
                  <a target='_blank' rel="noreferrer" href='https://www.bloomberg.com/' className="card">
                     <p>There's a reason you're seeing those doughnut "GIFs"</p>
                     <img src="https://tenor.com/assets/img/about/about-us/press/bloomberg.png" alt="bloomberg" />
                  </a>
                  <a target='_blank' rel="noreferrer" href='https://techcrunch.com/' className="card">
                     <p>"GIFs" hits 10B GIF searches every month</p>
                     <img src="https://tenor.com/assets/img/about/about-us/press/techcrunch.png" alt="techcrunch" />
                  </a>
               </div>
            </div>
         </div>

         <div className="meet-team">
            <div className="container">
               <div className="left-box">
                  <img src="https://softservellc.org/assets/img/meet-our-team-gif.gif" alt="founders" />
               </div>
               <div className="right-box">
                  <h3>Meet the Creator</h3>
                  <p>
                  "GIFs" was founded by an amateur in 2022 to define a new visual language for 3+ billion mobile users worldwide. <br />
                  "GIFs", we are happy to be supported by investors.
                  </p>
                  <span className='c'>© 2022 "GIFs" . All rights reserved.</span>
               </div>
            </div>
         </div>

         {/* ... */}
      </div>
   )
}

export default About