import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/Title/useTitle';
import Card from '../../Shared/Card/Card';
import Banner from '../Banner/Banner';
import Memories from '../Memorye/Memories';
import './Home.css';
import Services from './Services/Services';



const Home = () => {
   useTitle('Home');
   const { packages } = useLoaderData({});




   return (
      <div>
         {/* Header Section  */}
         <div className='home-header text-white'>
            <div className='p-5 w-1/2 mx-auto'>
               <h1 style={{ fontFamily: "'Philosopher', sans-serif" }} className='text-5xl text-center mb-10'>
                  All journeys have secret destinations of which the traveler is unaware.
               </h1>
               <div className='text-right text-2xl m-5'>
                  <small style={{ fontFamily: "'Acme', sans-serif" }}>Martin Buber_</small>
               </div>
            </div>
         </div>

         {/* Banner Section */}
         <Banner />

         {/* Packages Section  */}
         <div className='my-16'>
            <h1 style={{ fontFamily: "'Acme', sans-serif" }} className='text-slate-700 text-4xl font-semibold mb-3 text-center'>
               Our <span className='text-red-400'>Packages</span>
            </h1>
            <div className='my-20 mx-auto grid justify-items-center md:grid-cols-2 xl:grid-cols-3 gap-14 md:gap-8 w-11/12'>
               {
                  packages.map(pkg => <Card key={pkg._id} pkg={pkg} />)
               }
            </div>

            <div className='flex justify-end md:justify-center md:w-full w-11/12'>
               <Link to='/packages'><button className="btn btn-primary btn-sm px-7 rounded">See All</button></Link>
            </div>
         </div>

         {/* Memories */}
         <Memories />


         {/* Services Section */}
         <Services />


      </div>
   );
};

export default Home;