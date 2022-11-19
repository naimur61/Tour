import React from 'react';
import Slider from '../Slider/Slider';
import slider1 from '../../../Assets/images/slider/about-vid-1.mp4';
import slider2 from '../../../Assets/images/slider/about-vid-2.mp4';
import slider3 from '../../../Assets/images/slider/about-vid-3.mp4';
import TypeWriterSec from '../TypeWriter/TypeWriter';



const Banner = () => {
   const sliders = [
      {
         id: 1,
         img: slider1,
         previews: 3,
         next: 2
      },
      {
         id: 2,
         img: slider2,
         previews: 1,
         next: 3
      },
      {
         id: 3,
         img: slider3,
         previews: 2,
         next: 1
      },


   ]

   return (
      <div className='my-16'>
         {/* Slider section  */}
         <div className="hero min-h-scree">
            <div className="hero-content flex-col lg:flex-row">
               {/* Video  */}
               <div className="carousel w-full">
                  {
                     sliders.map(sld => <Slider key={sld.id} sld={sld} />)
                  }
               </div>
               <div>

                  {/* Text section  */}
                  <h1 className="text-5xl font-bold" style={{ fontFamily: "'Philosopher', sans-serif" }}>Discover your happiness !</h1>

                  <p className="py-6" style={{ fontFamily: "'Poppins', sans-serif" }}>The table shows that there are four main motives which arise whatever the travel experience; Novelty Seeking, Escapism/Relaxation, Relationships and Self Development.</p>
                  <div className="flex items-center gap-3 font mb-5 px-lg-5 m">
                     <p className="mb-0 text-red-500">Let's go</p> <TypeWriterSec />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;