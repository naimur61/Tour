import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/Title/useTitle';
import Card from '../Shared/Card/Card';
import './Package.css'




const Packages = () => {
   useTitle('Packages');
   const [packages, setPackages] = useState([])
   const [page, setPage] = useState(0);
   const [size, setSize] = useState(6);
   const [count, setCount] = useState(0)

   const pages = Math.ceil(count / size);


   useEffect(() => {
      fetch(`https://assignment-11-server-site.vercel.app/packages?page=${page}&size=${size}`)
         .then(res => res.json())
         .then(data => {
            setPackages(data.packages);
            setCount(data.count);
         })
   }, [page, size])

   // console.log(packages);



   return (
      <div className='my-14'>
         {/* Header  */}
         <div className='md:w-1/2 mx-auto text-center px-5'>
            <h1 style={{ fontFamily: "'Acme', sans-serif" }} className='text-slate-700 text-4xl font-semibold mb-3'>
               Popular <span className='text-red-400'>Package Tour</span>
            </h1>
            <h4 className=' text-slate-400 font-semibold'>World's leading tour and travels Booking website. Over 30,000 packages worldwide.</h4>
         </div>

         {/* Packages */}
         <div className='my-20 mx-auto grid justify-items-center md:grid-cols-2 xl:grid-cols-3 gap-14 md:gap-8 w-11/12'>
            {
               packages.map(pkg => <Card key={pkg._id} pkg={pkg} />)
            }
         </div>

         <div className='text-center'>
            {
               [...Array(pages).keys()].map(i => <button key={i} className={`${page === i && 'bg-sky-500'} bg-base-300 text-center ml-3 px-4 py-2 rounded-full font-bold text-gray-700 text-xl transition-all hover:scale-105`} onClick={() => setPage(i)}>{i + 1}</button>)
            }

            <select onChange={(event) => setSize(event.target.value)} defaultValue='6' className='bg-base-300 text-center ml-3 px-4 py-2 rounded font-bold text-gray-700 text-xl outline-sky-500'>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="6">6</option>
               <option value="10">10</option>
            </select>
         </div>
      </div>
   );
};

export default Packages;