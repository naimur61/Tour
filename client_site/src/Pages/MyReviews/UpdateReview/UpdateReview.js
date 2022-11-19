import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/Title/useTitle';
// Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UpdateReview = () => {
   useTitle('Update Reviews')
   const [update, setUpdate] = useState({});
   const reviews = useLoaderData();

   const { _id, email, displayName, photoURL, review } = reviews;


   // Update Review 
   const handleUpdateReview = (event) => {
      event.preventDefault();

      fetch(`https://assignment-11-server-site.vercel.app/reviews/${_id}`, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(update)
      })
         .then(res => res.json())
         .then(data => {
            if (data.acknowledged === true) {
               verifyToast('Review update successfully..!')
            }
         })
   }

   const handleChange = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      const newInfo = { ...update };
      newInfo[field] = value;

      setUpdate(newInfo);
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
      <div className=' w-7/12 mx-auto my-20 '>
         <div>
            <img src={photoURL} alt="" />
            <h3 className=' text-3xl text-gray-700 mt-5'>{displayName}</h3>
         </div>

         {/* Form  */}
         <form onSubmit={handleUpdateReview}>

            {/* Rating */}
            <div className=' overflow-hidden'>
               <label className="label">
                  <span className="label-text text-orange-500 font-serif font-bold">Rating Us :</span>
               </label>
               <select onChange={handleChange} className="select select-info w-full max-w-xs" required name='rating' defaultValue='5'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
               </select>
            </div>


            {/* Email  */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Email</span>
               </label>
               <input type="email" defaultValue={email} readOnly />
            </div>

            {/* comment  */}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Review</span>
               </label>
               <textarea onChange={handleChange} rows="8" cols="60" name="review" className="input input-bordered input-lg w-full max-w-xs" defaultValue={review} required></textarea>
            </div>

            {/* Button  */}
            <div><button type='submit' className="btn btn-outline btn-info mt-5 text-gray-400">Submit</button></div>
         </form>
         <ToastContainer />
      </div>
   );
};

export default UpdateReview;