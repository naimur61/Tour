import React from 'react';
import { FaGlobe, FaHotel, FaWallet, FaWalking } from 'react-icons/fa'
import { ImSpoonKnife } from 'react-icons/im'
import { BiSupport } from 'react-icons/bi'




const Services = () => {



   return (
      <div className='my-10 mx-auto'>

         <p className='font-bold text-center mt-10 text-sky-700'>Our Services</p>
         <h1 className='text-4xl text-gray-700 font-serif font-bold text-center mb-10'>Countless Experiences</h1>

         <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center w-11/12 lg:w-10/12 mx-auto gap-10'>

            {/* single card  */}
            <div className=" p-7 w-72 rounded-md shadow-xl text-white font-bold bg-gray-800 " >
               <div className='flex items-center flex-col'>
                  <div className='serviceLogo mb-3'><FaGlobe /> </div>

                  <p>WorldWide</p>
                  <p className="text-xs mt-3">
                     We are the most trusted taxi service in Goa. We assure you stress-free and safe cab services in Goa to provide a pleasurable experience during your travel within the state.
                  </p>
               </div>
            </div>

            {/* single card  */}
            <div className=" p-7 w-72 rounded-md shadow-xl text-white font-bold bg-gray-800">
               <div className='flex items-center flex-col'>
                  <div className='serviceLogo mb-3'><FaWalking /> </div>

                  <p>Adventures</p>
                  <p className="text-xs mt-3">
                     The Adventure Blog was started in 2007 as a Blogspot and has morphed into a website with a devoted following and social community with some of the biggest .
                  </p>
               </div>
            </div>

            {/* single card  */}
            <div className=" p-7 w-72 rounded-md shadow-xl text-white font-bold bg-gray-800">
               <div className='flex items-center flex-col'>
                  <div className='serviceLogo mb-3'><ImSpoonKnife /> </div>

                  <p>Food & Drinks</p>
                  <p className="text-xs mt-3">
                     Food-drinks is enthousiast about an newly discovered restaurant in Amsterdam. Located on Singel 101 bearing the same name. The restaurant operates without a.
                  </p>
               </div>
            </div>

            {/* single card  */}
            <div className=" p-7 w-72 rounded-md shadow-xl text-white font-bold bg-gray-800">
               <div className='flex items-center flex-col'>
                  <div className='serviceLogo mb-3'><FaHotel /> </div>

                  <p>Affordable Hotels</p>
                  <p className="text-xs mt-3">
                     Considering all the factors and points, hotels are the most cost-effective place to stay. Hotels offered many choices and filters while booking.
                  </p>
               </div>
            </div>

            {/* single card  */}
            <div className=" p-7 w-72 rounded-md shadow-xl text-white font-bold bg-gray-800">
               <div className='flex items-center flex-col'>
                  <div className='serviceLogo mb-3'><FaWallet /> </div>

                  <p>Affordable Price</p>
                  <p className="text-xs mt-3">
                     Spend a relaxing weekend away from the city with the right budget tour packages. Choose from a plethora of destinations with our specially planned budget
                  </p>
               </div>
            </div>

            {/* single card  */}
            <div className=" p-7 w-72 rounded-md shadow-xl text-white font-bold bg-gray-800">
               <div className='flex items-center flex-col'>
                  <div className='serviceLogo mb-3'><BiSupport /> </div>

                  <p>24/7 Support</p>
                  <p className="text-xs mt-3">
                     Providing 24/7 customer service has immense benefits for any business. Learn why it is vital to have 24/7 customer support to build long
                  </p>
               </div>
            </div>


         </div>
      </div>
   );
};

export default Services;