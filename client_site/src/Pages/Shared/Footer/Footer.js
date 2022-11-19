import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';


const Footer = () => {
   return (
      <footer className="footer p-14 bg-neutral text-neutral-content">
         <div>
            <Link to='/' className='text-sky-600 flex items-end gap-2 font-semibold'> <FaPaperPlane className='text-5xl font-extrabold' /> <span className='text-xl' style={{ fontFamily: "'Acme', sans-serif" }}>Tour</span></Link>
            <p>Tour BD.<br />Providing reliable guiding since 2020</p>
            <div className="grid grid-flow-col gap-4">
               <Link className="link link-hover">About us</Link>
               <Link className="link link-hover">Contact</Link>
               <Link className="link link-hover">Jobs</Link>
               <Link className="link link-hover">Press kit</Link>
            </div>
         </div>
         <div>
            <div>

               <span className="footer-title mb-5">Social</span>
               <div className="grid grid-flow-col gap-4 mt-5">
                  <a href='https://www.linkedin.com/in/naimur-r61/' target="_blank" rel="noreferrer" className=' font-bold text-4xl text-blue-800 bg-white rounded'>
                     <BsLinkedin />
                  </a>
                  <a href='https://github.com/Naimur61' target="_blank" rel="noreferrer" className=' font-bold text-4xl bg-gray-900 rounded-full border-0'>
                     <BsGithub />
                  </a>
                  <a href='https://www.facebook.com/nai.mur.3344/' target="_blank" rel="noreferrer" className=' font-bold text-4xl text-blue-800 bg-white rounded-full overflow-hidden w-fit'>
                     <BsFacebook />
                  </a>
               </div>
               <div>

               </div>
            </div>
            <div className='mt-10'>
               <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
         </div>
      </footer >
   );
};

export default Footer;