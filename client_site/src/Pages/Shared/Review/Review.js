import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { GoCalendar } from 'react-icons/go';






const Review = ({ survey }) => {

   const { date, displayName, photoURL, rating, review } = survey;



   return (
      <div className="card w-56 lg:w-60 border " style={{ fontFamily: " 'Poppins', sans-serif" }}>
         <figure className='mt-8'><img className=' w-32 h-32 rounded-full' src={photoURL} alt="person" /></figure>
         <div className="mx-5 mb-5">
            <h2 className=' text-2xl font-bold text-gray-700 text-center'>{displayName}</h2>

            {/* date & rating */}
            <div className='flex gap-10 justify-between items-center mt-2 mb-2 font-semibold px-2'>
               <div className='flex items-center gap-1'>
                  <GoCalendar />
                  <p>date</p>
               </div>

               <div className='flex items-center gap-1'><p>{rating}</p> <BsFillStarFill className=' text-amber-500' /></div>
            </div>

            {/* The button to open modal */}
            <label htmlFor="my-modal-4">
               <p className=' bg-base-200 p-5 rounded-md text-sm cursor-pointer'>"{review?.length > 50 ? review.slice(0, 50) + '...' : review}"</p>
            </label>

            {/* Put this part before </body> tag */}
            {/* <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
               <label className="modal-box relative" htmlFor="">
                  <h3 className="text-lg font-bold">{displayName}</h3>
                  <p className="py-4">{review}</p>
               </label>
            </label> */}


         </div>
      </div>
   );
};

export default Review;