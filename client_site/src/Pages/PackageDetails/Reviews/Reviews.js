import React, { useEffect, useState } from 'react';
import Review from '../../Shared/Review/Review';
import AddReview from './AddReview';

const Reviews = ({ packageId }) => {
   const [reviews, setReviews] = useState([]);

   const addReview = { reviews, setReviews, packageId }


   useEffect(() => {
      fetch('https://assignment-11-server-site.vercel.app/reviewsById', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify({ packageId })
      })
         .then(res => res.json())
         .then(data => {
            setReviews(data)
         })
   }, [])



   return (
      <div>
         {/* Add Review  */}
         <AddReview params={addReview} />

         {/* Display Review */}
         <div className='my-20 mx-auto grid justify-items-center md:grid-cols-3 xl:grid-cols-4 gap-14 md:gap-8 w-11/12 xl:w-10/12'>
            {
               reviews.map(review => <Review key={review._id} survey={review} />)
            }
         </div>
      </div>
   );
};

export default Reviews;