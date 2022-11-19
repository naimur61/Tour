import React, { useState } from 'react';
import useTitle from '../../Hooks/Title/useTitle';
import warningIcon from '../../Assets/Icon/warning.png'
import Itinerary from './AddRestInfo/Itinerary';
import IncludedService from './AddRestInfo/IncludedService';
// Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddPlaces = () => {
   useTitle('Add Places');
   const [packages, setPackages] = useState({ rating: '3' });



   // Submit Package 
   const handlePackageSubmit = (event) => {
      event.preventDefault();
      // console.log(packages);

      fetch('https://assignment-11-server-site.vercel.app/packages', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(packages)
      })
         .then(res => res.json())
         .then(data => {
            if (data.acknowledged === true) {
               verifyToast('Package create and post successful .')
            }
         })

   }

   // Field & Value 
   const handleBlurValue = (event) => {

      const form = event.target;
      const field = form.name;
      const value = form.value;

      const newPackage = { ...packages }
      newPackage[field] = value;
      setPackages(newPackage)
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




   return (
      <div className='my-20 mx-auto'>
         <div className='w-6/4 flex flex-col items-center mt-16' style={{ fontFamily: "'Acme', sans-serif" }}>
            <img src={warningIcon} className=' w-32 md:w-48 ' alt="" />
            <h1 className='text-center text-3xl text-orange-400 font-bold my-5'>Please fill up the form with carefully !</h1>
         </div>

         <div>
            <div className="card flex-shrink-0 w-8/12 mx-auto shadow-2xl bg-base-100">
               <form onSubmit={handlePackageSubmit} className="card-body">

                  {/* Image  */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">image</span>
                     </label>
                     <input required onBlur={handleBlurValue} type="text" placeholder="Image Link" name='img1' className="input input-bordered" />
                  </div>

                  {/* Name  */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Package Name</span>
                     </label>
                     <input required onBlur={handleBlurValue} type="text" placeholder="Enter your package name" name='name' className="input input-bordered" />
                  </div>

                  {/* Day */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Day</span>
                     </label>
                     <input required onBlur={handleBlurValue} type="number" name='day' placeholder="How many day will stay there ?" className="input input-bordered" />
                  </div>

                  {/* Rating */}
                  <div className=' overflow-hidden'>
                     <label className="label">
                        <span className="label-text text-orange-500 font-serif font-bold">Average rating :</span>
                     </label>
                     <select onBlur={handleBlurValue} className="select select-info w-full max-w-xs" defaultValue='3' required name='rating'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                     </select>
                  </div>

                  {/* Location  */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Location</span>
                     </label>
                     <input required onBlur={handleBlurValue} type="text" placeholder="Location Name" name='location' className="input input-bordered" />
                  </div>

                  {/* Country  */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Country</span>
                     </label>
                     <input required onBlur={handleBlurValue} type="text" placeholder="Country Name" name='country' className="input input-bordered" />
                  </div>

                  {/* Refund  */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Refund</span>
                     </label>
                     <input required onBlur={handleBlurValue} type="text" placeholder="Not acceptable (recommended)" name='refund' className="input input-bordered" />
                  </div>

                  {/* about  */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">About this location</span>
                     </label>
                     <input required onBlur={handleBlurValue} type="text" placeholder="Please give some information about this location." name='description' className="input input-bordered" />
                  </div>

                  {/* Price  */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Cost</span>
                     </label>
                     <input required onBlur={handleBlurValue} type="number" placeholder="How many cost for this tour ?" name='price' className="input input-bordered" />
                  </div>

                  {/* Rest Info  */}
                  {/* <div className=' flex justify-between items-center flex-col md:flex-row px-5 mt-5 gap-8 md:gap-0'>

                     <Itinerary setPackages={setPackages} packages={packages} />
                     <IncludedService />
                  </div> */}


                  {/* Button  */}
                  <div className="form-control mt-6">
                     <button type='submit' className="btn btn-primary">Submit</button>
                  </div>
               </form>
            </div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default AddPlaces;