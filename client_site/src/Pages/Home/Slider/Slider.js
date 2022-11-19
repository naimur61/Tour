import React from 'react';
import './Slider.css'

const Slider = ({ sld }) => {
   const { id, img, previews, next } = sld;


   // console.log(sld);
   return (
      <div id={`slide${id}`} className="carousel-item relative w-full">
         <video src={img} alt='' muted autoPlay loop className="w-full rounded-md"></video>
         <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0 gap-5">
            <a href={`#slide${previews}`} className="btn btn-circle sld-btn">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle sld-btn">❯</a>
         </div>
      </div>
   );
};

export default Slider;