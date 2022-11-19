import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/Title/useTitle';
import './Details.css'
import package_i from '../../../Assets/Icon/package.svg'
import { BsFillStarFill } from 'react-icons/bs';
import { GoCalendar } from 'react-icons/go';
import { MdLocationOn } from 'react-icons/md';
import Collapse from '../Collapse/Collapse';
import Purchase from '../Purchase/Purchase';
import Reviews from '../Reviews/Reviews';
import Carousel from './Carousel ';





const PackageDetails = () => {
   const pkg = useLoaderData();


   const { img1, _id, slider, name, country, location, day, rating, refund, description, included_service, itinerary } = pkg;




   useTitle(`${pkg.location} Details`);
   return (
      <div className='mt-16 w-11/12 mx-auto'>
         {/* Image  */}
         <div className='mb-8'>
            {/* {
               slider ?
                  <>
                     {
                        slider.map(image => <Carousel key={image.img} image={image} />)
                     }
                  </>
                  :
                  <img src={img1} alt="" className='sld-image' />
            } */}
            <img src={img1} alt="" className='sld-image' />
         </div>

         {/* Name  */}
         <h1 className='text-3xl font-bold md:w-4/6'>{name}</h1>

         {/* Packages & rating */}
         <div className='flex gap-10 items-center mt-4 mb-2 mx'>
            <div className='flex items-center gap-3'>
               <img className='text-red-900 w-7' src={package_i} alt="" />  <p className='text-slate-400 font-semibold font-mono'>{slider?.length > 0 ? slider?.length : '1'} Packages</p>
            </div>
            <div className='flex items-center gap-1'><p>{rating}</p> <BsFillStarFill className=' text-amber-500' /></div>
         </div>

         <div className='pl-1 py-2 font-bold pr-5 bg-base-300 w-fit text-gray-600 rounded-md'>
            {/* Location  */}
            <div className='flex items-center gap-3 mb-2'>
               <div><MdLocationOn className='text-2xl' /></div>
               <div>{location},{country} </div>
            </div>

            {/* Day  */}
            <div className='flex items-center gap-3 mb-2'>
               <div><GoCalendar className='text-2xl' /></div>
               <div>{day} Days</div>
            </div>

            {/* Refund  */}
            <p>Refund : {refund}</p>
         </div>

         {/* Description  */}
         <div>
            <h3 className='text-2xl text-gray-700 font-bold mt-5'>About - {location}</h3>
            <p className='md:text-xl text-sm'>{description} </p>
         </div>

         {/* Itinerary  */}
         <div className='mt-16'>
            {
               itinerary &&
               <>
                  <h1 className='text-2xl font-bold text-gray-700 my-5'>Itinerary</h1>
                  {
                     itinerary.map(plan => <Collapse key={plan.header} plan={plan} />)
                  }
               </>
            }
         </div>

         {/* included_service */}
         <div className='my-14 '>
            {included_service &&
               <>
                  <h1 className='mb-5 text-2xl font-bold text-gray-700 '>Included Service</h1>
                  {/* Actually I can't & don't find how to add line break on json string. This why I done it this way..! */}
                  <div>
                     <p>{included_service[0].header} </p>
                     <p>{included_service[1].body} </p>
                     <p className=' font-mono font-semibold mt-3'>{included_service[2].footer} </p>
                  </div>
               </>
            }
         </div>

         {/* Price & Purchase */}
         <div className='my-16'>
            <Purchase pkg={pkg} key={_id} />
         </div>


         {/* Review Section  */}
         <div>
            <Reviews packageId={_id} />
         </div>
      </div>
   );
};

export default PackageDetails;