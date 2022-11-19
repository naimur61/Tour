import React from 'react';
import package_i from '../../../Assets/Icon/package.svg'
import { BsFillStarFill } from 'react-icons/bs';
import { TiArrowRightThick } from 'react-icons/ti';
import { Link } from 'react-router-dom';
// React photoView 
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';





const Card = ({ pkg }) => {
   const { _id, location, price, img1, description, rating, slider } = pkg;
   // console.log(pkg);
   return (
      <div className="card w-80 lg:w-96 " style={{ fontFamily: " 'Poppins', sans-serif" }}>

         {/* Image  */}
         <figure>
            <PhotoProvider>
               <PhotoView src={img1}>
                  <img src={img1} alt="" className=' hover:scale-105 transition h-72' />
               </PhotoView>
            </PhotoProvider>

         </figure>

         {/* Card body  */}
         <div>
            {/* Packages & reading */}
            <div className='flex gap-10 items-center mt-4 mb-2 mx'>
               <div className='flex items-center gap-3'>
                  <img className='text-red-900 w-7' src={package_i} alt="" />
                  <p className='text-slate-400 font-semibold font-mono'>{slider?.length > 0 ? slider?.length : '1'} Packages</p>
               </div>
               <div className='flex items-center gap-1'><p>{rating}</p> <BsFillStarFill className=' text-amber-500' /></div>
            </div>

            {/* Price  */}
            <div>
               <h3 className='text-xl font-semibold mb-2'>{location}</h3>
               <p><small>Starts From</small> <span className=' text-amber-500 font-semibold text-lg'>BDT {price} </span></p>
            </div>

            {/* Description  */}
            <div className=' text-gray-600 font-semibold text-xs md:text-sm mt-3'>
               {
                  description?.length > 100 ? description.slice(0, 100) + "..." : description
               }
            </div>
         </div>

         {/* Button  */}
         <div className="card-actions justify-end p-4">
            <Link to={`/packages/${_id}`}>
               <TiArrowRightThick className='text-2xl text-orange-600' />
            </Link>
         </div>
      </div>
   );
};

export default Card;