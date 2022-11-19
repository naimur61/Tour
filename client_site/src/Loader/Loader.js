import { Suspense } from 'react';



const Loader =
   (Component) => (props) =>
   (
      <Suspense fallback={<Loading />}>
         <Component {...props} />
      </Suspense>
   );

export default Loader;

// ==============================|| Loader ||============================== //

const Loading = () => (
   <div className='mx-auto w-56 mt-10'><progress className="progress w-56 mx-auto"></progress></div>
);

