import React, { useEffect, useState } from 'react';

const IncludedService = ({ packages, setPackages }) => {
   const [included_service, setIncluded_service] = useState({});


   const handleBlur = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      const service = {};
      service[field] = value;
      setIncluded_service(service);
   }


   useEffect(() => {
      // console.log(included_service);
      const newPack = {
         ...packages,
         included_service: [included_service]
      };
      console.log(newPack);

   }, [included_service, packages, setPackages])




   return (
      <div>

         {/* The button to open modal */}
         <label htmlFor="my-modal-5" className="btn btn-sm">Itinerary</label>

         {/* Put this part before </body> tag */}
         <input type="checkbox" id="my-modal-5" className="modal-toggle" />
         <label htmlFor="my-modal-5" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
               {/* about  */}
               <div className="form-control">
                  <label className="label">
                     <span className="label-text"> Included Services</span>
                  </label>
                  <input onBlur={handleBlur} required type="text" placeholder="Please give some information about this location." name='included_service' className="input input-bordered" />
               </div>
            </label>
         </label>
      </div>
   );
};

export default IncludedService;