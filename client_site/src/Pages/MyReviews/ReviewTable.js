import React, { useEffect, useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { BsFillStarFill } from 'react-icons/bs';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const ReviewTable = ({ survey, handleDeleteReview }) => {
   const [packages, setPackages] = useState([]);

   const { _id, date, packageId, rating, review } = survey;
   const { location, country, img1, price } = packages

   useEffect(() => {
      fetch(`https://assignment-11-server-site.vercel.app/packages/${packageId}`)
         .then(res => res.json())
         .then(data => setPackages(data))
   }, [])



   // console.log(update);




   return (
      <tr>
         <th>
            <label>
               <button onClick={() => handleDeleteReview(_id)} className='flex justify-center items-center text-red-400 text-2xl rounded-full bg-base-200 shadow-md  w-12 h-12 hover:text-white transition-all hover:bg-red-400'><FaTrashAlt /></button>
            </label>
         </th>
         <td>
            <div className="flex items-center space-x-3">
               <div className="avatar">
                  <div className="rounded w-24 h-24">
                     {
                        img1 ? <img src={img1} alt="Avatar" /> : <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                     }

                  </div>
               </div>
               {/* Location and Rating  */}
               <div className='flex flex-col'>
                  <div className='flex items-center gap-3 mb-2'>
                     <div><MdLocationOn className='text-2xl' /></div>
                     <div>{location},{country} </div>
                  </div>
                  <div className='flex items-center gap-3 ml-3'><p>{rating}</p> <BsFillStarFill className=' text-amber-500' /></div>
               </div>
            </div>
         </td>
         <td>
            Price : ${price}
            <br />
            <span className="badge badge-ghost badge-sm">22-10-2022</span>
         </td>
         <td className=' w-40'>{review}</td>
         <th>
            <Link to={`/reviews/${_id}`}>
               <div className='flex justify-center items-center text-green-400 text-2xl rounded bg-base-200 shadow-md  w-12 h-12 hover:text-white transition-all hover:bg-green-400'><FaEdit />
               </div>
            </Link>
         </th>
      </tr>
   );
};

export default ReviewTable;

