import React from 'react';
import './Memory.css'
import img1 from '../../../Assets/images/album/img1.jpg'
import img2 from '../../../Assets/images/album/img2.jpg'
import img3 from '../../../Assets/images/album/img3.jpg'
import img4 from '../../../Assets/images/album/img4.jpg'
import img5 from '../../../Assets/images/album/img5.jpg'
import img6 from '../../../Assets/images/album/img6.jpg'
import img7 from '../../../Assets/images/album/img7.jpg'
import img8 from '../../../Assets/images/album/img8.jpg'
import img9 from '../../../Assets/images/album/img9.jpg'





const Memories = () => {
   return (
      <div className='mx-10 my-10'>
         <p className=' text-center text-xl font-bold font-serif text-sky-700'>Our Gallery</p>

         <div className="text-center font mb-5 px-lg-5 m">
            <p className="mb-0 text-gray-700">Our Spacial <span className=' text-red-500'>Memories</span> </p>
         </div>

         <div className='memoryBox-container'>
            <div className='memoryBox'>
               <img src={img1} alt="" />
               <span>Travel spot</span>
               <h3>Greenland</h3>
            </div>
            <div className='memoryBox'>
               <img src={img2} alt="" />
               <span>Travel spot</span>
               <h3>Alaska</h3>
            </div>
            <div className='memoryBox'>
               <img src={img3} alt="" />
               <span>Travel spot</span>
               <h3>Thiland</h3>
            </div>
            <div className='memoryBox'>
               <img src={img4} alt="" />
               <span>Travel spot</span>
               <h3>Brazil</h3>
            </div>
            <div className='memoryBox'>
               <img src={img5} alt="" />
               <span>Travel spot</span>
               <h3>Iceland</h3>
            </div>
            <div className='memoryBox'>
               <img src={img6} alt="" />
               <span>Travel spot</span>
               <h3>Maldive</h3>
            </div>
            <div className='memoryBox'>
               <img src={img7} alt="" />
               <span>Travel spot</span>
               <h3>Bangkok</h3>
            </div>
            <div className='memoryBox'>
               <img src={img8} alt="" />
               <span>Travel spot</span>
               <h3>Kathmandu</h3>
            </div>
            <div className='memoryBox'>
               <img src={img9} alt="" />
               <span>Travel spot</span>
               <h3>Colombo</h3>
            </div>

         </div>
      </div>
   );
};

export default Memories;