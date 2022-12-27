import React from 'react'
import './NotFoundPage.css'

const NotFoundPage = ({error}) => {
   return (
      <div className="error-page">
         <div className='container'>
            <div className="content">
               <h2 className="header" data-text={error}>
                  {error}
               </h2>
               <h4 data-text="Opps! Page not found">
                  Opps! Page not found
               </h4>
               <p>
                  Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
               </p>
            </div>
         </div>
      </div>
   )
}

export default NotFoundPage