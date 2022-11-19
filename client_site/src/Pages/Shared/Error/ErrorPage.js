import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/Title/useTitle';
import './Error.css'



const ErrorPage = () => {
   useTitle('404')
   return (
      <div id='container'>
         <div className='content'>
            <h2 className='erHeader'>404</h2>
            <h4>Opps! Page not found</h4>
            <p>The page you were looking for doesn't  exist. You may have mistyped the address or the page may have moved.</p>
            <Link to='/'>Back To Home</Link>
         </div>
      </div>
   );
};

export default ErrorPage;