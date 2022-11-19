import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/Auth/useAuth';
import useTitle from '../../Hooks/Title/useTitle';
import ReviewTable from './ReviewTable';
// Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const MyReviews = () => {
   useTitle('My Reviews');
   const { user } = useAuth();
   const email = user?.email;
   const [reviews, setReviews] = useState([]);

   // console.log(email);


   useEffect(() => {
      fetch('https://assignment-11-server-site.vercel.app/reviewsByEmail', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify({ email })
      })
         .then(res => res.json())
         .then(data => {
            setReviews(data);
         })
   }, [])


   // Delete User Review 
   const handleDeleteReview = (id) => {
      const agree = window.confirm('Are you want to delete this review ?');


      if (agree) {
         fetch(`https://assignment-11-server-site.vercel.app/reviews/${id}`, {
            method: 'DELETE'
         })
            .then(res => res.json())
            .then(data => {
               if (data.acknowledged === true) {
                  const restReview = reviews.filter(review => review._id !== id);
                  setReviews(restReview);
                  verifyToast('Delete successful..!')
               }
            })
      }
   }




   // Success testify
   const verifyToast = (success) => {
      toast.success((success), {
         position: "top-center",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
      });
   };




   return (
      <div className='md:w-10/12 lg:9/12 my-14 mx-auto'>
         <div>
            <h1 className='text-5xl font-extrabold text-center' style={{ fontFamily: "'Philosopher', sans-serif" }}><span className=' text-red-500 mr-3'>Hi ! </span> {user?.displayName}</h1>

            <p className='text-xl text-gray-600 font-bold my-5 text-center'>You have given a total of <span className={reviews?.length < 1 ? "text-red-700" : "text-orange-600"}>{reviews?.length}</span>  review.</p>
         </div>

         {/* Reviews  */}
         <div className="overflow-x-auto w-full">
            <table className="table w-full">
               {/* <!-- head --> */}
               <thead>
                  <tr>
                     <th>
                        Remove
                     </th>
                     <th>Location</th>
                     <th>Cost</th>
                     <th>Review</th>
                     <th>Edit</th>
                  </tr>
               </thead>
               <tbody>
                  {/* <!-- row  --> */}
                  {reviews.length <= 0 ?
                     <p className=' mx-auto text-2xl text-red-600 font-serif font-bold text-center'>No review were added. </p> :
                     reviews.map(survey => <ReviewTable key={survey._id} survey={survey} handleDeleteReview={handleDeleteReview} />)
                  }
               </tbody>
            </table>
         </div>
         <ToastContainer />
      </div>
   );
};

export default MyReviews;