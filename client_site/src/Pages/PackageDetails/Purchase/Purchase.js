import React from 'react';
import vacation from "../../../Assets/Icon/travel-luggage.png"
// Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Purchase = ({ pkg }) => {


   // Purchase Handler 
   const handlePurchase = (id) => {
      const agree = window.confirm(`Do you wan't to purchase ${pkg.location} trip.`);
      if (agree) {
         return verifyToast('Thank you for purchase !')
      }
      notifyToast('You can check our others packages.');
   }



   // Tost section 

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

   // Error Text
   const notifyToast = (eTxt) => {
      toast.info(eTxt,
         {
            position: "top-center",
            autoClose: 5000,
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
         <div className='price-div flex items-center justify-between flex-col md:flex-row  gap-10 md:gap-0 px-5 py-3 md:px-10 md:py-10' style={{ backgroundImage: `url(${pkg.img1})` }}>
            <div className='text-2xl text-bg'>
               <h4>Price Per Person Double :</h4>
               <strong>BDT {pkg.price}</strong>
            </div>

            {/* Button  */}
            <div onClick={() => handlePurchase(pkg._id)} className='flex items-center text-bg gap-3 hover:outline-sky-600 hover:outline transition-all cursor-pointer'>
               <p className=' text-2xl font-bold '>Confirm</p>
               <img src={vacation} alt="" className=' w-14 h-14' />
            </div>
         </div>

         <ToastContainer />
      </div>
   );
};

export default Purchase;