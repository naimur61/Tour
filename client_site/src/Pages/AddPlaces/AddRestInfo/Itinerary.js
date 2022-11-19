import React, { useEffect, useState } from 'react';




const Itinerary = ({ packages, setPackages }) => {
   const [services, setServices] = useState([]);



   const handleHeader = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      setServices((service) => {
         const oldArray = [...service];
         updateArray(oldArray, { [field]: value });
         return oldArray;
      })
   }


   useEffect(() => {
      // console.log(services);
      setPackages((value) => {
         return {
            ...value,
            itinerary: services
         }
      })
   }, [services, setPackages])



   // UpdateArray
   const updateArray = (array, item) => {
      const index = array.findIndex(
         (i) => Object.keys(i)[0] === Object.keys(item)[0]
      );
      if (index === -1) {
         array.push(item);
      } else {
         array[index] = item;
      }
   };







   return (
      <div>

         {/* The button to open modal */}
         <label htmlFor="my-modal-4" className="btn btn-sm">Itinerary</label>

         {/* Put this part before </body> tag */}
         <input type="checkbox" id="my-modal-4" className="modal-toggle" />
         <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
               <div className="card-body">

                  {/* Header  */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Header</span>
                     </label>
                     <input type="text" required onBlur={handleHeader} name='header' placeholder="Please Enter This way like (Day - 1 ..short activity...)" className="input input-bordered" />
                  </div>

                  {/* about  */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">About</span>
                     </label>
                     <input type="text" required onBlur={handleHeader} name='about' placeholder="What will do this day ?" className="input input-bordered" />
                  </div>

                  {/* Meals  */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Meals</span>
                     </label>
                     <input type="text" required onBlur={handleHeader} name='meals' placeholder="When offer meals ?" className="input input-bordered" />
                  </div>
               </div>
            </label>
         </label>
      </div>
   );
};

export default Itinerary;