import React from 'react'
import './Contact.css'
import { GoLocation, GoMail } from 'react-icons/go'
import { FiPhoneCall } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
   return (
      <div className='contact-page'>
         <div className="container">
            <div className="contact-info">
               <div>
                  <h2>Contact Info</h2>
                  <ul className='info'>
                     <li>
                        <span><GoLocation size={30} className='icons' /></span>
                        <span>
                           Azeraijan, Baku <br />
                           Mir Calal 2 <br />
                           1005
                        </span>
                     </li>
                     <li>
                        <span><GoMail size={30} className='icons' /></span>
                        <span>
                           <a style={{color: 'white', textDecoration: 'none'}} href='mailto:hebibullahmustafazade@gmail.com'>hebibullahmustafazade@gmail.com</a>
                        </span>
                     </li>
                     <li>
                        <span><FiPhoneCall size={29} className='icons' /></span>
                        <span>
                           <a style={{color: 'white', textDecoration: 'none'}} href="tel:+994516002230">+994516002230</a>
                        </span>
                     </li>
                  </ul>
               </div>
               <ul className="sci">
                  <li>
                     <a target='_blank' rel="noreferrer" href='https://www.facebook.com/'>
                        <FaFacebookF />
                     </a>
                  </li>
                  <li>
                     <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/habibullah-mustafazada/'>
                        <FaLinkedinIn />
                     </a>
                  </li>
                  <li>
                     <a target='_blank' rel="noreferrer" href='https://www.instagram.com/hebib_mustafa/'>
                        <FaInstagram />
                     </a>
                  </li>
                  <li>
                     <a target='_blank' rel="noreferrer" href='https://twitter.com/'>
                        <FaTwitter />
                     </a>
                  </li>
                  <li>
                     <a target='_blank' rel="noreferrer" href='https://tr.pinterest.com/'>
                        <FaPinterestP />
                     </a>
                  </li>
               </ul>
            </div>
            <div className="contact-form">
               <h2>Send a Message</h2>
               <div className="form-box">
                  <div className="input-box w50">
                     <input type="text" required />
                     <span>First Name</span>
                  </div>
                  <div className="input-box w50">
                     <input type="text" required />
                     <span>Last Name</span>
                  </div>
                  <div className="input-box w50">
                     <input type="email" required />
                     <span>Email Address</span>
                  </div>
                  <div className="input-box w50">
                     <input type="text" required />
                     <span>Mobile Number</span>
                  </div>
                  <div className="input-box w100">
                     <textarea required></textarea>
                     <span>Write your message here...</span>
                  </div>
                  <div className="input-box w100">
                     <button type='submit'>Send</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contact