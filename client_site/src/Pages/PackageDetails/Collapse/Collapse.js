import React from 'react';

const Collapse = ({ plan }) => {
   const { header, about, meals } = plan;

   return (
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 rounded">
         <div className="collapse-title text-xl font-medium">
            {header}
         </div>
         <div className="collapse-content">
            <p>{about}</p>
            <strong>Meals : {meals}</strong>
         </div>
      </div>
   );
};

export default Collapse;