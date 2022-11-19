import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/Auth/useAuth';
// Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AddReview = ({ params }) => {
   const { user } = useAuth();
   // Single Review state for Post 
   const [review, setReview] = useState({});


   const { packageId, reviews, setReviews } = params;



   // console.log(packageId);

   //  Submit Review 
   const handleSubmitReview = (event) => {
      event.preventDefault();

      const displayName = user?.displayName;
      const photoURL = user?.photoURL;
      let date = Date();
      const email = user?.email;


      const newInfo = {
         ...review,
         packageId,
         displayName,
         photoURL,
         email,
         date
      };

      // console.log(newInfo);

      fetch('https://assignment-11-server-site.vercel.app/reviews', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newInfo)
      })
         .then(res => res.json())
         .then(data => {
            if (data.acknowledged === true) {
               setReviews([newInfo, ...reviews])
               verifyToast('Your review has been added successfully !');
            }
         })

      event.target.reset();

   }

   // Field & Value 
   const handleBlurValue = (event) => {

      const form = event.target;
      const field = form.name;
      const value = form.value;

      const newReview = { ...review }
      newReview[field] = value;
      setReview(newReview);
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
      <div>
         {/* The button to open modal */}
         <label htmlFor="my-modal-4" className="btn">Add Review</label>


         {/* Put this part before </body> tag */}
         <>{
            (user || user?.uid) ?
               <>
                  <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                  <label htmlFor="my-modal-4" className="modal cursor-pointer">
                     <label className="modal-box relative" htmlFor="">

                        {/* Form  */}
                        <form onSubmit={handleSubmitReview}>

                           {/* Rating */}
                           <div className=' overflow-hidden'>
                              <label className="label">
                                 <span className="label-text text-orange-500 font-serif font-bold">Rating Us :</span>
                              </label>
                              <select onBlur={handleBlurValue} className="select select-info w-full max-w-xs" required name='rating' defaultValue='5'>
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
                              <input type="email" onBlur={handleBlurValue} name='email' placeholder='Email' defaultValue={user?.email === null ? "Email" : user?.email} className="input input-bordered input-sm w-full max-w-xs" required readOnly={user?.email !== null} />
                           </div>

                           {/* comment  */}
                           <div className="form-control">
                              <label className="label">
                                 <span className="label-text">Review</span>
                              </label>
                              <textarea onBlur={handleBlurValue} rows="8" cols="50" name="review" className="input input-bordered input-lg w-full max-w-xs" placeholder='Enter text here...' required></textarea>
                           </div>

                           {/* Button  */}
                           <div className='flex justify-end'><button type='submit' className="btn btn-outline btn-info mt-5 text-gray-400">Submit</button></div>
                        </form>
                     </label>
                  </label>
               </>
               :
               <>
                  {/* Put this part before </body> tag */}
                  <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                  <label htmlFor="my-modal-4" className="modal cursor-pointer">
                     <label className="modal-box relative" htmlFor="">
                        <h3 className="text-3xl text-center text-red-500 font-semibold" style={{ fontFamily: "'Acme', sans-serif" }}>Hi !</h3>
                        <p className="py-4">You are not logged in. <Link to='/login' className=' text-sky-600 font-bold underline'>Please login</Link></p>
                     </label>
                  </label>
               </>
         }</>

         <ToastContainer />
      </div >
   );
};

export default AddReview;