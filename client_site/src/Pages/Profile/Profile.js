import React from 'react';
import useTitle from '../../Hooks/Title/useTitle';
import useAuth from '../../Hooks/Auth/useAuth';


const Profile = () => {
   useTitle('Profile');
   const { user } = useAuth();



   return (
      <div className="hero min-h-screen mx-auto">
         <div className="hero-content flex-col lg:flex-row-reverse gap-10 justify-between w-full">
            <div >
               <img src={user?.photoURL} className="w-96 rounded-lg shadow-2xl" alt='' />
            </div>
            <div >
               <h1 className="text-5xl font-bold">{user.displayName}</h1>
               {user?.email &&
                  <p className="py-6">{user?.email}</p>
               }
            </div>
         </div>
      </div>
   );
};

export default Profile;