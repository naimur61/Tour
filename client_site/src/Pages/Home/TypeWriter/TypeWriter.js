import React from 'react';
import { Typewriter } from 'react-simple-typewriter'



const TypeWriterSec = () => {
   return (
      <div>
         <Typewriter
            words={["Maldives", "Bangkok", "Kathmandu", "Cox's Bazar", "Colombo", "Srimangal"]}
            loop={6}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={90}
            delaySpeed={3000}
         />
      </div>
   );
};

export default TypeWriterSec;