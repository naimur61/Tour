import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/Auth/useAuth';

const PrivetRoutes = ({ children }) => {
   const { user, loading } = useAuth();
   const location = useLocation();


   if (loading) {
      return <div className='mx-auto w-56 mt-10'><progress className="progress w-56 mx-auto"></progress></div>;
   }
   if (user) {
      return children;
   }

   return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoutes;